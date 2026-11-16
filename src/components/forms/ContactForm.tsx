"use client";

import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phoneNumber,
          email: formData.emailAddress,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Something went wrong on the server.");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-gray-200/80 shadow-sm">
      <h3 className="text-[#0a1118] text-2xl sm:text-3xl font-black tracking-tight mb-2">
        Get in Touch with us
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
        Connect with our experts for fast responses, clear advice, and dependable solutions.
      </p>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-[#f0fbf4] border border-[#d1fae5] text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 bg-[#15803d] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto">
            ✓
          </div>
          <h4 className="text-2xl font-bold text-[#0a1118]">
            Message Submitted Successfully!
          </h4>
          <p className="text-sm text-[#55675d] max-w-md mx-auto leading-relaxed font-medium">
            Thank you, <strong>{formData.firstName || "there"}</strong>! Your message has been received. Our team will review your requirements and get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                emailAddress: "",
                message: "",
              });
            }}
            className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-[#0b3b24] text-white text-xs font-bold shadow-xs hover:bg-[#072a1a] transition-all cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="contact-firstName" className="text-gray-800 text-xs sm:text-sm font-semibold tracking-wide">
                First Name *
              </label>
              <input
                id="contact-firstName"
                type="text"
                name="firstName"
                required
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-hidden focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-lastName" className="text-gray-800 text-xs sm:text-sm font-semibold tracking-wide">
                Last Name *
              </label>
              <input
                id="contact-lastName"
                type="text"
                name="lastName"
                required
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-hidden focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="contact-phoneNumber" className="text-gray-800 text-xs sm:text-sm font-semibold tracking-wide">
                Phone Number *
              </label>
              <input
                id="contact-phoneNumber"
                type="tel"
                name="phoneNumber"
                required
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-hidden focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-emailAddress" className="text-gray-800 text-xs sm:text-sm font-semibold tracking-wide">
                Email Address *
              </label>
              <input
                id="contact-emailAddress"
                type="email"
                name="emailAddress"
                required
                placeholder="Enter Email Address"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-hidden focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-gray-800 text-xs sm:text-sm font-semibold tracking-wide">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Any Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-hidden focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center bg-[#FFB057] hover:bg-[#e09c4d] text-[#0a1118] font-black px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm active:scale-[0.98] cursor-pointer ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
