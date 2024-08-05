import { useEffect, useRef } from "react";
import carrouselCardDetails from "../db/carrouselCardDetails";

const CarouselPrueba = () => {
  const containerRef = useRef(null);
  const clonedCards = [...carrouselCardDetails, ...carrouselCardDetails]; // Duplica los elementos

  useEffect(() => {
    const container = containerRef.current;
    let scrollLeft = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (container) {
        scrollLeft += scrollSpeed;
        if (scrollLeft >= container.scrollWidth / 2) {
          scrollLeft = 0;
        }
        container.scrollLeft = scrollLeft;
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(scroll);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] w-[250px] mx-[calc((100%-250px)/2)] md:w-[750px] md:mx-[calc((100%-750px)/2)] lg:w-[1000px] lg:mx-[calc((100%-1000px)/2)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 xl:[&_li]:mx-8 [&_img]:max-w-none infinite-scroll">
          {clonedCards.map((card, index) => (
            <li key={index}>
              <img
                src={card.imgUrl}
                alt={card.title}                
                className="size-7 md:size-16 xl:size-20 text-white "
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CarouselPrueba;
