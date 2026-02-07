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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      "9ab1fee5-4ec9-44ca-8f5e-7452e497230e"
    );
    formData.append("subject", "New Contact Message 🚀");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset();
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error sending message",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="p-2 md:p-3 rounded-full bg-primary/20">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:nethmalgeesara098@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                  >
                    nethmalgeesara098@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <div className="p-2 md:p-3 rounded-full bg-primary/20">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +94 76 8692919 <br />
                    +94 70 4201344
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <div className="p-2 md:p-3 rounded-full bg-primary/20">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    Sri Lanka, Anuradhapura, Kahatagasdigiliya
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-6">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/nethmal-geesara-473962351/" target="_blank">
                  <Linkedin className="text-primary" />
                </a>
                <a href="https://www.instagram.com/nethmalg/" target="_blank">
                  <Instagram className="text-primary" />
                </a>
                <Twitter className="text-primary" />
                <Twitch className="text-primary" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
