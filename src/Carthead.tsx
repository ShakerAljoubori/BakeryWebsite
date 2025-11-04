import Bag from "./assets/bag.svg";

function Carthead() {
  return (
    <body>
      <div className="bg-[#d2bea9] flex flex-row place-content-between px-[10vh] py-[0.9vh] font-[Fraunces] font-bold text-[14px]">
        <p className="ml-[10vh]">Your one stop shop for halal goodness!</p>
        <div className="flex flex-row">
          <img
            src={Bag}
            alt="shopping bag icon"
            className="max-w-[10px] text-blue-700"
          />
          <p>View shopping cart</p>
        </div>
        <p>View Balance</p>
      </div>
    </body>
  );
}

export default Carthead;
