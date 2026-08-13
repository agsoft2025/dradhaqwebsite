'use client';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-primary-600">
          Drdha Q Healthcare
        </div>
        <ul className="hidden md:flex gap-8">
          <li><a href="/" className="hover:text-primary-600">Home</a></li>
          <li><a href="/about" className="hover:text-primary-600">About</a></li>
          <li><a href="/services" className="hover:text-primary-600">Services</a></li>
          <li><a href="/contact" className="hover:text-primary-600">Contact</a></li>
        </ul>
        <div className="flex gap-4">
          <button className="hidden md:inline-block border-2 border-primary-600 text-primary-600 px-6 py-2 rounded hover:bg-primary-600 hover:text-white">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
