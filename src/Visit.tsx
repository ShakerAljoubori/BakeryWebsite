import Pie from "./assets/Pie.jpg";
import Pastries from "./assets/Pastries.jpg";

function Visit() {
  return (
    <div className="mt-9 pt-9 bg-[hsl(31,30%,78%)] px-85">
      <div className="flex place-content-between text-justify pb-10">
        <div className="w-[54vh] flex-col">
          <h2 className="text-5xl font-medium pb-10">Visit Us Today</h2>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic
            asperiores numquam error provident modi sit aut, voluptatem
            necessitatibus doloremque facilis nostrum, temporibus excepturi
            minus at animi eos aperiam ea. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero hic asperiores numquam error
            provident modi sit aut
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic
            asperiores numquam error provident modi sit aut
          </p>
          <button className="mt-10 text-[25px] font-mono font-bold bg-[#4b2d24] rounded-[100px] py-3 px-20 mb-3 text-[#e7ddd1] hover:cursor-pointer">
            ORDER NOW
          </button>
        </div>
        <div className="flex gap-3">
          <img
            src={Pastries}
            alt="Delicious Pastries"
            className="w-[350px] object-contain"
          />
          <img
            src={Pie}
            alt="Delicious Pie"
            className="w-[250px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Visit;
