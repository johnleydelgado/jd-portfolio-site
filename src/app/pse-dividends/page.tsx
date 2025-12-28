"use client";

import { useState, useEffect, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  TrendingUp,
  Calendar,
  DollarSign,
  Building2,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  AlertCircle,
  Banknote,
  Clock,
} from "lucide-react";

interface DividendData {
  company_name: string;
  stock_symbol: string;
  dividend_type: string;
  dividend_per_share: number;
  ex_dividend_date: string;
  record_date: string;
  payment_date: string;
  circular_number: string;
}

interface ApiResponse {
  success: boolean;
  count: number;
  last_updated: string;
  data: DividendData[];
}

type SortField = "company_name" | "stock_symbol" | "dividend_per_share" | "ex_dividend_date" | "payment_date";
type SortDirection = "asc" | "desc";

export default function PSEDividendsPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("ex_dividend_date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://n8n-leadgen.org/webhook/pse-dividends");
      const result = await response.json();
      // API returns array with single object
      const apiData = Array.isArray(result) ? result[0] : result;
      setData(apiData);
    } catch {
      setError("Failed to fetch dividend data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredAndSortedData = useMemo(() => {
    if (!data?.data) return [];

    let filtered = data.data.filter(
      (item) =>
        item.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.stock_symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      let aVal: string | number = a[sortField];
      let bVal: string | number = b[sortField];

      if (sortField === "dividend_per_share") {
        aVal = Number(aVal);
        bVal = Number(bVal);
      }

      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [data, searchQuery, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-3.5 h-3.5 opacity-40" />;
    return sortDirection === "asc" ? (
      <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-emerald-400" />
    );
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatCurrency = (value: number) => {
    return `₱${value.toFixed(2)}`;
  };

  const totalDividendValue = useMemo(() => {
    if (!data?.data) return 0;
    return data.data.reduce((sum, item) => sum + item.dividend_per_share, 0);
  }, [data]);

  const highestDividend = useMemo(() => {
    if (!data?.data || data.data.length === 0) return null;
    return data.data.reduce((max, item) =>
      item.dividend_per_share > max.dividend_per_share ? item : max
    );
  }, [data]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 uppercase tracking-widest text-[10px] font-bold">
                  Live Data
                </Badge>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-2">
                PSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Dividends</span>
              </h1>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                Real-time dividend declarations from the Philippine Stock Exchange
              </p>
            </div>

            {/* Last Updated */}
            {data?.last_updated && (
              <div className="flex items-center gap-2 text-gray-500 text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <Clock className="w-4 h-4" />
                <span>Updated: {new Date(data.last_updated).toLocaleString("en-PH")}</span>
              </div>
            )}
          </div>
        </header>

        {/* Stats Cards */}
        {!loading && !error && data && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Total Declarations */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-600">Total</span>
                </div>
                <p className="font-display text-3xl font-bold text-white">{data.count}</p>
                <p className="text-xs text-gray-500 mt-1">Active Declarations</p>
              </div>
            </div>

            {/* Total Dividend Value */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Banknote className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-600">Sum</span>
                </div>
                <p className="font-display text-3xl font-bold text-white">{formatCurrency(totalDividendValue)}</p>
                <p className="text-xs text-gray-500 mt-1">Combined DPS</p>
              </div>
            </div>

            {/* Highest Dividend */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-600">Top</span>
                </div>
                <p className="font-display text-3xl font-bold text-white">
                  {highestDividend ? formatCurrency(highestDividend.dividend_per_share) : "—"}
                </p>
                <p className="text-xs text-gray-500 mt-1 truncate">
                  {highestDividend ? highestDividend.stock_symbol : "Highest DPS"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search by company or symbol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 bg-[#0a0a0a] border-white/10 text-white placeholder:text-gray-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 h-12 rounded-xl"
            />
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span className="font-medium">Refresh</span>
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-white/5 rounded w-1/3" />
                    <div className="h-3 bg-white/5 rounded w-1/4" />
                  </div>
                  <div className="h-8 w-24 bg-white/5 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Connection Error</h3>
            <p className="text-gray-500 mb-6 max-w-md">{error}</p>
            <button
              onClick={fetchData}
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Data Table */}
        {!loading && !error && data && (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4">
                      <button
                        onClick={() => handleSort("company_name")}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                      >
                        Company <SortIcon field="company_name" />
                      </button>
                    </th>
                    <th className="text-left p-4">
                      <button
                        onClick={() => handleSort("stock_symbol")}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                      >
                        Symbol <SortIcon field="stock_symbol" />
                      </button>
                    </th>
                    <th className="text-left p-4">
                      <button
                        onClick={() => handleSort("dividend_per_share")}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                      >
                        DPS <SortIcon field="dividend_per_share" />
                      </button>
                    </th>
                    <th className="text-left p-4">
                      <button
                        onClick={() => handleSort("ex_dividend_date")}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                      >
                        Ex-Date <SortIcon field="ex_dividend_date" />
                      </button>
                    </th>
                    <th className="text-left p-4">
                      <span className="text-xs uppercase tracking-widest text-gray-500">Record</span>
                    </th>
                    <th className="text-left p-4">
                      <button
                        onClick={() => handleSort("payment_date")}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                      >
                        Payment <SortIcon field="payment_date" />
                      </button>
                    </th>
                    <th className="text-left p-4">
                      <span className="text-xs uppercase tracking-widest text-gray-500">Type</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedData.map((item, index) => (
                    <tr
                      key={item.circular_number}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                            <span className="font-display font-bold text-emerald-400 text-sm">
                              {item.stock_symbol.slice(0, 2)}
                            </span>
                          </div>
                          <span className="text-white font-medium truncate max-w-[200px]">
                            {item.company_name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-white/5 text-white border-white/10 font-mono font-bold">
                          {item.stock_symbol}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="font-display text-xl font-bold text-emerald-400">
                          {formatCurrency(item.dividend_per_share)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-sm">{formatDate(item.ex_dividend_date)}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-500">{formatDate(item.record_date)}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-400">{formatDate(item.payment_date)}</span>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                          {item.dividend_type}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {filteredAndSortedData.map((item, index) => (
                <div
                  key={item.circular_number}
                  className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20">
                        <span className="font-display font-bold text-emerald-400">
                          {item.stock_symbol.slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <Badge className="bg-white/5 text-white border-white/10 font-mono font-bold mb-1">
                          {item.stock_symbol}
                        </Badge>
                        <p className="text-sm text-gray-400 truncate max-w-[180px]">{item.company_name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl font-bold text-emerald-400">
                        {formatCurrency(item.dividend_per_share)}
                      </p>
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]">
                        {item.dividend_type}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Ex-Date</p>
                      <p className="text-sm text-white">{formatDate(item.ex_dividend_date)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Record</p>
                      <p className="text-sm text-gray-400">{formatDate(item.record_date)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Payment</p>
                      <p className="text-sm text-gray-400">{formatDate(item.payment_date)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredAndSortedData.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Search className="w-12 h-12 text-gray-700 mb-4" />
                <h3 className="font-display text-xl font-bold text-white mb-2">No Results Found</h3>
                <p className="text-gray-500">Try adjusting your search query</p>
              </div>
            )}

            {/* Results Count */}
            {filteredAndSortedData.length > 0 && (
              <div className="mt-6 text-center text-sm text-gray-600">
                Showing {filteredAndSortedData.length} of {data.count} declarations
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600">
            Data sourced from Philippine Stock Exchange (PSE) public disclosures
          </p>
        </footer>
      </div>
    </div>
  );
}
