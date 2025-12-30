import { Star, Quote } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA → UK",
      university: "University of Oxford",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "GlobalStudy made my dream of studying at Oxford a reality. Their guidance through the application process was invaluable. I couldn't have done it without them!",
    },
    {
      name: "Raj Patel",
      country: "India → Canada",
      university: "University of Toronto",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "From test preparation to visa approval, the team was with me every step of the way. Highly recommend their services to anyone looking to study abroad.",
    },
    {
      name: "Emily Chen",
      country: "China → Australia",
      university: "University of Melbourne",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "The scholarship guidance helped me secure a 50% tuition waiver. The counselors are knowledgeable and genuinely care about your success.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-muted-foreground">
            Join thousands of students who have successfully achieved their 
            study abroad dreams with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary">{testimonial.university}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
