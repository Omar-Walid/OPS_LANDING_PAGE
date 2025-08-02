// An array of navigation item names.
const navItems = ["Features", "Pricing"];

/**
 * Renders the header section of the page.
 * This component includes the logo, navigation links, and call-to-action buttons.
 */
export default function Header() {
  return (
    // The main header container with a fixed position.
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      {/* The navigation bar. */}
      <nav className="flex justify-between items-center px-6 py-4">
        {/* The logo and brand name. */}
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
        {/* The navigation links, hidden on small screens. */}
        <ul className="hidden md:flex items-center space-x-6">
          {/* Maps over the navItems array to render each navigation link. */}
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* The call-to-action buttons. */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-400 transition">
            Log in
          </a>
          <a
            href="#"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Try for free
          </a>
        </div>
      </nav>
    </header>
  );
}