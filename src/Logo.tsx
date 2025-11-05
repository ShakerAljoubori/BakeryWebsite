import logo from "./assets/logo.png";
import bakery from "./assets/Bakery.jpg";

function Logo() {
  return (
    <body>
      <div className="ml-[19vh] flex flex-row mt-3.5 font-[Fraunces] font-bold space-x-[20vh]">
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
            <p className="text-2xl bg-[#4b2d24] text-[#e7ddd1] rounded-[100px] p-6">
              Order Now
            </p>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={bakery}
          alt="Photo of various pastries"
          className="max-h-[85vh] mt-4 overflow-hidden"
        />
      </div>
    </body>
  );
}

export default Logo;
