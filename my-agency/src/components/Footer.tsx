'use client';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of service</a></li>
            <li><a href="#" className="hover:text-white">User policy</a></li>
            <li><a href="#" className="hover:text-white">Returns policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">buzzabout</h3>
          <p>© 2025 buzzabout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}