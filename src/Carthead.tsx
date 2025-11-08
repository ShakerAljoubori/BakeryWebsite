import { FaShoppingBag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Carthead() {
  return (
    <div className="bg-[hsl(31,30%,78%)] flex flex-row place-content-between px-[10vh] py-[0.9vh] font-[Fraunces] font-bold text-[14px] text-[#4b2d24] pt-3 fixed w-full top-0">
      <p className="ml-[10vh]">Your one stop shop for halal goodness!</p>
      <div className="flex flex-row inline-flex">
        <a href="#">
          <FaShoppingBag className="mr-1.5 mt-[3px]" />
        </a>
        <p className="mr-[10vh]">View shopping cart</p>
        <a href="">
          <FaDollarSign className="mr-1.5 mt-[3px]" />
        </a>
        <p className="mr-[10vh]">View Balance</p>
        <div className="flex flex-row inline-flex mr-[24vh] space-x-4">
          <a href="">
            <FaFacebook className="mr-1.5 mt-[3px]" />
          </a>
          <a href="">
            <BsTwitterX className="mr-1.5 mt-[3px]" />
          </a>
          <a href="">
            <BsInstagram className="mr-1.5 mt-[3px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carthead;
