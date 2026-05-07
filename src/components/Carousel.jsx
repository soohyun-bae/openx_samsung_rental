import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const Carousel = ({
  children,
  options = {},
  slideClassName = "",
  showDots = true,
  showArrows = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
    ...options,
  });

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
    <div className="relative flex flex-col items-center gap-10">
      {/* viewport */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex items-stretch">
          {children.map((child, index) => (
            <div
              key={index}
              className={`
                min-w-0
                flex-[0_0_85%]
                px-3
                md:flex-[0_0_55%]
                xl:flex-[0_0_33%]
                ${slideClassName}
              `}
            >
              {typeof child === "function"
                ? child({
                    isActive: selectedIndex === index,
                    index,
                  })
                : child}
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      {(showDots || showArrows) && (
        <div className="flex items-center gap-[121px]">
          {/* prev */}
          {showArrows && (
            <button
              onClick={scrollPrev}
              className="
                flex h-[60px] w-[60px]
                items-center justify-center
                rounded-full bg-[#F3F3F3]
                transition hover:bg-[#E9E9E9]
              "
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M9 1L1 9L9 17"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* dots */}
          {showDots && (
            <div className="flex items-center gap-[40px]">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`
                    h-[10px]
                    rounded-full
                    transition-all duration-300
                    ${
                      selectedIndex === index
                        ? "w-[10px] bg-[#2455FF]"
                        : "w-[10px] bg-[#D9D9D9]"
                    }
                  `}
                />
              ))}
            </div>
          )}

          {/* next */}
          {showArrows && (
            <button
              onClick={scrollNext}
              className="
                flex h-[60px] w-[60px]
                items-center justify-center
                rounded-full bg-[#EEF3FF]
                transition hover:bg-[#E4ECFF]
              "
            >
              <svg
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
      )}
    </div>
  );
};