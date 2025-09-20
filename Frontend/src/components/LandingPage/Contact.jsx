import React from 'react';
import ContactCard from './ContactCard';

const Contact = () => {
  const cards = [
    {
      icon: "./circle.png",
      title: "Our Address",
      description: `Edumon\nIIIT Surat\nGujarat`
    },
    {
      icon: "./mail.png",
      title: "Email Us",
      description: `sumitbeniwal906@gmail.com\nsupport@edumon.com`
    },
    {
      icon: "./contact-us.png",
      title: "Call Us",
      description: "+91 6375711968"
    }
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-4xl font-bold text-gray-900">Contact</p>
        <p className="w-3/5 mx-auto text-lg text-gray-700 mt-2 leading-relaxed">
          Want to know more about our solutions and how we can help you? Please provide your details, and we will get in touch with you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((item, idx) => (
          <ContactCard key={idx} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
