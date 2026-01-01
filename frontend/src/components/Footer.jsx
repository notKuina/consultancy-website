import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React from "react";
import {Link} from "react-router-dom";
const Footer = () => {
  const footerLinks = {
    Services: [
      "University Selection",
      "Visa Assistance",
      "Scholarship Guidance",
      "Test Preparation",
    ],
    Countries: ["USA", "UK", "Canada", "Australia", "Germany", "New Zealand"],
    Company: ["About Us", "Careers", "Blog", "Contact"],
    Support: ["FAQs", "Privacy Policy", "Terms of Service", "Help Center"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#081726] text-background py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2 mb-10">
           <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-bold text-xl text-white">
              Global<span className="text-blue-600">Study</span>
            </span>
          </Link>

            <p className="text-white mb-10 max-w-sm">
              Your trusted partner for international education. Helping students 
              achieve their dreams of studying abroad since 2010.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10  text-white rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5 hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className=" text-white font-display font-semibold hover:text-slate-400 mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className=" flex flex-wrap flex-row justify-evenly border-t  border-white pt-10">
          <p className="text-white text-sm">
            © 2024 GlobalStudy. All rights reserved.
          </p>

            <a href="#" className="text-white hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
