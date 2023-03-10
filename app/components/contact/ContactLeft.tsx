import Image from "next/image"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import ContactImg  from "../../../public/assets/images/contactImg.png";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={ContactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Adeel Talib</h3>
        <p className="text-lg font-normal text-gray-400">
          Web 3.0 & Metaverse Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+123 12345678</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">abcd@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF className="fill-[#ff014f]"/>
          </span>
          <span className="bannerIcon">
            <FaTwitter className="fill-[#ff014f]"/>
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn className="fill-[#ff014f]"/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft