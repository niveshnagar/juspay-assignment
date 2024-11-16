// Activity.tsx
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface ActivityProps {
  avatar: string; // URL to the avatar image
  fallback: string; // Fallback initials if the avatar fails to load
  description: string; // Activity description
  time: string; // Time since the activity occurred
}

const Activity: React.FC<ActivityProps> = ({ avatar, fallback, description, time }) => {
  return (
    <div className="flex flex-row gap-2 p-1">
      <Avatar className="h-6 w-6">
        <AvatarImage src={avatar} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div>
        <div className="text-sm">{description}</div>
        <div className="text-white-40 text-xs leading-[18px]">{time}</div>
      </div>
    </div>
  );
};

export default Activity;
