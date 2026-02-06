import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "Missing Web3Forms key. Add VITE_WEB3FORMS_KEY in your .env file and restart the dev server.",
      });
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", accessKey);

    // Web3Forms recommended fields
    form.append("from_name", formData.name);
    form.append("replyto", formData.email);

    // Your form fields
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    // Honeypot (spam protection) – must remain empty
    form.append("botcheck", "");

    try {
      setSending(true);
      setStatus({ type: null, message: "" });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus({
          type: "error",
          message: result.message || "There was an error sending your message.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      console.error("Error:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="relative overflow-hidden min-h-screen pt-20 lg:pt-0 bg-[#04081A] text-white">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#04081A]" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-90">
        <Meteors number={24} />
      </div>

      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Send me a message.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">deepnpatel05@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Chicago,IL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-800/60 bg-gray-900/60 shadow-2xl">
              {/* Subtle side glow (no full gradient wash) */}
              <div className="pointer-events-none absolute inset-y-0 -left-28 w-72 bg-gradient-to-r from-cyan-500/25 via-blue-500/10 to-transparent blur-3xl" />
              <div className="pointer-events-none absolute inset-y-0 -right-28 w-72 bg-gradient-to-l from-purple-500/18 via-blue-500/8 to-transparent blur-3xl" />

              <div className="relative z-10 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="botcheck"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full px-4 py-3 rounded-lg bg-black/20 border ${
                          errors.name ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className={`w-full px-4 py-3 rounded-lg bg-black/20 border ${
                          errors.email ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className={`w-full px-4 py-3 rounded-lg bg-black/20 border ${
                          errors.subject ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows="4"
                        className={`w-full px-4 py-3 rounded-lg bg-black/20 border ${
                          errors.message ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-opacity ${
                      sending
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:opacity-90"
                    }`}
                  >
                    <span>{sending ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Status Message */}
                {status?.message ? (
                  <div
                    className={`mt-4 text-center ${
                      status.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    <p>{status.message}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
