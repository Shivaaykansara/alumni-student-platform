
const FeaturesPage = () => {
  const features = [
    {
      id: 1,
      title: 'Personalized Mentorship Matching',
      description: 'Our platform uses advanced algorithms to match students with alumni based on career goals, interests, and expertise. This ensures that each student gets personalized advice from someone who truly understands their aspirations.',
      icon: 'https://plus.unsplash.com/premium_photo-1681842130240-8fb4d3ada35f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudG9yfGVufDB8fDB8fHww',
    },
    {
      id: 2,
      title: 'Exclusive Networking Events',
      description: 'Gain access to members-only networking events, workshops, and webinars hosted by industry leaders and successful alumni. These events provide valuable opportunities for learning and career advancement.',
      icon: 'https://images.unsplash.com/photo-1561489401-fc2876ced162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEV4Y2x1c2l2ZSUyME5ldHdvcmtpbmclMjBFdmVudHN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 3,
      title: 'Real-Time Career Advice and Job Listings',
      description: 'Stay updated with real-time job listings and career advice tailored to your field of study or interest. Connect with alumni who can provide guidance on job applications and career progression.',
      icon: 'https://plus.unsplash.com/premium_photo-1661546559100-7cb036ef0fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJlYWwlMjBUaW1lJTIwQ2FyZWVyJTIwQWR2aWNlJTIwYW5kJTIwSm9iJTIwTGlzdGluZ3N8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 4,
      title: 'Interactive Alumni Profiles',
      description: 'Explore detailed profiles of alumni, including their career paths, achievements, and interests. Each profile includes an option to connect directly, making it easy to reach out and start a conversation.',
      icon: 'https://plus.unsplash.com/premium_photo-1714265042073-ef81b7df1733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW50ZXJhY3RpdmUlMjBBbHVtbmklMjBQcm9maWxlc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">Our Platform Features</h1>
        <p className="text-gray-600 mt-4">Explore the key features that make our platform unique.</p>
      </div>

      {/* Features Section */}
      <div className="relative">
        {/* Vertical Ruler */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 w-0.5 bg-gray-300"></div>

        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col lg:flex-row items-center lg:justify-between py-8 ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            {/* Feature Content */}
            <div className="w-full lg:w-5/12 text-center lg:text-left mb-8 lg:mb-0">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-60 h-44 mx-auto lg:mx-0 mb-4"
              />
              <h2 className="text-2xl font-semibold">{feature.title}</h2>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>

            {/* Empty Space */}
            <div className="w-full lg:w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
