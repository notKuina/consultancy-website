import { 
  GraduationCap, 
  FileText, 
  Plane, 
  Landmark, 
  BookOpen, 
  HeadphonesIcon 
} from "lucide-react";
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Get personalized recommendations based on your profile, preferences, and career goals.",
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Expert guidance through the entire application process with document preparation.",
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "Complete visa application support with interview preparation and documentation.",
    },
    {
      icon: Landmark,
      title: "Scholarship Guidance",
      description: "Find and apply for scholarships that match your academic profile and needs.",
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other required tests.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries and concerns throughout the process.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Study Abroad</span>
          </h2>
          <p className="text-muted-foreground">
            From choosing the right university to settling in your new country, 
            we provide comprehensive support at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
