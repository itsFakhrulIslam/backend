import "./App.css";
import Products from "./components/Products";
import Users from "./components/Users";

// data loader area
const userPromise = fetch("http://localhost:2030/users").then((res) =>
  res.json(),
);

const productPromise = fetch("http://localhost:2030/products").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <h1>Simple Crud App</h1>
      <Users userPromise={userPromise} />

      <Products productPromise={productPromise} />
    </>
  );
}

export default App;
