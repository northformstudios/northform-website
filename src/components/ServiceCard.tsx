import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, ShoppingBag, Workflow, RefreshCw, CheckCircle2 } from 'lucide-react';
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
}

export default function ServiceCard({ service }: ServiceCardProps) {
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

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#151A24]/8 hover:border-[#151A24]/20 shadow-xs hover:shadow-xl transition-all duration-300"
    >
      {/* Top Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] group-hover:bg-[#DCE5FF] flex items-center justify-center transition-colors duration-300">
            {renderIcon()}
          </div>
          <span className="text-[10px] font-bold tracking-wider text-[#707887] uppercase font-mono">
            {service.tagline}
          </span>
        </div>

        <h3 className="text-xl font-bold font-heading text-[#151A24] tracking-tight group-hover:text-[#496BFF] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
          {service.summary}
        </p>

        {/* Deliverables preview */}
        <div className="pt-2 space-y-2">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#151A24]/85">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#496BFF] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-5 mt-5 border-t border-[#151A24]/6 flex items-center justify-between">
        <Link
          to={`/services#${service.id}`}
          className="text-xs font-semibold text-[#151A24] group-hover:text-[#496BFF] inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Capabilities</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#496BFF]" />
        </Link>
        <Link
          to={`/quote?service=${service.id}`}
          className="text-xs font-mono font-medium text-[#707887] hover:text-[#151A24] transition-colors"
        >
          Request Quote &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
