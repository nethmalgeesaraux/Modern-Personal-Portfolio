import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center lg:text-left">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {/* Email */}
              <div className="flex items-start space-x-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <div className="p-2 md:p-3 rounded-full bg-primary/20 flex-shrink-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</h4>
                  <a
                    href="mailto:nethmalgeesara098@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm break-all"
                  >
                    nethmalgeesara098@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <div className="p-2 md:p-3 rounded-full bg-primary/20 flex-shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Phone</h4>
                  <a
                    href="tel:+94768692919"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    +94 76 8692919
                  </a>
                  <a
                    href="tel:+94704201344"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    +94 70 4201344
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-[1.02] transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <div className="p-2 md:p-3 rounded-full bg-primary/20 flex-shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Location</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Sri Lanka, Anuradapura, Kahatagasadigiliya
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 md:pt-8">
              <h4 className="font-medium mb-4 text-center lg:text-left">Connect With Me</h4>
              <div className="flex space-x-3 md:space-x-4 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/nethmal-geesara-473962351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/nethmalg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                  aria-label="Twitch"
                >
                  <Twitch className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 md:py-3 rounded-lg md:rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 md:py-3 rounded-lg md:rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 md:py-3 rounded-lg md:rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm md:text-base"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all py-3 rounded-lg font-medium text-sm md:text-base"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={14} className="md:size-[16px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};