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
          <ChevronDown className="text-[#1C1C1C33] dark:text-white dark:text-opacity-20 w-4 h-4 ml-1 transition-transform duration-200" />
        ) : (
          <ChevronRight className="text-[#1C1C1C33] dark:text-white dark:text-opacity-20 w-4 h-4 ml-1 transition-transform duration-200" />
        )}
        {/* Icon passed as prop */}
        <Icon className=" text-[#1C1C1C] dark:text-white  w-5 h-5 " />

        {/* Title */}
        <span className="text-[#1C1C1C] dark:text-white">{title}</span>
      </div>

      {/* Content shown when the item is open */}
      {isOpen && (
        <div className="text-[#1C1C1C] dark:text-white pl-12 gap-1">
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
  return <div className={`${className}`}>{children}</div>;
};
