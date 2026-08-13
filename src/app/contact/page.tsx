import { Metadata } from 'next';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us | Drdha Q Healthcare',
  description: 'Get in touch with Drdha Q Healthcare. Contact us for healthcare quality, audit, and certification services.',
};

export default function Contact() {
  return (
    <main className="section-padding">
      <div className="container">
        <h1 className="text-4xl font-bold mb-12">Get In Touch</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-700">+91-XXXXXXXXXX</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-700">info@drdha-q.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-700">+91-XXXXXXXXXX</p>
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-8">Send us an Enquiry</h2>
          <EnquiryForm />
        </div>
      </div>
    </main>
  );
}
