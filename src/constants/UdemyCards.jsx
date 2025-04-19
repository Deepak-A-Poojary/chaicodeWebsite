import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import useResponsive from "../hooks/useResponsive";
import { useGSAP } from "@gsap/react";
import { useThemeColors } from "../hooks/useThemeColors";
import ExploreTextButton from './ExploreTextButton'

const UdemyCards = ({ courseData }) => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isMobile } = useResponsive();
  const slideWidth = isMobile ? 300 : 1000;
  const totalSlides = courseData.length;
  const allSlides = [courseData[totalSlides - 1], ...courseData, courseData[0]];
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const themeColors = useThemeColors();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className="text-lg"
        style={{
          color: i < rating ? themeColors.ratingColor : themeColors.text,
        }}
      >
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);

    gsap.to(containerRef.current, {
      x: -slideWidth * index,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        if (index === 0) {
          gsap.set(containerRef.current, { x: -slideWidth * totalSlides });
          setCurrent(totalSlides);
        } else if (index === totalSlides + 1) {
          gsap.set(containerRef.current, { x: -slideWidth });
          setCurrent(1);
        } else {
          setCurrent(index);
        }
        setIsAnimating(false);
      },
    });
  };

  const nextSlide = () => goToSlide(current + 1);
  const prevSlide = () => goToSlide(current - 1);

  useGSAP(() => {
    gsap.set(containerRef.current, { x: -slideWidth * current });
  }, []);

  useEffect(() => {
    if (courseData.length > 1) {
      intervalRef.current = setInterval(nextSlide, 3000);
      return () => clearInterval(intervalRef.current);
    }
  }, [current]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <div
      className="relative mx-auto rounded-2xl"
      style={{ width: `${slideWidth}px` }}
    >
      {/* Carousel container */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          ref={containerRef}
          className="flex"
          style={{ width: `${allSlides.length * slideWidth}px` }}
          onTouchStart={isMobile ? handleTouchStart : null}
          onTouchMove={isMobile ? handleTouchMove : null}
          onTouchEnd={isMobile ? handleTouchEnd : null}
        >
          {allSlides.map((item, i) => (
            <div
              key={i}
              className="flex-none border rounded-lg overflow-hidden p-4"
              style={{
                width: `${slideWidth}px`,
                height: isMobile ? "100%" : "400px",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
                <div className="flex flex-col justify-evenly gap-4">
                  <div>
                    <h1 className="text-xl md:text-[28px] font-bold">
                      <span className="text-amber-600">Course: </span>
                      {item.title}
                    </h1>
                    <p className="text-sm md:text-md italic">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex md:gap-6 gap-2 flex-col-reverse md:flex-row items-center ">
                    {/* Price */}
                    <div className="flex items-center justify-between ">
                      <div>
                        <div className="flex items-center">
                          <span className="text-xl font-bold">
                            {item.discountedPrice} INR
                          </span>
                          <span className="text-sm text-gray-400 line-through ml-2">
                            {item.originalMRP} INR
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-orange-400">
                          Save{" "}
                          {Math.round(
                            ((item.originalMRP - item.discountedPrice) / item.originalMRP) *
                              100
                          )}
                          %
                        </div>
                      </div>
                    </div>
                    {/* Radting */}
                    <div className="px-5 py-3 border flex w-fit gap-4 items-center rounded-xl">
                      <p className="text-5xl font-['Poetsen One'] font-semibold p-0">
                        {item.rating}
                      </p>
                      <div>
                        <div className="flex">
                          {renderStars(Math.round(item.rating))}
                        </div>
                        <p>Top rated</p>
                      </div>
                    </div>
                  </div>
                  <ExploreTextButton text="Check in Udemy" className={'w-fit self-center md:self-auto text-[15px]'} to={"https://hitesh.ai/udemy"} />
                </div>
                <div className="p-2 border-2 rounded-md flex flex-col border-slate-600">
                  <iframe
                    className="h-full rounded-md"
                    src={item.iFrameUrl}
                    loading="lazy"
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation (Desktop Only) */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute cursor-pointer left-[-50px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-md"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute cursor-pointer right-[-50px] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-md"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default UdemyCards;
