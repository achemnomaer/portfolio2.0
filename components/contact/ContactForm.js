"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    type: "success", // "success" or "error"
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          resetForm();
          setModalContent({
            isOpen: true,
            type: "success",
            message: "Your message has been sent successfully!",
          });
        } else {
          setModalContent({
            isOpen: true,
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setModalContent({
          isOpen: true,
          type: "error",
          message: "An error occurred. Please check your connection.",
        });
      });
  };

  const resetForm = () => {
    setFormData({ firstname: "", lastname: "", email: "", message: "" });
  };

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={modalContent.isOpen}
        setIsOpen={(isOpen) => setModalContent((prev) => ({ ...prev, isOpen }))}
        type={modalContent.type}
        message={modalContent.message}
      />

      {/* Horizontal Divider */}
      <div className="relative my-6">
        <div className="border-t border-gray-600"></div>
        <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 px-3 text-gray-300 text-sm">
          or
        </p>
      </div>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-2 mb-6">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="First Name"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="relative group/btn hover:opacity-90 block bg-gray-800 hover:bg-gray-700 w-full text-white rounded-md h-10 font-medium transition"
          type="submit"
          aria-busy={isLoading}
          aria-live="polite"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin mx-auto" />
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
