import { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";
import SliderIndicator from "./SliderIndicator";

const items = [
  {
    name: "Sam Cole",
    role: "Personal Trainer",
    imgSrc: "/src/assets/gym1.png",
  },
  {
    name: "John Doe",
    role: "Yoga Instructor",
    imgSrc: "/src/assets/gym2.png",
  },
  {
    name: "Jane Smith",
    role: "Nutrition Expert",
    imgSrc: "/src/assets/gym3.png",
  },
  {
    name: "Mike Johnson",
    role: "Physical Therapist",
    imgSrc: "/src/assets/gym4.png",
  },
  {
    name: "Laura Brown",
    role: "Health Coach",
    imgSrc: "/src/assets/placeholder.svg",
  },
  {
    name: "Emma White",
    role: "Fitness Specialist",
    imgSrc: "/src/assets/placeholder.svg",
  },
  {
    name: "Chris Green",
    role: "Strength Coach",
    imgSrc: "/src/assets/placeholder.svg",
  },
  {
    name: "Olivia Lee",
    role: "Pilates Expert",
    imgSrc: "/src/assets/placeholder.svg",
  },
  {
    name: "Khalid Mohammed",
    role: "Pilates Expert",
    imgSrc: "/src/assets/placeholder.svg",
  },
  {
    name: "Ahmed Amr",
    role: "Pilates Expert",
    imgSrc: "/src/assets/placeholder.svg",
  },
  {
    name: "Youssef Nabih",
    role: "Pilates Expert",
    imgSrc: "/src/assets/placeholder.svg",
  },
];

function Slider() {
  const ref = useRef();
  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderItemsCount = Math.ceil(items.length / visibleCount);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 576) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 992) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const getItemsForSlide = (startIndex) => {
    return items.slice(startIndex, startIndex + visibleCount);
  };

  return (
    <section>
      <div className="container d-flex flex-column align-items-center gap-4">
        <div className="w-100 d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap gap-3">
          <h2 className="text-white fw-bold m-0 p-0">
            Meet Our <span className="text-red">Trainers</span>
          </h2>
          <div className="d-flex flex-column gap-2.5">
            <div className="d-flex justify-content-center align-items-center gap-2.5">
              <SliderButton
                onClick={() => {
                  ref.current?.prev();
                }}
                icon={<i className="fa-solid fa-arrow-left text-white"></i>}
              />
              <SliderButton
                onClick={() => {
                  ref.current?.next();
                }}
                icon={<i className="fa-solid fa-arrow-right text-white"></i>}
              />
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2.5">
              {Array.from({ length: sliderItemsCount }).map((_, i) => {
                return <SliderIndicator key={i} active={currentIndex === i} />;
              })}
            </div>
          </div>
        </div>
        <p className="text-white m-0 p-0">
          At This Part you can See Few Of The Many Positive reviews Of Our
          Customers.
        </p>
        <Carousel
          ref={ref}
          activeIndex={currentIndex}
          onSelect={(n) => {
            setCurrentIndex(n);
          }}
          indicators={false}
          controls={false}
          interval={null}
          className="w-100"
        >
          {Array.from({ length: sliderItemsCount }).map((_, slideIndex) => {
            const startIndex = slideIndex * visibleCount;
            const slideItems = getItemsForSlide(startIndex);
            return (
              <Carousel.Item key={slideIndex}>
                <SliderItem items={slideItems} number={12 / visibleCount} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <button className="d-flex align-items-center gap-2 px-3 py-2 bg-transparent text-orange border border-orange rounded-4">
          <span>View All</span>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Slider;
