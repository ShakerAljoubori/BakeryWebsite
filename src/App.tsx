import Carthead from "./Carthead";
import Mainpage from "./Mainpage";
import Products from "./Products";
import Visit from "./Visit";
import Footer from "./Footer";
import Cupcake from "./assets/Cupcake.jpg";
import Brownie from "./assets/Brownie.jpg";
import Kek from "./assets/Kek.jpg";

function App() {
  return (
    <>
      <Carthead />
      <Mainpage />
      <div className="flex justify-center space-x-5 pb-6">
        <Products
          name="Cupcake"
          alt="Photo of a Cupcake"
          desc="A yummy cupcake baked with love to perfection. One of our best sellers that will surely leave you wanting more!"
          img={Cupcake}
        />
        <Products
          name="Signature Fudgy Brownie"
          alt=" A photo of a yummy Brownie"
          desc="Our Signature Fudgy Brownie is a rich, dense square of dark chocolate perfection. Baked with a crackly top and an intensely moist center, it melts in your mouth with every bite. The deep cocoa flavor is balanced by a touch of sea salt, making it the ultimate satisfying treat."
          img={Brownie}
        />
        <Products
          name="Cake"
          alt="Photo of a Cake"
          desc="Want a treat for your whole familt? Order our chocolate cake now! You'll want this smooth frosting. Our best seller."
          img={Kek}
        />
      </div>
      <Visit />
      <Footer />
    </>
  );
}

export default App;
