import Image from "next/image";
const navItems = ["Home", "History", "Past Events", "Services", "Contact us"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-70 backdrop-blur-sm">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <Image
          src={"/logo.png"}
          alt="Logo"
          width={40}
          height={40}
          />
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