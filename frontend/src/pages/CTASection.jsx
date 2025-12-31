import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import React from "react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50 scroll-mt-24">
      <div className="container bg-blue-600 mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-100 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Ready to Start Your
                <br />
                Study Abroad Journey?
              </h2>
              <p className="text-slate-200 text-lg">
                Get in touch with our expert counselors for a free consultation. 
                We'll help you find the perfect university and course for your goals.
              </p>

              <div className="flex flex-col">
                <button 
                  size="xl" 
                  className="bg-white text-blue-600  font-semibold rounded-xl py-3 px-6 flex items-center justify-between w-max hover:bg-white/90 transition "
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call Us</p>
                  <a href="tel:+9779723000000" className="text-white font-semibold">+9779723000000</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email Us</p>
                  <a href="mailto:nfo@globalstudy.com" className="text-white font-semibold">info@globalstudy.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Visit Us</p>
                  <a href="https://maps.app.goo.gl/4AUuWJo2aEQ9KrrXA" target="_blank" rel="noopener noreferrer" className="text-white font-semibold">123 Education Street, NP</a>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      
    </section>
  );
};

export default CTASection;
