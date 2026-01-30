"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mx-4 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-xl font-bold">
            <span className="gradient-text"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {link.name}
              </a>
            ))}
            <Button size="sm">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tanivanagustian@gmail.com&su=Frontend%20Developer%20Opportunity&body=Hello%20Ivan,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20Frontend%20Developer%20opportunity%20with%20you.%0D%0A%0D%0ACompany:%0D%0APosition:%0D%0AContact:%0D%0A%0D%0ABest%20regards,"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="
      md:hidden
      py-6 px-3
      border-t border-border/50
      bg-background/90
      backdrop-blur-lg
      shadow-lg
    "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-4" asChild>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=tanivanagustian@gmail.com&su=Frontend%20Developer%20Opportunity&body=Hello%20Ivan,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20Frontend%20Developer%20opportunity%20with%20you.%0D%0A%0D%0ACompany:%0D%0APosition:%0D%0AContact:%0D%0A%0D%0ABest%20regards,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire Me
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
