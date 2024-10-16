"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <h2 className="font-bold text-4xl text-transparent text-center bg-gradient-to-r bg-clip-text from-purple-300 via-sky-300 to-purple-300">
        Let&apos;s get started
      </h2>
      <p className=" text-sm  mt-2 text-neutral-300 text-center">
        Feel free to reach out for collaborations, projects, or just to say
        hello. I&apos;d love to hear from you!
      </p>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-2 mb-6">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="First Name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Last Name" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="example@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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
