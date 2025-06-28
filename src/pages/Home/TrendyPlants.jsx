import plant2 from "../../assets/images/plant-2.webp";
import plant3 from "../../assets/images/plant-3.webp";
import { IoBagHandleOutline } from "react-icons/io5";

function TrendyPlants() {
  return (
    <>
      <h2 className="text-[52px] font-semibold py-32 text-center leading-tight">
        Our Trendy plants
      </h2>

      <div className="lg:flex items-center justify-evenly max-lg:text-center border-2 border-[#787c76] rounded-[151px] bg-white/5 backdrop-blur-sm px-4 max-xl:py-20">
        <img
          className="xl:max-w-[601px] lg:max-w-md object-contain -mt-44"
          src={`${plant2}`}
          alt="A potted plant with vibrant green leaves set against a solid black background."
          width="1563"
          height="1563"
        />

        <div className="font-semibold space-y-6">
          <h3 className="text-4xl">For Small Decs Ai Plat</h3>
          <p className="text-lg max-w-[55ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="text-4xl">Rs. 599/-</p>

          <div className="flex max-[300px]:flex-col items-center gap-4 lg:gap-8 w-max max-lg:mx-auto">
            <button className="text-[28px] font-normal border-2 px-10 py-0.5 rounded-xl cursor-pointer active:scale-90 transition-[scale]">
              Explore
            </button>
            <button className="min-w-8 border-2 p-2.5 rounded-xl cursor-pointer active:scale-90 transition-[scale]">
              <IoBagHandleOutline size={26} />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center justify-evenly max-lg:text-center border-2 border-[#787c76] rounded-[151px] bg-white/5 backdrop-blur-sm px-4 lg:px-32 max-xl:py-20 mt-40">
        <img
          className="xl:max-w-[601px] lg:max-w-md object-contain -mt-44 order-1"
          src={`${plant3}`}
          alt="A potted plant with vibrant green leaves set against a solid black background."
          width="1563"
          height="1563"
        />

        <div className="font-semibold space-y-6">
          <h3 className="text-4xl">For Small Decs Ai Plat</h3>
          <p className="text-lg max-w-[55ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="text-4xl">Rs. 599/-</p>

          <div className="flex max-[300px]:flex-col items-center gap-4 lg:gap-8 w-max max-lg:mx-auto">
            <button className="text-[28px] font-normal border-2 px-10 py-0.5 rounded-xl cursor-pointer active:scale-90 transition-[scale]">
              Explore
            </button>
            <button className="min-w-8 border-2 p-2.5 rounded-xl cursor-pointer active:scale-90 transition-[scale]">
              <IoBagHandleOutline size={26} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendyPlants;
