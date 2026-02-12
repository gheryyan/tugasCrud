export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h5 className="card-title fw-bold mb-4">Inventory List</h5>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th className="ps-3">Product</th>
                <th>Price</th>
                <th className="text-end pe-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-5 text-muted">
                    No products found. Add some to get started!
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="ps-3">
                      <span className="fw-semibold text-dark">{product.title}</span>
                    </td>
                    <td>
                      <span className="badge bg-success-soft text-success bg-opacity-10 py-2 px-3">
                        ${Number(product.price).toLocaleString()}
                      </span>
                    </td>
                    <td className="text-end pe-3">
                      <button 
                        className="btn btn-outline-warning btn-sm me-2"
                        onClick={() => onEdit(product)}
                      >
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onDelete(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}