import { 
  UserPlus, 
  User, 
  BookOpen, 
  Send, 
  FileCheck, 
  CalendarCheck, 
  CreditCard, 
  CheckCircle2 
} from "lucide-react";

import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "User Registration",
      description: "Create your account with basic information to get started on your journey.",
    },
    {
      icon: User,
      step: "02",
      title: "Profile Creation",
      description: "Complete your academic profile with education history, test scores, and preferences.",
    },
    {
      icon: BookOpen,
      step: "03",
      title: "Course Selection",
      description: "Browse and select courses from our partner universities based on your profile.",
    },
    {
      icon: Send,
      step: "04",
      title: "Application Submission",
      description: "Submit your application with all required documents through our portal.",
    },
    {
      icon: FileCheck,
      step: "05",
      title: "Document Verification",
      description: "Our team verifies all your documents and ensures they meet requirements.",
    },
    {
      icon: CalendarCheck,
      step: "06",
      title: "Appointment Scheduling",
      description: "Schedule counseling sessions and visa interview preparation appointments.",
    },
    {
      icon: CreditCard,
      step: "07",
      title: "Payment Processing",
      description: "Secure payment of application fees and service charges through our platform.",
    },
    {
      icon: CheckCircle2,
      step: "08",
      title: "Application Approval",
      description: "Receive your admission letter and visa approval. You're ready to fly!",
    },
  ];

  return (
    <section id="process" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Journey to{" "}
          <span className="inline-block bg-gradient-to-br from-purple-800 to-orange-600 bg-clip-text text-transparent">
Success</span>
          </h2>
          <p className="text-muted-foreground">
            Our streamlined 8-step process ensures a smooth and hassle-free 
            experience from registration to approval.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0} align-left m-10`}>
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 inline-block max-w-md ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >

                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 }`}>
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>

                      <span className="font-display text-4xl font-bold text-blue-200">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon (for desktop) */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-white border-4 border-primary items-center justify-center z-10 flex-shrink-0">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
