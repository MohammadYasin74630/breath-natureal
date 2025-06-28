import { IoPlay } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import plant1 from "../../assets/images/plant-1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>
      <FaAngleRight
        className="cursor-pointer active:scale-90 transition-[scale]"
        size={30}
      />
    </button>
  );
};

function BannerItem() {
  return (
    <div>
      <img
        src={`${plant1}`}
        alt="A potted plant with vibrant green leaves set against a solid black background."
      />

      <div>
        <p className="text-xl lg:text-2xl pt-6">Trendy House Plant</p>
        <div className="flex justify-between">
          <h3 className="text-3xl lg:text-4xl py-5">Calathea plant</h3>
          <SwiperButtonNext />
        </div>
        <button className="text-xl lg:text-[28px] border-2 px-8 py-2 rounded-xl cursor-pointer active:scale-90 transition-[scale]">
          Buy Now
        </button>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="text-[#c5c7c5] flex max-xl:flex-col justify-between md:max-lg:items-center gap-28">
      <div className="">
        <h2 className="text-7xl xl:text-[120px] font-semibold ">
          Breath Natureal
        </h2>
        <p className="text-2xl font-medium max-w-[60ch] pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex max-sm:flex-col items-center gap-8 pt-7">
          <button className="text-[28px] border-2 rounded-xl px-14 py-2 cursor-pointer active:scale-90 transition-[scale]">
            Explore
          </button>
          <button className="inline-flex items-center gap-4">
            <IoPlay className="border-2 rounded-full p-2" size={60} />
            <span className="text-xl">Live Demo...</span>
          </button>
        </div>
      </div>

      <div className="max-w-[512px] border-2 border-[#787c76] rounded-[76px] p-8 md:p-[60px] bg-white/5 backdrop-blur-xl shadow-md">
        <Swiper
          loop={true}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          className="-mt-36"
        >
          <SwiperSlide>
            <BannerItem />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem />
          </SwiperSlide>
        </Swiper>

        <div className="custom-swiper-pagination mt-8 space-x-2" style={{ textAlign: 'center' }}></div>
        
      </div>
    </div>
  );
}

export default Banner;
