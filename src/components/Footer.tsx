'use client';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 text-sm text-gray-400" id="section5">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              rows={4}
            ></textarea>
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Send</button>
          </form>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
      <div className="text-center mt-8">© 2025 Agency. All rights reserved.</div>
    </footer>
  );
}