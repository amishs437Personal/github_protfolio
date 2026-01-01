import { useState } from "react";
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="mt-8 animate-fade-up opacity-0 stagger-4" style={{ animationFillMode: 'forwards' }} id="contact">
      <div className="border border-border rounded-md bg-card overflow-hidden">
        <div className="px-4 py-3 bg-secondary/50 border-b border-border">
          <h2 className="font-semibold text-foreground flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contact Me
          </h2>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="github-btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Connect with me</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover:bg-muted transition-colors text-sm text-foreground"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover:bg-muted transition-colors text-sm text-foreground"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover:bg-muted transition-colors text-sm text-foreground"
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </a>
                </div>
              </div>

              <div className="p-4 bg-secondary/50 rounded-md border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-2">📍 Based in</h3>
                <p className="text-muted-foreground text-sm">Lucknow India</p>
                <p className="text-muted-foreground text-sm mt-1">Available for remote work worldwide</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/30">
                <h3 className="text-sm font-semibold text-primary mb-2">🟢 Currently Available</h3>
                <p className="text-foreground/80 text-sm">
                  I'm open to new opportunities! Whether it's a full-time position, 
                  freelance project, or collaboration, I'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
