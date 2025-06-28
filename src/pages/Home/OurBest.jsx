import SectionHeading from "../../components/SectionHeading";
import plant1 from "../../assets/images/plant-1.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";

const SwiperButtonPrevious = ({ isFirst }) => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      <FaAngleLeft
        className={`${
          isFirst ? "opacity-50 pointer-events-none" : "cursor-pointer"
        } active:scale-90 transition-[scale]`}
        size={30}
      />
    </button>
  );
};

const SwiperButtonNext = ({ isLast }) => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>
      <FaAngleRight
        className={`${
          isLast ? "opacity-50 pointer-events-none" : "cursor-pointer"
        } active:scale-90 transition-[scale]`}
        size={30}
      />
    </button>
  );
};

function BestItem({ activeIndex, slideCount }) {
  return (
    <div className="mt-40">
      <div className="grid xl:grid-cols-2 items-center p-11 border-2 border-transparent rounded-[92px] border-gradient-1">
        <img
          className="-mt-32 sm:-mt-40"
          src={`${plant1}`}
          alt="A potted plant with vibrant green leaves set against a solid black background."
        />

        <div className="text-white/75 font-semibold space-y-10">
          <h3 className="text-4xl">
            We Have Small And Best O2 Plants Collection’s
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4">
            <button className="text-white text-[28px] font-normal border-2 px-14 sm:px-16 py-1.5 rounded-xl cursor-pointer active:scale-90 transition-[scale]">
              Explore
            </button>

            <div className="inline-flex items-center gap-1">
              <SwiperButtonPrevious isFirst={activeIndex === 0} />
              <span className="text-lg">
                {activeIndex + 1 < 10
                  ? `0${activeIndex + 1}`
                  : `${activeIndex + 1}`}
                /
              </span>
              <span className="text-sm">
                {slideCount < 10 ? `0${slideCount}` : { slideCount }}
              </span>
              <SwiperButtonNext isLast={activeIndex + 1 === slideCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurBest() {
  const [slideCount, setSlideCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SectionHeading className="mt-60 mb-20">Our Best o2</SectionHeading>

      <Swiper
        pagination={{
          el: ".custom-swiper-pagination-2",
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <BestItem activeIndex={activeIndex} slideCount={slideCount} />
        </SwiperSlide>
        <SwiperSlide>
          <BestItem activeIndex={activeIndex} slideCount={slideCount} />
        </SwiperSlide>
        <SwiperSlide>
          <BestItem activeIndex={activeIndex} slideCount={slideCount} />
        </SwiperSlide>
      </Swiper>

      <div
        className="custom-swiper-pagination-2 my-20 md:my-28 space-x-2"
        style={{ textAlign: "center" }}
      ></div>
    </>
  );
}

export default OurBest;
