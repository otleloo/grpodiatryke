import React from 'react';
interface FootComplaintDetailProps {
  title: string;
  content: React.ReactNode;
  image?: string;
}
export const FootComplaintDetail = ({
  title,
  content,
  image
}: FootComplaintDetailProps) => {
  return <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-primary-600 mb-8 text-center pt-10 md:pt-0">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left panel - Image (1/3 width on desktop) */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mx-auto">
            {image ? <img src={image} alt={`${title} illustration`} className="w-full h-full object-cover" style={{
            objectPosition: 'center'
          }} /> : <div className="text-gray-400 text-center px-4">
                <p className="text-lg">Image placeholder</p>
                <p className="text-sm">Illustration for {title}</p>
              </div>}
          </div>
        </div>
        {/* Right panel - Text content (2/3 width on desktop) */}
        <div className="md:w-2/3">
          <div className="prose max-w-none">{content}</div>
        </div>
      </div>
    </div>;
};