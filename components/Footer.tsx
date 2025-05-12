"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-purple-600"
            >
              <Globe className="h-6 w-6" />
              <span>Sathsara</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Full-Stack Developer specializing in MERN stack and Java
              programming with Spring Boot. Dedicated to delivering efficient
              and creative software solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://github.com/ChamodSathsara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/chamodsathsara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:sathsarawapc@gmail.com"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="tel:+94702402564"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>070 240 25 64</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>sathsarawapc@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>No123, Gorakana, Panadura, Sri Lanka</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with my latest projects and articles.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-r-none"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-purple-600 hover:bg-purple-700"
                >
                  <Send size={16} />
                </Button>
              </div>
              {subscribed && (
                <p className="text-green-600 text-sm">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 text-center">
            <p className="text-muted-foreground text-sm ">
              © {currentYear} Chamod Sathsara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
