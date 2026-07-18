import { use, useState } from "react";

const Users = ({ userPromise }) => {
  // data get area
  const userData = use(userPromise);
  console.log(userData);

  const [users, setUsers] = useState(userData);

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
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);

          alert("user added successful.");
          e.target.reset();
        }
      });
  };

  const handleDelete = (itemId) => {
    console.log("clicked",itemId);
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

      {/* show user data in ui */}
      <div className="">
        {users.map((user) => (
          <p key={user._id}>
            {user.name}
            <button onClick={()=>handleDelete(user._id)}>x</button>
          </p>
        ))}
      </div>
    </>
  );
};

export default Users;
