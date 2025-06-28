function Footer() {
  return (
    <>
      <div className="bg-[#222c1d]">
        <div className="w-11/12 mx-auto flex flex-wrap justify-between gap-11 py-[92px]">
          <div>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-11">
              <img className="max-w-[94px]" src="/plant-logo-2.webp" alt="" />
              <h2 className="text-[56px] opacity-75 font-black">Planto.</h2>
            </div>

            <p className="text-[28px] font-medium max-w-[35ch] leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h3 className="text-[28px] font-extrabold mb-11">Quick Link's</h3>

            <div className="text-2xl font-medium flex flex-col gap-6">
              <a href="#">Home</a>
              <a href="#">Type's Of plant's</a>
              <a href="#">Contact</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          <div>
            <h3 className="text-[28px] font-extrabold mb-12">For Every Update.</h3>

            <div className="border-2 rounded-lg flex flex-wrap items-center justify-center p-1">
              <input className="focus:outline-none m-4 max-[420px]:text-center" type="text" placeholder="Enter Email"/>
              <button className="bg-white text-black font-bold px-5 py-4 rounded-lg cursor-pointer active:scale-90 transition-[scale]">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 items-center gap-y-11 pb-[88px]">
            <div className="text-[28px] font-extrabold flex gap-[60px]">
                <a href="#">FB</a>
                <a href="#">TW</a>
                <a href="#">LI</a>
            </div>

            <p className="text-2xl font-medium text-centers -col-start-2 lg:text-center">planto © all right reserve</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
