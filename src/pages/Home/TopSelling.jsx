import SectionHeading from "../../components/SectionHeading";
import plant1 from "../../assets/images/plant-1.webp";
import plant2 from "../../assets/images/plant-2.webp";
import plant3 from "../../assets/images/plant-3.webp";
import plant4 from "../../assets/images/plant-4.webp";
import plant5 from "../../assets/images/plant-5.webp";
import plant6 from "../../assets/images/plant-6.webp";
import { IoBagHandleOutline } from "react-icons/io5";

function Card({img, width, height}) {
  return (
    <div className="bg-white/5 backdrop-blur-xl text-[#c5c7c5] p-12 md:p-16 space-y-9 border-2 border-transparent border-gradient-1 rounded-[77px] shadow-sm">
      <img
        className="-mt-32 sm:-mt-44"
        src={`${img}`}
        alt="A potted plant with vibrant green leaves set against a solid black background."
        width={width}
        height={height}
      />
      <h3 className="text-4xl">Calathea plant</h3>
      <p className="text-2xl ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <div className="flex flex-wrap items-center justify-center min-[400px]:justify-between max-sm:gap-4">
        <p className="text-4xl">Rs. 359/-</p>
        <button className="min-w-8 border-2 p-2.5 rounded-xl cursor-pointer active:scale-90 transition-[scale]">
          <IoBagHandleOutline size={26} />
        </button>
      </div>
    </div>
  );
}

function TopSelling() {
  return (
    <>
      <SectionHeading className="my-36">Our Top Selling</SectionHeading>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-32">
        <Card img={plant1} width="1563" height="1563" />
        <Card img={plant2} width="1563" height="1563" />
        <Card img={plant3} width="1563" height="1563" />
        <Card img={plant4} width="1563" height="1563" />
        <Card img={plant5} width="1563" height="1563" />
        <Card img={plant6} width="1563" height="1563" />
      </div>
    </>
  );
}

export default TopSelling;
