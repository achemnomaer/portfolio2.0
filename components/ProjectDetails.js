"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { IconExternalLink, IconSquareRoundedChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

export function ProjectDetails({ project }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
          >
            Details
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl mx-auto max-h-[90vh] overflow-y-auto bg-neutral-900 mt-8">
          <DialogHeader className="sr-only">
            <DialogTitle>Project Details</DialogTitle>
            <DialogDescription>Details of the project</DialogDescription>
          </DialogHeader>
          <div>
            <Detail project={project} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
        >
          Details
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-neutral-900 max-h-[95vh]">
        <DrawerHeader className="sr-only">
          <DrawerTitle>Project Details</DrawerTitle>
          <DrawerDescription>Details of the project</DrawerDescription>
        </DrawerHeader>
        <div className="h-full overflow-y-auto mt-4">
          <Detail project={project} />
        </div>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              className="bg-gray-700 hover:bg-gray-800 border-gray-600 text-white hover:text-white"
              variant="outline"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function Detail({ className, project }) {
  // Image captions based on project type
  const getImageCaption = (index, project) => {
    const captions = {
      "Real Estate Website": [
        "Homepage with property search and featured listings",
        "Advanced property filtering and search results",
        "Detailed property view with gallery and specifications",
        "Contact form for property inquiries",
        "Property submission form for sellers",
        "Admin dashboard overview",
        "Admin property management interface",
        "Property listing management panel"
      ],
      "Education Consultancy Website": [
        "Homepage showcasing services and destinations",
        "Course finder with search and filter options",
        "Statistics and success metrics display",
        "Student success stories and testimonials",
        "User dashboard for profile and applications",
        "Blog section with educational content"
      ],
      "CMS for Education Consultancy": [
        "Admin dashboard with key metrics",
        "Counseling session management",
        "Student profile management interface",
        "Individual student profile details",
        "Student application tracking system",
        "Course management panel",
        "Success stories content management",
        "Blog management interface",
        "Blog creation and editing tools"
      ],
      "Job Jatraa – Career Preparation Platform": [
        "Homepage with bootcamp overview",
        "Why choose us section highlighting benefits",
        "Course details and curriculum breakdown",
        "Detailed syllabus and learning outcomes",
        "Enrollment process and pricing"
      ],
      "Gift Store - eCommerce Website": [
        "Homepage with featured products",
        "Product catalog with filtering options",
        "Product detail page with specifications",
        "Shopping cart with item management",
        "Wishlist for saved products",
        "Checkout process and order summary",
        "Payment gateway integration",
        "Order history and tracking",
        "Address management for delivery"
      ]
    };

    return captions[project.title]?.[index] || `Project screenshot ${index + 1}`;
  };

  return (
    <div className="w-full pb-16 gap-x-4 gap-y-6">
      <ImageCarousel imgs={project.projectImages} project={project} getCaption={getImageCaption} />

      <div className="w-full p-4 space-y-8 mt-6">
        {/* Title of the project */}
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-100">
          {project.title}
        </h2>

        {/* Live URL if available */}
        {project.liveLink && (
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center">
              <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
              <span className="text-white font-semibold text-lg">Live URL</span>
            </div>
            <Link href={project.liveLink} passHref legacyBehavior>
              <a
                target="_blank"
                className="text-brand-400 hover:text-brand-500 flex gap-x-2 items-center transition-colors"
              >
                <IconExternalLink className="w-5 h-5" />
                <span>{project.liveLink}</span>
              </a>
            </Link>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-gray-100 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">
              Project Description
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center">
              <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
              <span className="text-white font-semibold text-lg">
                Key Features
              </span>
            </div>
            <ul className="pl-4 space-y-2 list-disc list-inside">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}