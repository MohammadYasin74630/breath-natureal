import { IoMdStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import SectionHeading from "../../components/SectionHeading";
import customer2 from "../../assets/images/customer-2.webp";
import customer3 from "../../assets/images/customer-3.webp";
import customer4 from "../../assets/images/customer-4.webp";

function CustomerCard({ img, className, width, height, children }) {
  return (
    <div className={`${className} p-10 lg:p-14 border-2 rounded-[77px] border-transparent border-gradient-1 shadow-md`}>
      <div>
        <div className="flex max-lg:flex-col items-center gap-6 lg:gap-9 mb-10 xl:mb-16">
          <img
            className="w-[88px] h-[88px] rounded-full object-cover"
            src={`${img}`}
            alt="male customer image"
            width={width}
            height={height}
          />
          <div className="max-lg:text-center">
            <h3 className="text-4xl font-semibold">{children}</h3>
            <div className="inline-flex items-center gap-2 text-[#fff84e]">
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <FaStarHalf size={15} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-2xl text-white/75 leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>
    </div>
  );
}

function CustomerReview() {
  return (
    <>
      <SectionHeading className="my-44">Customer Review</SectionHeading>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <CustomerCard img={customer2} width="2500" height="1666">Maxn Raval</CustomerCard>
        <CustomerCard img={customer3} width="4096" height="2731">venely k</CustomerCard>
        <CustomerCard className="lg:max-xl:col-span-2" img={customer4} width="2662" height="3993">Lii thakur</CustomerCard>
      </div>
    </>
  );
}

export default CustomerReview;
