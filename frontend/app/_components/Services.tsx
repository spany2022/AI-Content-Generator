import React from 'react';
import { BoltIcon, PaletteIcon, PenIcon, RocketIcon, ShieldIcon, WandIcon } from "lucide-react";

const serviceItems = [
  {
    icon: <PenIcon className="text-[#704ef8] h-6 w-6" />,
    title: "Content Generation",
    description: "Generate high-quality content on any topic with our advanced AI algorithms."
  },
  {
    icon: <PaletteIcon className="text-[#704ef8] h-6 w-6" />,
    title: "Content Optimization",
    description: "Optimize your content for search engines and engagement with our AI-powered tools."
  },
  {
    icon: <BoltIcon className="text-[#704ef8] h-6 w-6" />,
    title: "Productivity Boost",
    description: "Save time and boost your productivity with our AI-powered content creation workflows."
  },
  {
    icon: <WandIcon className="text-[#704ef8] h-6 w-6" />,
    title: "Personalization",
    description: "Tailor your content to your audience with our advanced personalization features."
  },
  {
    icon: <RocketIcon className="text-[#704ef8] h-6 w-6" />,
    title: "Scalability",
    description: "Scale your content creation efforts with our powerful AI-driven platform."
  },
  {
    icon: <ShieldIcon className="text-[#704ef8] h-6 w-6" />,
    title: "Security & Privacy",
    description: "Rest assured that your data is secure and your privacy is protected."
  },
];

const Services: React.FC = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Your Content Potential</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI content generator offers a wide range of features to help you create high-quality content with ease.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {serviceItems.map((service, index) => (
              <div key={index} className="grid gap-1">
                <div className="flex items-center gap-2">
                  {service.icon}
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
