const Users = () => {
  const handleUserForm = (e) => {
    e.preventDefault();

    // get info to input
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    // new user
    const newUser = {
      name,
      email,
    };

    // save user data to database via server
    fetch("http://localhost:2030/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
        if (data.insertedId) {
          alert("user added successful.");
          e.target.reset();
        }
      });
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

    fetch("http://localhost:2030/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after save product item", data);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleUserForm}>
          <input type="text" name="name" id="" placeholder="enter name" />
          <br />
          <input type="text" name="email" id="" placeholder="enter email" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>

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
    </>
  );
};

export default Users;
