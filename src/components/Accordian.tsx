import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react"; // Example chevrons

// AccordionItem Component
export interface AccordionItemProps {
  title: string; // Title for each accordion item
  options: string[]; // Content of the accordion item
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Icon component for each item
  className?: string; // Custom className for styling
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  options,
  icon: Icon,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={` ${className}`}>
      <div
        className="flex items-center gap-1 py-1 pr-1 cursor-pointer"
        onClick={toggleAccordion}
      >
        {/* Chevron icon */}
        {isOpen ? (
          <ChevronDown className="w-4 h-4 ml-1 text-white text-opacity-20 transition-transform duration-200" />
        ) : (
          <ChevronRight className="w-4 h-4 ml-1 text-white text-opacity-20 transition-transform duration-200" />
        )}
        {/* Icon passed as prop */}
        <Icon className="w-5 h-5 text-white" />

        {/* Title */}
        <span className="text-white">{title}</span>
      </div>

      {/* Content shown when the item is open */}
      {/* Content shown when the item is open */}
      {isOpen && (
        <div className="pl-12 text-white gap-1">
          {Array.isArray(options)
            ? options.map((option, index) => (
                <p key={index} className="py-1">{option}</p>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

// Main Accordion Container Component
export const Accordion: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={`gap-4 ${className}`}>{children}</div>;
};
