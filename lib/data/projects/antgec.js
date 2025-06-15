import dashboardImg from "@/assets/projects/antgec/dashboard.png";
import eventDetailsImg from "@/assets/projects/antgec/event-details.png";
import eventsImg from "@/assets/projects/antgec/events.png";
import landingImg from "@/assets/projects/antgec/landing.png";
import paymentStep1Img from "@/assets/projects/antgec/payment-step1.png";
import paymentStep2Img from "@/assets/projects/antgec/payment-step2.png";
import registrationImg from "@/assets/projects/antgec/registration.png";

export const antgecProject = {
  title: "ANTGEC – Event Management Platform",
  description:
    "A modern web platform built for managing international education conferences. The system supports event showcasing, multi-step registration, payment handling, and personalized dashboards for tracking registration and payments.",
  techStack: ["Next.js", "Tailwind CSS", "Supabase", "Stripe", "Framer Motion"],
  liveLink: "https://antgec.com",
  githubLink: null,
  projectImages: [
    {
      src: landingImg,
      caption:
        "Landing page introducing ANTGEC and highlighting upcoming events",
    },
    {
      src: eventsImg,
      caption:
        "Event cards displaying early bird discounts, location, and pricing",
    },
    {
      src: eventDetailsImg,
      caption: "Detailed event page with agenda, highlights, and discounts",
    },
    {
      src: registrationImg,
      caption:
        "Multi-step registration form for consultancies with dynamic event selection",
    },
    {
      src: paymentStep1Img,
      caption:
        "Customizable payment options showing real-time discount application",
    },
    {
      src: paymentStep2Img,
      caption: "Stripe-integrated payment page with secure card input",
    },
    {
      src: dashboardImg,
      caption:
        "User dashboard displaying all registrations, payment progress, and summaries",
    },
  ],
  keyFeatures: [
    "Event listing with location, pricing, and early bird discount support",
    "Detailed event pages with highlights, eligibility, and registration info",
    "Multi-step registration system supporting individual or group entries",
    "Dynamic pricing with discount calculations based on user type and event bundles",
    "Stripe-powered secure payment with partial payment and full payment options",
    "User dashboard for tracking payment status, receipts, and upcoming events",
    "Admin backend (not shown here) for managing events and registrations",
    "Fully responsive design and smooth animations using Framer Motion",
  ],
};
