/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition focus:outline-none"
      onClick={onClick}
      aria-label="Next Slide"
      style={{ zIndex: 1 }}  // Ensure it's above other elements
    >
      &rarr;
    </button>
  );

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition focus:outline-none"
      onClick={onClick}
      aria-label="Previous Slide"
      style={{ zIndex: 1 }}  // Ensure it's above other elements
    >
      &larr;
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="relative h-96 bg-cover bg-center" >
              <div style={{ backgroundImage: "url('https://media.istockphoto.com/id/497420616/vector/graduation-hand-drawn-seamless-pattern-in-colour.jpg?s=2048x2048&w=is&k=20&c=3PHo9ky_Z0ImRKAMrJD8bX9yGSS6dhshcLkCWJZS-vE=')",backgroundPosition:'center' }} className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-black bg-opacity-40 w-full  text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Platform</h1>
                  <p className="mt-4 text-lg md:text-2xl">Connecting students and alumni for a brighter future</p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative h-96 bg-cover bg-center" >
              <div style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/strategy-business-growth-profit-community-involvement-enhance-processes_466036-2229.jpg?w=1060')", backgroundPosition:'center', backgroundRepeat:'no-repeat' }} className="absolute inset-0 bg-cover  flex items-center justify-center">
                <div className="text-center w-full bg-black bg-opacity-40 text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold">Grow with Mentorship</h1>
                  <p className="mt-4 text-lg md:text-2xl">Join a community that helps you thrive</p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="relative h-96 bg-cover bg-center" >
              <div style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/network-connected-people-social-connection-global-community_813661-21064.jpg?w=1380')",backgroundPosition:'center' }} className="absolute inset-0  flex items-center justify-center">
                <div className="text-center w-full bg-black bg-opacity-40 text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold">Connect & Succeed</h1>
                  <p className="mt-4 text-lg md:text-2xl">Build lasting relationships with alumni</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
