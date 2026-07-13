import { use, useState } from "react";

const Users = ({ usersdata }) => {
  const initialUsers = use(usersdata);
  //   console.log(users);

  const [users, setUsers] = useState(initialUsers);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("form btn click");

    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name, email);

    const newUser = {
      name,
      email,
    };

    fetch("http://localhost:2000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after form submitted", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        event.target.reset()
      });
  };

  return (
    <div>
      <div className="">
        <h3>add a new user</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <button>user add</button>
        </form>
      </div>

      <div className="">
        {users.map((user) => (
          <p key={user.id}>
            Name: {user.name}, Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
