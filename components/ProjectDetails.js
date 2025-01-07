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
import { IconSquareRoundedChevronRight } from "@tabler/icons-react";
import ImageCarousel from "./ImageCarousel";

export function ProjectDetails({ project }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const buttonVariant = project.githubLink ? "ghost" : "secondary";

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant={buttonVariant}
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
          variant={buttonVariant}
          className="hover:bg-gray-700 hover:text-white"
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
  return (
    <div className=" w-full pb-16  gap-x-4 gap-y-6">
      <ImageCarousel imgs={project.projectImages} />

      <div className="w-full p-4 space-y-8 mt-6">
        {/* Title of the project */}
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-100">
          {project.title}
        </h2>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 text-gray-100 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* project description */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">
              Project Description
            </span>
          </div>
          <p className="text-gray-300 ">{project.description}</p>
        </div>

        {/* problem statement */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">
              Problem Statement
            </span>
          </div>
          <p className="text-gray-300 ">{project.overview.problemStatement}</p>
        </div>

        {/* Solution */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">Solutions</span>
          </div>
          <p className="text-gray-300 ">{project.overview.solution}</p>
        </div>

        {/* Key Features */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">
              Key Features
            </span>
          </div>
          <ul className="pl-4 space-y-2 list-disc list-inside">
            {project.keyFeatures?.map((feature, index) => (
              <li key={index} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">Challenges</span>
          </div>
          <ul className="pl-4 space-y-2 list-disc list-inside">
            {project.challenges?.map((challenge, index) => (
              <li key={index} className="text-gray-300">
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <IconSquareRoundedChevronRight className="w-6 h-6 text-brand-500" />
            <span className="text-white font-semibold text-lg">Learnings</span>
          </div>
          <ul className="pl-4 space-y-2 list-disc list-inside">
            {project.learnings?.map((learning, index) => (
              <li key={index} className="text-gray-300">
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
