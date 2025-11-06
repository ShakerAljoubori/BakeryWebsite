import Cupcake from "./assets/Cupcake.jpg";

function Products() {
  return (
    <body>
      <div className="bg-[hsl(31,30%,78%)] flex flex-col items-center justify-center text-center mt-14 max-w-[400px] rounded-2xl mx-auto">
        <img
          src={Cupcake}
          alt="Product 1"
          className="max-w-[350px] pt-[30px]"
        />
        <h2 className="text-3xl font-bold mt-3">Product 1</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
          suscipit.
        </p>
        <a href="">
          <p className="mt-5 text-[17px] font-mono font-bold bg-[#4b2d24] rounded-[100px] p-3 mb-3 text-[#e7ddd1]">
            Add To Cart
          </p>
        </a>
      </div>
    </body>
  );
}

export default Products;
