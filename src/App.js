import "./assets/App.css";
import Product from "./components/Product";

const data = [
  { title: "Product 1", price: "10", description: "First product" },
  { title: "Product 2", price: "20", description: "Second product" },
];

function App() {
  return (
    <div className="App">
      <h3>
        <center>My Demo Shop</center>{" "}
      </h3>
      <header className="App-header">
        <Product
          title={data[0].title}
          price={data[0].price}
          description={data[0].description}
        />
        <Product
          title={data[1].title}
          price={data[1].price}
          description={data[1].description}
        />
      </header>
    </div>
  );
}

export default App;
