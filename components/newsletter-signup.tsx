"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";

export function NewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log("BASE_URL in news LetterText", BASE_URL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BASE_URL}/enquiry`, {
        firstname: firstName,
        lastname: lastName,
        email,
      });

      if (response.data?.success) {
        setIsSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        toast.success("You’ve successfully signed up for the newsletter!");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Failed to submit. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zoo-beige-light text-zoo-teal-700 rounded-lg p-6 md:p-8">
      <Toaster position="top-center" />
      <h3 className="font-heading text-2xl md:text-3xl mb-4">
        BE THE FIRST TO KNOW
      </h3>
      <p className="mb-6">
        Sign up for our newsletter to receive updates on events, animal news and
        special offers.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-white border-zoo-teal-200 text-zoo-teal-700 md:col-span-1"
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-white border-zoo-teal-200 text-zoo-teal-700 md:col-span-1"
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-zoo-teal-200 text-zoo-teal-700 md:col-span-1"
            required
          />
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="privacy" className="mt-1" required />
          <label htmlFor="privacy" className="text-sm">
            I agree to the privacy policy and consent to Patna Zoo contacting me
            via email.
          </label>
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <Button
          type="submit"
          disabled={loading}
          className="bg-zoo-yellow-600 hover:bg-zoo-yellow-500 text-zoo-teal-900 font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300"
        >
          {loading ? "Submitting..." : "SIGN UP"}
        </Button>
      </form>
    </div>
  );
}
