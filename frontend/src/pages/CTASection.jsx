import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import React from "react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 md:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                Ready to Start Your
                <br />
                Study Abroad Journey?
              </h2>
              <p className="text-slate-900/80 text-lg">
                Get in touch with our expert counselors for a free consultation. 
                We'll help you find the perfect university and course for your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-slate-900/70 text-sm">Call Us</p>
                  <p className="text-slate-900 font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-slate-900/70 text-sm">Email Us</p>
                  <p className="text-slate-900 font-semibold">info@globalstudy.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-slate-900/70 text-sm">Visit Us</p>
                  <p className="text-slate-900 font-semibold">123 Education Street, NY</p>
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
