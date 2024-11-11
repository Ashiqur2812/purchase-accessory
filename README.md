<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# Gadget Heaven - React Project 🚀

## 🛠️ **Overview**

**Gadget Heaven** is a modern e-commerce website where users can explore and purchase the latest gadgets. Built with React, it offers an interactive experience for shopping and managing your favorite gadgets. From smart devices to cool accessories, this platform is your go-to place to enhance your tech collection.

---

## ⚛️ **React Fundamentals Used**

This project incorporates several core React concepts that power the application:

- **Functional Components**: The entire app is built with functional components to keep things simple and modular.
- **JSX (JavaScript XML)**: JSX is used to render HTML-like elements inside JavaScript.
- **Props**: Data is passed between components using props to manage dynamic rendering.
- **State Management**: `useState` hook is used for managing state (e.g., products, cart total).
- **Effect Hook (`useEffect`)**: Used for side effects like fetching data from local storage or updating the UI when changes occur.
- **Event Handling**: Custom handlers for user interactions such as button clicks, form submissions, etc.
- **React Router**: Enables navigation between different pages (Home, Statistics, and Dashboard).
- **Conditional Rendering**: Dynamically render UI elements (e.g., showing a purchase modal based on conditions).
- **Lists & Keys**: Efficient rendering of lists, such as the products displayed in the cart, using the `key` prop.
  
---

## 📦 **Data Handling and Management**

### 🔑 **Local Storage**:
Local Storage is used for persistent data across sessions:
- Products are stored in the browser’s `localStorage` under the key `'products'`.
- **`localStorage.setItem()`** and **`localStorage.getItem()`** methods are used to save and retrieve product data, ensuring users' carts remain intact even after they refresh the page.
- On product removal or purchase, local storage is updated or cleared accordingly.

### 🔄 **Context API (Optional for Future)**:
For large-scale state management, React’s Context API can be applied to:
- Manage global states like cart contents or wishlist data across components without prop drilling.
- Use `useContext` to access and modify cart-related data.

---

## ✨ **Features of the Website**

Here are the key features you’ll find on **Gadget Heaven**:

1. **🛒 Product Dashboard**:
   - Displays a list of products added to the cart.
   - Each product shows a title, description, image, and price.
   - Users can easily remove items from the cart.

2. **💰 Cart Management**:
   - Displays the total cost of all products in the cart.
   - The total cost is dynamically updated as users add or remove items.

3. **📊 Product Sorting**:
   - Users can sort products by price (high to low).
   - Easily compare products based on pricing.

4. **📱 Fully Responsive Design**:
   - The website is optimized for mobile and desktop devices.
   - A dropdown menu is available for smooth navigation on smaller screens.

5. **🎉 Purchase Modal**:
   - Upon clicking the "Purchase" button, a modal confirms the total cost and success.
   - After the purchase, the cart is cleared, and the modal thanks the user for their order.

---

## ⚡ **Installation Guide**

To get started with **Gadget Heaven**, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone : https://github.com/programming-hero-web-course2/b10a8-gadget-heaven-Ashiqur2812.git
   
2.  **Live Website Link**

