import ProductContainer from "./containers/productContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Product CRUD App</h2>
      <ProductContainer />
    </div>
  );
}

export default App;
