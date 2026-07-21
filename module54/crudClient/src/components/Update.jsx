import { useLoaderData } from "react-router";

const Update = () => {
  const user = useLoaderData();
  console.log(user);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log("updated user");
  };

  return (
    <div>
      <h1>update a users info</h1>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" defaultValue={user.name} />
        <br />
        <input type="text" name="email" id="" defaultValue={user.email} />
        <br />
        <input type="submit" value="Update user" />
      </form>
    </div>
  );
};

export default Update;
