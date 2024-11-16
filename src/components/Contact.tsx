// Contact.tsx
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface ContactProps {
  avatar: string; // URL to the avatar image
  name: string; // Contact name
  fallback?: string; // Fallback initials if the avatar fails to load
}

const Contact: React.FC<ContactProps> = ({
  avatar,
  name,
  fallback = "N/A",
}) => {
  return (
    <div className="flex flex-row gap-2 p-1 rounded">
      <Avatar className="h-6 w-6">
        <AvatarImage src={avatar} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
};

export default Contact;
