import { use } from "react";

const Users = ({ usersdata }) => {
  const users = use(usersdata);
  console.log(users);

  return (
    <div>
      <div className="">
        <h3>add a new user</h3>
        <form action="">
          <input type="text" name="" id="" />
          <br />
          <input type="email" name="" id="" />
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
