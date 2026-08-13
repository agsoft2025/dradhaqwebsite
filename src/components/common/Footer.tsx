'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Drdha Q Healthcare</h3>
            <p className="text-gray-400">Healthcare Quality, Audit & Certification Readiness</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/services/healthcare-audit" className="hover:text-white">Healthcare Audit</a></li>
              <li><a href="/services/iso-certification" className="hover:text-white">ISO Certification</a></li>
              <li><a href="/services/accreditation-support" className="hover:text-white">Accreditation</a></li>
              <li><a href="/services/training" className="hover:text-white">Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/approach" className="hover:text-white">Our Approach</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@drdha-q.com</li>
              <li>Phone: +91-XXXXXXXXXX</li>
              <li>WhatsApp: +91-XXXXXXXXXX</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Drdha Q Healthcare LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
