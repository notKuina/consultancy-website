import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="font-roboto w-full  overflow-x-hidden">

      <section className="w-full h-148 bg-gradient-to-br from-blue-200 via-white to-blue-200 text-black px-5 flex flex-col justify-between text-center">
        
        {/* Top Content */}
          <div className="mt-30">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
              Your Dream of{" "}
              <span className="bg-gradient-to-br from-purple-800 to-orange-600 bg-clip-text text-transparent">
                Studying Abroad
              </span><br/>
              Starts Here
            </h1>



          <p className= "text-lg max-w-xl text-left mt-20">
            We guide you through every step of your international education journey. 
            From university selection to visa approval, we make your study abroad 
            dreams a reality.
          </p>
        </div>

        {/* Bottom Button */}
        <div className="mb-24">
          <Link
            to="/register"
            className="!text-slate-900 bg-blue-400  font-semibold py-3 px-8 rounded  hover:bg-blue-200  transition"
          >
            Apply here
          </Link>
        </div>

      </section>


      {/* Services Section */}
      <section className="w-full bg-gray-100 py-20 px-5">
        <h2 className="text-3xl font-semibold mb-12 text-center">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[250px] hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">University Guidance</h3>
            <p>Get expert guidance to choose the right university and course.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[250px] hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">Document Assistance</h3>
            <p>Help with SOP, recommendation letters, and admission forms.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 flex-1 min-w-[250px] hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">Visa Support</h3>
            <p>Complete support for visa application and interview preparation.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 px-5 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg md:text-xl">
          We have helped hundreds of students achieve their dream of studying abroad with expert guidance, personalized support, and trusted consultancy services.
        </p>
      </section>

    </div>
  );
};

export default Home;
