import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import bgimg1 from "../assets/Rectangle_743_2_5d4f05c086.png";
import bgimg2 from "../assets/Rectangle_639_1_af929e9c86.png";
import bgimg3 from "../assets/13_7e0fa82016.png";
import banner1 from "../assets/Worldcup_Banner_Icon_4_679f6ef3e8.png";
import banner2 from "../assets/Caramel_Cinnamon_Combo_Banner_Icon_2_dbf0466f4b.png";
import banner3 from "../assets/Diwali_blend_banner_Icon_91e27d5cc3.png";

const Slide = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[210px] my-5 px-2"
      >
        <SwiperSlide>
          <div className="relative h-[222px]">
            <img src={bgimg3} className="w-full h-full" alt="" />
            <div>
              <img
                src={banner1}
                className="absolute left-0 bottom-0 top-0 w-[100px] h-[193px]"
                alt=""
              />
              <div className="absolute top-2 md:top-6 left-32">
                <h5>Score big savings with</h5>
                <h4>STARSUCKS125</h4>
                <h6>
                  get your delivery with discount code - 'starbucke125' on
                  zomato and swiggy.
                </h6>
                <p className="pt-2 font-bold">$125</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[222px]">
            <img src={bgimg2} className="w-full h-full" alt="" />
            <div>
              <img
                src={banner2}
                className="absolute left-0 bottom-0 top-0 w-[100px] h-[193px]"
                alt=""
              />
              <div className="absolute top-2 md:top-6 left-32">
                <h5>Sip the festive vibes</h5>
                <h4>Roasted Nuts</h4>
                <h6>
                  get your delivery with discount code - 'starbucke125' on
                  zomato and swiggy.
                </h6>
                <p className="pt-2 font-bold">$400</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative  h-[222px]">
            <img src={bgimg1} className="w-full h-full" alt="" />
            <div>
              <img
                src={banner3}
                className="absolute left-0 bottom-0 top-0 w-[100px] h-[193px]"
                alt=""
              />
              <div className="absolute top-2 md:top-6 left-32">
                <h5>Arrive with a sizzle</h5>
                <h4>Diwali blend</h4>
                <h6>
                  get your delivery with discount code - 'starbucke125' on
                  zomato and swiggy.
                </h6>
                <p className="pt-2 font-bold">$1000</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slide;
