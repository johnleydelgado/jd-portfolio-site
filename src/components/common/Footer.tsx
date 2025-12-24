export function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-display text-sm text-gray-400 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Johnley Mark D. Delgado Portfolio.
        </p>
      </div>
    </footer>
  );
}
