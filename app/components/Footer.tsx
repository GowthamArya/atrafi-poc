import React from "react";

export default function Footer() {
  return (
    <footer className="text-blue-950 bg-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Us</h3>
          <p>
            Call Mobile: <a href="tel:0557733980" className="underline hover:!text-blue-300">0557733980</a>
          </p>
          <p className="mt-2 max-w-xs">
            Please contact us directly with any questions, comments, or scheduling inquiries you may have.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Atrafi</h3>
          <address className="not-italic">
            23523, Hira Street<br />
            Jeddah, Saudi Arabia
          </address>
          <p className="mt-2">
            <a href="mailto:atrafi@atrafi.net" className="underline hover:!text-blue-300">
              atrafi@atrafi.net
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Hours</h3>
          <p>Sunday - Thursday: 8AM – 5PM</p>
          <p>Friday - Saturday: Off</p>
          
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Emergency Service</h3>
          <p>24/7</p>
        </div>
        <div>
          <MapEmbed />
        </div>
      </div>

      <div className="mt-10 text-center text-blue-300 text-sm">
        &copy; {new Date().getFullYear()} Atrafi Medical Center. All rights reserved.
      </div>
    </footer>
  );
}

export function MapEmbed() {
  return (
    <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.249762019633!2d39.15979947433732!3d21.615189080184948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da445134939d%3A0x1313cfaad43fc8a7!2sHira%20St%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1759869766988!5m2!1sen!2sin" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}
