import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Smartphone, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProjectConfig } from '../config/agencyConfig';

interface ProjectCardProps {
  project: ProjectConfig;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasLiveDemo = Boolean(project.previewUrl && project.previewUrl.trim() !== '');

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#151A24]/8 hover:border-[#151A24]/20 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
    >
      {/* Visual Showcase Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F7F5F0] border-b border-[#151A24]/6">
        
        {/* Concept Demo Pill Badge */}
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-white/95 text-[#151A24] border border-[#151A24]/10 shadow-xs">
            Concept Demo
          </span>
          {hasLiveDemo ? (
            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Live Demo
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-medium bg-[#151A24]/5 text-[#707887]">
              Case Study
            </span>
          )}
        </div>

        {/* Industry Pill */}
        <div className="absolute top-3.5 right-3.5 z-20">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-[#151A24] text-white">
            {project.industry}
          </span>
        </div>

        {/* Desktop Screenshot */}
        <img
          src={project.desktopScreenshot}
          alt={`${project.name} Desktop Preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Floating Mobile Preview Teaser (Desktop/Tablet) */}
        <div className="absolute -bottom-4 right-3 w-28 sm:w-32 aspect-9/19 rounded-xl overflow-hidden border-2 border-white shadow-xl transition-transform duration-300 ease-out group-hover:translate-y-[-6px] hidden sm:block">
          <img
            src={project.mobileScreenshot}
            alt={`${project.name} Mobile Preview`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      {/* Card Content & Narrative */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-heading text-[#151A24] tracking-tight group-hover:text-[#496BFF] transition-colors">
              {project.name}
            </h3>
            <span className="text-xs text-[#707887] flex items-center gap-1">
              <Monitor className="w-3.5 h-3.5" />
              <span>+</span>
              <Smartphone className="w-3.5 h-3.5" />
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#707887] leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#F7F5F0] text-[#707887] border border-[#151A24]/6"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3.5 border-t border-[#151A24]/6 flex items-center justify-between">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#151A24] hover:text-[#496BFF] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#496BFF]" />
          </Link>

          {hasLiveDemo ? (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#496BFF] hover:underline"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-[11px] text-[#707887] font-mono">
              Demo on Request
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
