import PropTypes from "prop-types";

interface ProductProps {
  alt: string;
  name: string;
  desc: string;
  img: string;
}

function Products(props: ProductProps) {
  return (
    <div className="bg-[hsl(31,30%,78%)] flex flex-col items-center justify-between text-center mt-14 w-[400px] h-[700px] rounded-2xl">
      <div className="flex flex-col flex-g items-center justify-center h-fu">
        <img src={props.img} alt={props.alt} className="max-w-full" />
        <h2 className="text-3xl font-bold mt-3">{props.name}</h2>
        <p className="px-7 text-justify mt-8 items-center max-h-10">
          {props.desc}
        </p>
      </div>

      <a href="">
        <p className="mt-5 text-[17px] font-mono font-bold bg-[#4b2d24] rounded-[100px] py-3 px-7 mb-3 text-[#e7ddd1]">
          Add To Cart
        </p>
      </a>
    </div>
  );
}

export default Products;
