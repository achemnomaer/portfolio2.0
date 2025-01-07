"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import ContactForm from "../contact/ContactForm";

export default function Contact() {
  return (
    <div className="flex w-full mx-auto py-32 px-4">
      <div className="max-w-fit mx-auto">
        <BackgroundGradient className="rounded-[22px] max-w-fit p-4 sm:p-10 bg-gray-900">
          <div className="my-6">
            {/* Modal */}
            <h2 className="font-bold text-3xl sm:text-4xl text-transparent text-center text-white">
              Let&apos;s get started
            </h2>
            <p className="text-sm mt-2 text-neutral-300 text-center">
              Feel free to reach out for collaborations, projects, or just to
              say hello. I&apos;d love to hear from you!
            </p>

            {/* email and phone contact */}
            <div className="flex w-full">
              <div className="flex items-center mt-4 mx-auto">
                <span>
                  <FaEnvelope className="w-5 h-5 text-gray-400" />
                </span>
                <Link
                  href="mailto:achemnomaer@gmail.com"
                  className="text-gray-100 font-medium text-sm ml-3 px-2 py-0.5 bg-gray-700 hover:bg-gray-600 border border-gray-700 rounded-lg shadow-lg"
                >
                  achemnomaer@gmail.com
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
