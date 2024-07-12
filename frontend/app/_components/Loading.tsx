import React from 'react';
import { Loader2Icon } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      
      <Loader2Icon className="animate-spin"/>
      
    </div>
  );
};

export default Loading;
