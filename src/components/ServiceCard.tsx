import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, ShoppingBag, Workflow, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ServiceItem {
  id: string;
  iconName: 'globe' | 'shopping-bag' | 'workflow' | 'refresh';
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  solvedProblem: string;
  targetAudience: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export default function ServiceCard({ service, index = 1 }: ServiceCardProps) {
  const renderIcon = () => {
    switch (service.iconName) {
      case 'globe':
        return <Globe className="w-5 h-5 text-[#151A24] group-hover:text-[#496BFF] transition-colors" />;
      case 'shopping-bag':
        return <ShoppingBag className="w-5 h-5 text-[#151A24] group-hover:text-[#496BFF] transition-colors" />;
      case 'workflow':
        return <Workflow className="w-5 h-5 text-[#151A24] group-hover:text-[#496BFF] transition-colors" />;
      case 'refresh':
        return <RefreshCw className="w-5 h-5 text-[#151A24] group-hover:text-[#496BFF] transition-colors" />;
    }
  };

  const formattedIndex = String(index).padStart(2, '0');

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-[#151A24]/8 hover:border-[#496BFF]/30 studio-card-shadow hover:shadow-2xl transition-all duration-300"
    >
      {/* Top Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#F8F6F1] group-hover:bg-[#DCE5FF] flex items-center justify-center transition-colors duration-300 border border-[#151A24]/6">
              {renderIcon()}
            </div>
            <span className="text-[11px] font-mono font-bold text-[#496BFF]">
              DISCIPLINE {formattedIndex}
            </span>
          </div>

          <span className="text-[10px] font-mono font-bold tracking-wider text-[#707887] uppercase">
            {service.tagline}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#151A24] tracking-tight group-hover:text-[#496BFF] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#707887] leading-relaxed font-normal">
          {service.summary}
        </p>

        {/* Deliverables preview */}
        <div className="pt-2 space-y-2">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#151A24]/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#496BFF] shrink-0" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-5 mt-6 border-t border-[#151A24]/6 flex items-center justify-between">
        <Link
          to={`/services#${service.id}`}
          className="text-xs font-bold text-[#151A24] group-hover:text-[#496BFF] inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Scope &amp; Deliverables</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#496BFF]" />
        </Link>

        <Link
          to={`/quote?service=${service.id}`}
          className="text-xs font-mono font-semibold text-[#707887] hover:text-[#151A24] transition-colors"
        >
          Quote &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
