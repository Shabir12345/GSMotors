'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

export default function Select({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select...',
  className = '',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={cn("relative z-[60]", className)} ref={containerRef}>
      {label && (
        <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-[0.2em] px-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={cn(
          "group w-full flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border rounded-[1.25rem] transition-all duration-300 text-left relative overflow-hidden",
          isOpen
            ? "border-brand-accent/50 bg-white/[0.06] shadow-[0_0_30px_-10px_rgba(var(--brand-accent-rgb),0.2)]"
            : "border-white/5 hover:border-white/10 hover:bg-white/[0.05]"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={cn(
          "block truncate flex-1 text-sm font-bold uppercase tracking-widest",
          !selectedOption ? 'text-gray-600' : 'text-white'
        )}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 text-gray-500 transition-transform duration-500 ml-2 group-hover:text-brand-accent",
          isOpen && "rotate-180"
        )} />

        {/* Subtle Gradient Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 to-brand-accent/0 group-hover:from-white/0 group-hover:to-white/[0.02] pointer-events-none transition-colors" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-50 w-full mt-2 bg-[#0A0A0B] border border-white/10 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-3xl"
              role="listbox"
            >
              <div className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                <ul className="space-y-0.5 px-2">
                  {placeholder && (
                    <li
                      className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-white hover:bg-white/5 rounded-xl cursor-pointer transition-all duration-200"
                      onClick={() => {
                        onChange('');
                        setIsOpen(false);
                      }}
                      role="option"
                      aria-selected={value === ''}
                    >
                      Clear Selection
                    </li>
                  )}
                  {options.length === 0 ? (
                    <li className="px-4 py-6 text-gray-600 text-xs text-center font-bold italic uppercase tracking-widest">No options available</li>
                  ) : (
                    options.map((option) => (
                      <li
                        key={option.value}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 cursor-pointer rounded-xl transition-all duration-300 relative group/item",
                          option.value === value
                            ? 'bg-brand-accent/10 border border-brand-accent/20'
                            : 'hover:bg-white/[0.03] border border-transparent'
                        )}
                        onClick={() => {
                          onChange(option.value);
                          setIsOpen(false);
                        }}
                        role="option"
                        aria-selected={option.value === value}
                      >
                        <span className={cn(
                          "text-xs font-black uppercase tracking-[0.15em] transition-colors",
                          option.value === value ? 'text-brand-accent' : 'text-gray-400 group-hover/item:text-white'
                        )}>
                          {option.label}
                        </span>
                        {option.value === value && (
                          <Check className="w-3 h-3 text-brand-accent" />
                        )}

                        {/* Glow indicator on active item */}
                        {option.value === value && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(var(--brand-accent-rgb),0.8)]" />
                        )}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

