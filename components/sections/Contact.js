"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <div className="flex w-full mx-auto my-10 mb-32">
      <div className="max-w-fit mx-auto">
        <BackgroundGradient className="rounded-[22px] max-w-fit p-4 sm:p-10 bg-gray-900">
          <ContactForm />
        </BackgroundGradient>
      </div>
    </div>
  );
}
