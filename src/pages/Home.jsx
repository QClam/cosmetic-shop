import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

function Home() {
  const categories = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];

  return (
    <div>
      <div className="home-bg"></div>
      <div className="container mx-auto my-10 px-4 max-w-7xl mx-auto">
        <div className="flex gap-4">
          {categories.map((cate) => (
            <button className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in">
              {cate}
            </button>
          ))}
        </div>
        <div>
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
