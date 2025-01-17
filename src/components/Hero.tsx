import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-blue-800 to-blue-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat rotate-12 scale-150 animate-[spin_240s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="text-left space-y-6 animate-fade-up">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary italic mb-4">Hi!</h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-secondary transform -skew-x-12"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            I'm Erin Stiebel
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 font-light leading-relaxed max-w-xl">
            Dedicated to Empowering Jewish Education & Community Leadership
          </p>
        </div>

        {/* Right side - Image */}
        <div className="relative md:block">
          <div className="aspect-square w-48 md:w-full mx-auto rounded-full bg-white/10 backdrop-blur-sm p-4 md:p-6 transform hover:scale-105 transition-transform duration-300">
            <img
              src="/lovable-uploads/1cbc7165-c224-4d4d-92e9-b5d5b2ce4bed.png"
              alt="Erin Stiebel"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-4 right-4 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full">
            <p className="text-sm md:text-base text-white/90 font-light">Jewish Educator & Community Leader</p>
          </div>
        </div>
      </div>
    </div>
  );
};