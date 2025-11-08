import logo from "./assets/logo.png";
import bakery from "./assets/Bakery.png";
import { GiCroissant } from "react-icons/gi";

function Mainpage() {
  return (
    <body>
      <div className="ml-[19vh] flex flex-row mt-12 font-[Fraunces] font-bold space-x-[20vh]">
        <img src={logo} alt="Company Logo" />
        <div className="flex flex-row items-center justify-end space-x-[15vh] mt-5">
          <a href="#">
            <p>Home</p>
          </a>
          <a href="#">
            <p>Products</p>
          </a>
          <a href="#">
            <p>Top Sellers</p>
          </a>
          <a href="#">
            <p>Contact Us</p>
          </a>

          <a href="#">
            <p className="text-2xl bg-[#4b2d24] text-[#e7ddd1] rounded-[100px] py-3 px-7">
              Order Now
            </p>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={bakery}
          alt="Photo of various pastries"
          className="max-h-[50vh] mt-4 overflow-hidden"
        />
      </div>
      <div className="flex flex-col items-center mt-[3vh] text-center">
        <GiCroissant className="text-[#4b2d24] text-[75px]" />
        <p className="font-extrabold text-4xl">Why Choose Us?</p>
        <p className="max-w-[100vh] mt-5 leading-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora
          vitae, voluptatem sit aspernatur delectus molestiae expedita ullam,
          nemo, libero natus deleniti soluta enim totam quis suscipit dicta
          harum? Nobis.
        </p>
      </div>
    </body>
  );
}

export default Mainpage;
