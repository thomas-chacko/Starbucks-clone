import logo from "../assets/logo.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import playstorebtn from "../assets/appstoreAndroid.png";
import appstore from "../assets/appstoreiOS.png";

const Footer = () => {
  return (
    <>
      <div className="w-full text-white bg-[#0E382C] grid gap-4 gplace-items-start items-center p-4 grid-cols-1 md:grid-cols-6 border-b-2">
        <div className="md:w-[219px] md:h-[277px]">
          <img src={logo} alt="" />
        </div>
        <div className="md:w-[219px] md:h-[277px]">
          <h3>About Us</h3>
          <p>Our Heritage</p>
          <p>Our Company</p>
          <p>Coffeehouse</p>
        </div>
        <div className="md:w-[219px] md:h-[277px]">
          <h3>Responsibility</h3>
          <p>Community</p>
          <p>Ethical Sourcing</p>
          <p>Environment</p>
          <p>Diversity</p>
        </div>
        <div className="md:w-[219px] md:h-[277px]">
          <h3>Quick Links</h3>
          <p>Delivery</p>
          <p>Season's Gifting</p>
          <p>Careers</p>
          <p>Customer Service</p>
          <p>FAQs</p>
        </div>
        <div className="w-full flex gap-1">
          <div className="w-full md:h-[277px]">
            <h6 className="text-center">SOCIAL MEDIA</h6>
            <div className="flex justify-evenly">
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
          <div className="md:hidden w-full md:h-[277px] flex flex-col gap-4">
            <img src={playstorebtn} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
        <div className="hidden md:flex w-full md:h-[277px] flex-col gap-4">
            <img src={playstorebtn} alt="" />
            <img src={appstore} alt="" />
          </div>
      </div>

      <div className=" w-full text-center bg-[#0E382C] text-white py-3 px-5">
        <h6>© 2023 Starbucks Coffee Company. All rights reserved.</h6>
      </div>
    </>
  );
};
export default Footer;
