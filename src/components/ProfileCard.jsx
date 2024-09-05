const alumniData = [
  {
    name: "John Doe",
    description: "Software Engineer at Google",
    imageUrl: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smith",
    description: "Data Scientist at Amazon",
    imageUrl: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Brown",
    description: "Product Manager at Facebook",
    imageUrl: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Emily Johnson",
    description: "UX Designer at Apple",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Lee",
    description: "AI Researcher at Microsoft",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sarah Wilson",
    description: "Marketing Specialist at Tesla",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProfileCards = () => (
  <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumniData.map((alumnus, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={alumnus.imageUrl}
              alt={alumnus.name}
              className="w-48 h-48 mx-auto object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{alumnus.name}</h3>
              <p className="mt-3 text-gray-600">{alumnus.description}</p>
              <button
                className="mt-4 w-full py-2 px-4 text-white bg-[#344C64] rounded-md hover:bg-[#57A6A1] transition-colors"
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProfileCards;
