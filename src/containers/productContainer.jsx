import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productApi";
import ProductList from "../component/productList";
import ProductForm from "../component/productForm";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleAdd = async (data) => {
    await createProduct(data);
    fetchProducts();
  };

  const handleUpdate = async (id, data) => {
    await updateProduct(id, data);
    fetchProducts();
    setSelectedProduct(null);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
  <div className="row g-4">
    {/* LEFT: FORM */}
    <div className="col-md-4">
      <ProductForm
        onSubmit={selectedProduct ? handleUpdate : handleAdd}
        selectedProduct={selectedProduct}
      />
    </div>

    {/* RIGHT: TABLE */}
    <div className="col-md-8">
      <ProductList
        products={products}
        onEdit={setSelectedProduct}
        onDelete={handleDelete}
      />
    </div>
  </div>
);
}
