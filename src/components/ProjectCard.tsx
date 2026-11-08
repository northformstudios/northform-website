import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Smartphone, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProjectConfig } from '../config/agencyConfig';
import BrowserMockup from './BrowserMockup';

interface ProjectCardProps {
  project: ProjectConfig;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasLiveDemo = Boolean(project.previewUrl && project.previewUrl.trim() !== '');

  const domainMap: Record<string, string> = {
    'estate-one': 'estate-one.netlify.app',
    'maison-kitchen': 'maison-kitchen.netlify.app',
    'solara-energy': 'solaraenergy1.netlify.app',
  };

  const domain = domainMap[project.id] || `${project.slug}.studio`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-3xl bg-white border border-[#151A24]/8 hover:border-[#151A24]/20 overflow-hidden studio-card-shadow hover:shadow-2xl transition-all duration-300"
    >
      {/* Studio Browser Mockup Frame */}
      <div className="p-4 sm:p-5 bg-[#FAF8F5] border-b border-[#151A24]/6">
        <BrowserMockup
          desktopImage={project.desktopScreenshot}
          mobileImage={project.mobileScreenshot}
          title={project.name}
          domain={domain}
          aspectRatio="16/10"
        />
      </div>

      {/* Card Content & Narrative */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase bg-[#151A24] text-white">
              {project.industry}
            </span>
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold bg-[#DCE5FF] text-[#496BFF]">
              Concept Showcase
            </span>
          </div>

          <h3 className="text-2xl font-bold font-heading text-[#151A24] tracking-tight group-hover:text-[#496BFF] transition-colors">
            {project.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#707887] leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-[#F8F6F1] text-[#151A24] border border-[#151A24]/8"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#151A24]/6 flex items-center justify-between">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#151A24] group-hover:text-[#496BFF] transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {hasLiveDemo ? (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#496BFF] hover:underline"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <Link
              to={`/work/${project.slug}`}
              className="text-[11px] font-mono text-[#707887] hover:text-[#151A24]"
            >
              Interactive Specs &rarr;
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
