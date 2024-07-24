import React from "react";
import { Link } from "react-router-dom";
import '../index.css';
import myimg1 from '../assets/education.jpeg';
import myimg2 from '../assets/research.jpeg';
import myimg3 from '../assets/community.jpeg';

function Home() {
  return (
    <div>
      <header className="hero-section bg-transparent">
        <div className="hero-text">
          <h2>Welcome To</h2>
          <h1>Amuud University</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus dignissimos, voluptates fugiat modi nobis mollitia libero quaerat nisi quod possimus maiores nesciunt architecto doloribus!
          </p>
          <div className="hero-buttons">
            <Link to="/courses">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
            </Link>
            <Link to="/contact">
              <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
            </Link>
          </div>
        </div>
      </header>
      <section className="why-choose-us py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Amuud University?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="feature text-center">
              <div className="flex justify-center mb-4">
                <img src={myimg1} alt="World-Class Education" className="w-40 h-40 rounded-full border-4 border-white shadow-lg" />
              </div>
              <h3 className="text-xl font-medium mt-4">World-Class Education</h3>
              <p className="text-gray-600 mt-2">
                Receive an education that is recognized globally for its excellence.
              </p>
              <button type="button" className="btn btn-outline-light btn-learn-more mt-4">Learn More</button>
            </div>
            <div className="feature text-center">
              <div className="flex justify-center mb-4">
                <img src={myimg2} alt="Innovative Research" className="w-40 h-40 rounded-full border-4 border-white shadow-lg" />
              </div>
              <h3 className="text-xl font-medium mt-4">Innovative Research</h3>
              <p className="text-gray-600 mt-2">
                Engage in groundbreaking research that changes the world.
              </p>
              <button type="button" className="btn btn-outline-light btn-learn-more mt-4">Learn More</button>
            </div>
            <div className="feature text-center">
              <div className="flex justify-center mb-4">
                <img src={myimg3} alt="Diverse Community" className="w-40 h-40 rounded-full border-4 border-white shadow-lg" />
              </div>
              <h3 className="text-xl font-medium mt-4">Diverse Community</h3>
              <p className="text-gray-600 mt-2">
                Join a vibrant and diverse community of students and faculty.
              </p>
              <button type="button" className="btn btn-outline-light btn-learn-more mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
