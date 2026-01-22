"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@johndoe.dev" },
    { icon: Phone, label: "Phone", value: "+62 812 3456 7890" },
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia" },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <div key={item.label} className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-8 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required className="bg-secondary/50 border-border" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                Subject
              </label>
              <Input id="subject" placeholder="Project inquiry" required className="bg-secondary/50 border-border" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-secondary/50 border-border resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full glow-effect" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
