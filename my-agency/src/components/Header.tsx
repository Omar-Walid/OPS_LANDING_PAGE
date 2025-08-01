const navItems = ["Home", "History", "Past Events", "Services", "Contact us"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h1 className="text-xl font-bold">buzzabout</h1>
        </div>
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}