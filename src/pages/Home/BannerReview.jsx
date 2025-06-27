import customer1 from "../../assets/images/customer-1.webp";

function BannerReview() {
  return (
    <>
      <div className="bg-white/5 backdrop-blur-xl sm:w-max p-8 md:p-11 border-2 rounded-[45px] border-[#787c76] shadow-sm max-xl:mt-16 xl:-mt-32">
        <div className="flex gap-[28px]">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={`${customer1}`}
            alt="A woman with dark hair dressed in a black top is seen as a customer, looking straight."
          />

          <div>
            <h3 className="text-2xl">alena Patel</h3>
            <div className="rating rating-xs rating-half">
              {/* <input
                  type="radio"
                  name="rating-11"
                  className="rating-hidden"
                /> */}
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#fff84e]"
                aria-label="0.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#fff84e] mr-2"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#fff84e]"
                aria-label="1.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#fff84e] mr-2"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#fff84e]"
                aria-label="2.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#fff84e] mr-2"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#fff84e]"
                aria-label="3.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#fff84e] mr-2"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-1 bg-[#fff84e]"
                aria-label="4.5 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-11"
                className="mask mask-star-2 mask-half-2 bg-[#fff84e]"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>

        <p className="max-w-[35ch] pt-6 text-[#cccecb]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </p>
      </div>
    </>
  );
}

export default BannerReview;
