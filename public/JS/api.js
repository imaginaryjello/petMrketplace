// Base URL for the API
const BASE_URL = "http://localhost:5000/api/products";

// Fetch all products and display them
async function fetchProducts() {
  try {
    const response = await fetch(BASE_URL);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Add a new product
async function addProduct(product) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const newProduct = await response.json();
    console.log("Product added:", newProduct);
    fetchProducts(); // Refresh the product list
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

// Update a product
async function updateProduct(id, updatedData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const updatedProduct = await response.json();
    console.log("Product updated:", updatedProduct);
    fetchProducts(); // Refresh the product list
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

// Delete a product
async function deleteProduct(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    console.log("Product deleted");
    fetchProducts(); // Refresh the product list
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

// Function to display products (to be customized for your frontend)
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear existing products
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `<h3>${product.name}</h3>
                                  <p>${product.description}</p>
                                  <p>Price: $${product.price}</p>`;
    productList.appendChild(productItem);
  });
}

// Initial fetch to load products
fetchProducts();
