import React from "react";
import { Link } from "react-router-dom";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection"; 

const Home = () => {
  return (
    <div className="font-roboto w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="w-full min-h-screen pt-20 flex flex-col items-start text-left bg-gradient-to-br from-blue-200 via-white to-blue-200 px-5 md:px-20 pb-20">

        {/* Heading centered */}
        <div className="w-full flex justify-center px-4">
          <h1 className="mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight text-center">
            Your Dream of{" "}
            <span className="inline-block bg-gradient-to-br from-purple-800 to-orange-600 bg-clip-text text-transparent">
              Studying Abroad
            </span>
            <br className=" sm:block" />
            Starts Here
          </h1>
        </div>

      {/* Paragraph with line breaks only on large screens */}
      <p className="mt-6 max-w-full text-lg md:text-xl text-slate-700 text-left lg:text-left">
        We guide you through every step  <br /> of your international education journey.<br/>
        From university selection to visa approval,<br />
         we make your study abroad dreams a reality.
      </p>


        {/* Button centered */}
        <div className="w-full flex justify-center mt-8">
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 sm:px-8 md:px-10 rounded-full font-semibold transition-colors text-center"
          >
            Apply here
          </Link>
        </div>
        
      </section>



      {/* Other sections */}
      <ServicesSection id="services" />
      <ProcessSection id="process" />
      <Testimonials id="testimonials" />
      <CTASection id="contact" />

    </div>
  );
};

export default Home;
