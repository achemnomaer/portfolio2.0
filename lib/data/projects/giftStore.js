import addressImg from "@/assets/projects/gift-store/add_address.png";
import cartImg from "@/assets/projects/gift-store/cart.png";
import checkoutImg from "@/assets/projects/gift-store/checkout.png";
import landingImg from "@/assets/projects/gift-store/landing.png";
import orderHistoryImg from "@/assets/projects/gift-store/order_history.png";
import paymentImg from "@/assets/projects/gift-store/payment.png";
import productDetailsImg from "@/assets/projects/gift-store/product_details.png";
import productListingImg from "@/assets/projects/gift-store/product_listing.png";
import wishlistImg from "@/assets/projects/gift-store/wishlist.png";

export const giftProject = {
  title: "Gift Store - eCommerce Website",
  description:
    "It is a comprehensive and secure eCommerce gift store, offering a seamless shopping experience. The platform includes an authentication system for secure logins, a fully functional cart, and smooth checkout and payment options, ensuring a user-friendly and efficient shopping journey. This was a personal project created to showcase in my portfolio.",
  techStack: ["Tailwindcss", "Nextjs", "Python", "Django", "Django Rest"],
  githubLink: "https://github.com/achemnomaer/gift-store-frontend",
  liveLink: "https://gift-store-phi.vercel.app/",
  projectImages: [
    landingImg,
    productListingImg,
    productDetailsImg,
    cartImg,
    wishlistImg,
    checkoutImg,
    paymentImg,
    orderHistoryImg,
    addressImg,
  ],

  overview: {
    problemStatement:
      "To showcase a personal eCommerce project demonstrating secure shopping features like user authentication, a functional cart, and smooth payment integration.",
    solution:
      "Developed a user-friendly and secure eCommerce platform with an emphasis on efficient shopping processes, seamless checkout, and user account management.",
  },
  keyFeatures: [
    "User authentication with secure login and registration",
    "Fully functional cart and checkout process",
    "Payment gateway integration",
    "Responsive design for optimal experience on all devices",
    "Account management for order history and address management",
  ],
  challenges: [
    "Implementing secure user authentication and payment integration",
    "Ensuring smooth state management for cart items and user sessions",
    "Optimizing the site for both mobile and desktop experiences",
  ],
  learnings: [
    "Gained experience in building secure authentication systems",
    "Enhanced skills in integrating third-party payment gateways",
    "Improved state management practices for eCommerce platforms",
  ],
};
