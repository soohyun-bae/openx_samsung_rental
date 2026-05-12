import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const Carousel = ({
  children,
  options = {},
  slideClassName = "",
  showDots = true,
  showArrows = true,
  controlsClassName = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
    ...options,
  });

  const duplicatedChildren =
    children.length < 6 ? [...children, ...children] : children;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onInit();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative flex flex-col items-center justify-center gap-[50px]">
      {/* viewport */}
      <div className="w-full">
        <div ref={emblaRef} className="w-full">
          <div className="flex items-stretch">
            {duplicatedChildren.map((child, index) => (
              <div
                key={index}
                className={`flex flex-[0_0_80%] justify-center lg:flex-[0_0_40%] xl:flex-[0_0_30%] 2xl:flex-[0_0_25%] ${slideClassName} `}
              >
                {typeof child === "function"
                  ? child({
                      isActive:
                        selectedIndex % children.length ===
                        index % children.length,
                      index,
                    })
                  : child}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* controls */}
      {(showDots || showArrows) && (
        <div className="flex w-full items-center justify-center">
          <div
            className={`flex items-center justify-between ${controlsClassName}`}
          >
            {/* prev */}
            {showArrows && (
              <button
                onClick={scrollPrev}
                className="flex h-[clamp(30px,calc((60/1920)*100vw),60px)] w-[clamp(30px,calc((60/1920)*100vw),60px)] items-center justify-center rounded-full bg-[#F3F3F3] shadow-[0px_0px_5px_rgba(0,0,0,0.1)] transition hover:bg-[#E8EBFF]"
              >
                <svg
                  className="h-[clamp(14px,calc((25/1920)*100vw),25px)] w-[clamp(14px,calc((25/1920)*100vw),25px)]"
                  width="25"
                  height="25"
                  viewBox="-2 -2 16 21"
                  fill="none"
                >
                  <path
                    d="M9 1L1 9L9 17"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {/* dots */}
            {showDots && (
              <div className="flex items-center gap-[15px]">
                {Array.from({ length: children.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-[10px] rounded-full transition-all duration-300 ${
                      selectedIndex % children.length === index
                        ? "w-[10px] bg-[#2455FF]"
                        : "w-[10px] bg-[#D9D9D9]"
                    } `}
                  />
                ))}
              </div>
            )}

            {/* next */}
            {showArrows && (
              <button
                onClick={scrollNext}
                className="flex h-[clamp(30px,calc((60/1920)*100vw),60px)] w-[clamp(30px,calc((60/1920)*100vw),60px)] items-center justify-center rounded-full bg-[#F3F3F3] shadow-[0px_0px_5px_rgba(0,0,0,0.1)] transition hover:bg-[#E8EBFF]"
              >
                <svg
                  className="h-[clamp(14px,calc((25/1920)*100vw),25px)] w-[clamp(14px,calc((25/1920)*100vw),25px)]"
                  width="25"
                  height="25"
                  viewBox="-2 -2 10 22"
                  fill="none"
                >
                  <path
                    d="M1 1L9 9L1 17"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
