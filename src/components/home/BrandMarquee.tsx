import Image from "next/image";

interface BrandMarqueeProps {
  imagesFolder?: string;
  images?: string[];
  cardClassName?: string;
  imageClassName?: string;
  bgClassName?: string;
}

export default function BrandMarquee({
  imagesFolder = "brands",
  images,
  cardClassName,
  imageClassName,
  bgClassName = "bg-transparent"
}: BrandMarqueeProps) {
  const defaultBrands = [
    "0.png",
    "1.png",
    "10-National-Geographic-Channel (1).png",
    "10.png",
    "11.png",
    "13.png",
    "14.png",
    "16 (1).png",
    "17.png",
    "2.png",
    "21.png",
    "3.png",
    "4 (1).png",
    "6.png",
    "7.png",
    "A-11.webp",
    "A-2.webp",
    "A-3-e1701993527905.webp",
    "A-6.webp",
    "brand_item05-150x46-1-1.webp",
    "brand_item08-150x46-1-1.webp",
    "brand_item12-1.webp",
    "brand_item13-150x46-1-1.webp",
    "brand_item14-150x46-1-1.webp",
    "brand_item15-150x46-1-1.webp",
    "brand_item16-150x46-1-1.webp",
    "brand_item17-150x46-1-1.webp",
    "brand_item18-150x46-1-1.webp",
    "brand_item21-150x46-1-1.webp",
    "brand_item22-150x46-1-1.webp"
  ];

  const brandList = images || defaultBrands;
  const repeatList = brandList.length < 10 
    ? [...brandList, ...brandList, ...brandList, ...brandList] 
    : [...brandList, ...brandList];

  return (
    <div className={`w-full overflow-hidden ${bgClassName} py-6 relative flex items-center`}>
      {/* Left/Right Dark Gradient Masks for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#060810] via-[#060810]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#060810] via-[#060810]/80 to-transparent z-10 pointer-events-none" />
      
      {/* The scrolling container */}
      <div
        className={`flex gap-5 md:gap-8 px-6 items-center w-max ${brandList.length < 10 ? 'animate-marquee-fast' : 'animate-marquee'}`}
      >
        {repeatList.map((brand, i) => (
          <div 
            key={i} 
            className={cardClassName || "flex-shrink-0 w-[120px] h-[60px] md:w-[160px] md:h-[75px] relative bg-[#0D111B]/90 hover:bg-[#151D2A] border border-white/10 hover:border-[#38BDF8]/40 rounded-2xl p-3.5 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/40 flex items-center justify-center"}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image 
                src={`/${imagesFolder}/${brand}`} 
                alt={`NixaTV Supported Channel - ${brand.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')}`}
                title={`Watch ${brand.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')} on NixaTV`}
                fill
                unoptimized
                className={imageClassName || "object-contain drop-shadow-md brightness-110"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
