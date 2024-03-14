import React, { useState } from 'react';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1001, name: 'Samsung galaxy S24 Ultra', category: 'Electronics', price: 1419.99, stockQuantity: 50 },
    { id: 1002, name: 'Iphone 15 pro max', category: 'Electronics', price: 1199.99, stockQuantity: 30 },
    { id: 1003, name: 'IQOO Z9', category: 'Electronics', price: 999.99, stockQuantity: 60 },
    { id: 1004, name: 'Trusted Love', category: 'Books', price: 19.99, stockQuantity: 55 },
    { id: 1005, name: 'The 48 Laws of Power', category: 'Books', price: 15.89, stockQuantity: 45 },
    { id: 1006, name: 'Deep Work', category: 'Books', price: 23.99, stockQuantity: 70 },
  ]);

  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0,
  });

  const [editingProductId, setEditingProductId] = useState(null);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = () => {
    if (editingProductId !== null) {
      // Editing existing product
      setProducts(products.map((product) => (product.id === editingProductId ? newProduct : product)));
      setEditingProductId(null);
    } else {
      // Adding new product
      setProducts([...products, newProduct]);
    }

    setNewProduct({
      id: '',
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0,
    });
  };

  const editProduct = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    setNewProduct(selectedProduct);
    setEditingProductId(id);
  };

  const clearForm = () => {
    setNewProduct({
      id: '',
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0,
    });
    setEditingProductId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Products Management</h1>

        {/* Product Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2">Product ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Category</th>
              <th className="py-2">Price</th>
              <th className="py-2">Stock Quantity</th>
              <th className="py-2" colSpan={3}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2">{product.id}</td>
                <td className="py-2">{product.name}</td>
                <td className="py-2">{product.category}</td>
                <td className="py-2">${product.price.toFixed(2)}</td>
                <td className="py-2">{product.stockQuantity}</td>
                <td className="py-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => editProduct(product.id)}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                </td>
                <td className="py-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add/Edit Product Form */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">
            {editingProductId !== null ? 'Edit Product' : 'Add New Product'}
          </h3>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Product ID</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={newProduct.id}
                  onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
                  disabled={editingProductId !== null}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Product Name</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Category</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Price</label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Stock Quantity</label>
                <input
                  type="number"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={newProduct.stockQuantity}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stockQuantity: parseInt(e.target.value) })
                  }
                />
              </div>
            </div>
            <div className="mt-2">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={addProduct}
              >
                {editingProductId !== null ? 'Update Product' : 'Add Product'}
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
                onClick={clearForm}
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsManagement;
