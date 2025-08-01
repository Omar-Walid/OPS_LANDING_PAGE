import Link from 'next/link';

const navItems = ["Section1", "Section2", "Section3", "Section4", "Section5"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Agency</h1>
        <ul className="flex space-x-6">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}