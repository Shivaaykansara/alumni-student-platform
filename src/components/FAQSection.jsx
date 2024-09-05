import  { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the purpose of this platform?',
      answer: 'Our platform connects students with alumni for mentorship, networking, and career development.',
    },
    {
      question: 'How can I sign up?',
      answer: 'You can sign up by clicking on the "Sign Up" button on the top-right corner and filling in your details.',
    },
    {
      question: 'Is there any fee to join?',
      answer: 'No, joining our platform is completely free for both students and alumni.',
    },
    {
      question: 'How can I connect with an alumni?',
      answer: 'Once signed in, you can browse through the alumni profiles and send a connection request.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-4">Find answers to common questions about our platform.</p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-lg">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <p className="text-gray-600 py-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
