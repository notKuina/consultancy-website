import React from "react";

const Home = () => {
  return (
    <div className="font-sans w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from white to-blue-200 text-black py-32 px-5 text-center">
        <h1 className="py-50px ">
          Study in Australia, USA, UK, Canada & more
        </h1>
<br/>
        <p className="text-lg max-w-xl ">
          We guide you through every step of your international education journey. 
          From university selection to visa approval, we make your study abroad 
          dreams a reality.
        </p>

        <a
          href="/register"
          className="inline-block bg-yellow-400 text-white font-semibold py-3 px-8 rounded hover:bg-yellow-300 transition"
        >
          Start your Journey
        </a>
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
