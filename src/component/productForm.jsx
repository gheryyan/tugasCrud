import { useEffect, useState } from "react";

export default function ProductForm({ onSubmit, selectedProduct }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setForm({
        title: selectedProduct.title,
        price: selectedProduct.price,
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedProduct?.id, form);
    setForm({ title: "", price: "" });
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-4 text-primary">
          {selectedProduct ? "Update Details" : "New Product"}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold">Product Name</label>
            <input
              type="text"
              name="title"
              className="form-control form-control-lg fs-6"
              placeholder="e.g. MacBook Pro M3"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold">Price ($)</label>
            <input
              type="number"
              name="price"
              className="form-control form-control-lg fs-6"
              placeholder="0.00"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
          <button className={`btn btn-lg w-100 ${selectedProduct ? 'btn-warning' : 'btn-primary'}`}>
            {selectedProduct ? "Save Changes" : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
