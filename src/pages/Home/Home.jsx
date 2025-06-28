import bgImage from "../../assets/images/bg-plant.webp";
import Banner from "./Banner";
import BannerReview from "./BannerReview";
import CustomerReview from "./CustomerReview";
import TopSelling from "./TopSelling";
import TrendyPlants from "./TrendyPlants";

function Home() {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat pt-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-11/12 mx-auto pb-24">
          <Banner />
          <BannerReview />
          <TrendyPlants />
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <TopSelling />
        <CustomerReview />
      </div>
    </>
  );
}

export default Home;
