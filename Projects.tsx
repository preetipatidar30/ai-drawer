import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      Making AI helpful for everyone
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.webp"
          title="Image Generation"
          description="Create stunning visuals with our AI image generation tool on AI Drawer. Personalize graphics for illustrations, designs, and artwork. Elevate your digital content and revolutionize your creative process!"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Instant AI-powered responses at hand"
          description="Experience instant AI-powered responses at your fingertips. Get real-time solutions with AI's speed and accuracy. Revolutionize your digital interactions effortlessly."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Maximizing Efficiency with Optimized Codebase"
          description="At AIDrawer, unlock peak efficiency with optimized code solutions. Leverage advanced tools for streamlined development and scalability. Enhance productivity with cutting-edge techniques."
        />
      </div>
    </div>
  );
};

export default Projects;
