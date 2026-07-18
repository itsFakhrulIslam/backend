import { use, useState } from "react";

const Products = ({ productPromise }) => {
  const productsData = use(productPromise);
  console.log(productsData);

  const [products, setProducts] = useState(productsData);

  const setAnewProducts = (newProduct) => {
    console.log("inital log");

    fetch("http://localhost:2030/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        console.log("befor data");
        return res.json();
      })
      .then((data) => {
        console.log("befor if ", data);

        if (data.insertedId) {
          newProduct._id = data.insertedId;
          const newProducts = [...products, newProduct];

          setProducts(newProducts);

          alert("product added successfull");
          console.log("after save product item", data);
        }
      });

    console.log("last log");
  };

  const handleProductForm = (event) => {
    event.preventDefault();

    // get products input value
    const name = event.target.name.value;
    const color = event.target.color.value;
    const brand = event.target.brand.value;
    console.log(name, color, brand);

    const newProduct = {
      name,
      color,
      brand,
    };

    setAnewProducts(newProduct);
    console.log("befor fetch");
  };

  const handleDelete = (itemId) => {
    console.log("clicked", itemId);
  };

  return (
    <>
      <div>
        <form onSubmit={handleProductForm}>
          <input type="text" name="name" id="" placeholder="enter name" />
          <br />
          <input type="text" name="color" id="" placeholder="enter color" />
          <br />
          <input type="text" name="brand" id="" placeholder="enter price" />
          <br />
          <input type="submit" value="Add Product" />
        </form>
      </div>

      <div>
        {products.map((product) => (
          <p key={product._id}>
            {product.name}
            <button onClick={() => handleDelete(product._id)}>x</button>
          </p>
        ))}
      </div>
    </>
  );
};

export default Products;
