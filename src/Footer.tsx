import Cupcake from "./assets/Cupcake.jpg";
import Brownie from "./assets/Brownie.jpg";
import Choco from "./assets/Choco Kek.webp";
import Glazed from "./assets/Donat.jpg";

function Footer() {
  return (
    <div className="px-85 py-14">
      <div className=" flex gap-4">
        <img src={Cupcake} alt="A Cupcake" className="w-[350px]" />
        <img src={Brownie} alt="A Brownie" className="w-[350px]" />
        <img src={Choco} alt="A Cake" className="w-[500px]" />
      </div>
      <div className="pt-8 flex gap-11 ">
        <img src={Glazed} alt="A Glazed Donut" className="w-[350px]" />
        <footer className="w-[50vh]">
          <h2 className="text-5xl text-[#4b2d24] pb-3">Contact Us</h2>
          <p className="pb-7 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            maxime assumenda eos eligendi numquam pariatur minus sint, quo sed?
            Reprehenderit ipsa, eaque at dignissimos hic incidunt ut quisquam
            iure praesentium.
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nam sequi quod magni nobis quis dolorum commodi illo corrupti animi
            natus ut! Saepe alias officia ratione repudiandae qui tempore
            quisquam.
          </p>
        </footer>
        <div className="border-l border-[#4b2d24] h-[350px] opacity-35"></div>
        <div className="w-[35vh]">
          <h2 className="text-5xl text-[#4b2d24] pb-3">Rate Us</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolore deserunt sequi, incidunt cupiditate eligendi asperiores
            tempora numquam quasi? Natus eveniet asperiores architecto laborum
            hic quod consequuntur rem nihil quis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
