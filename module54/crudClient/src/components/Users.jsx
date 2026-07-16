const Users = () => {
  const handleForm = (e) => {
    e.preventDefault();

    // get info to input
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="" placeholder="enter name" />
        <br />
        <input type="text" name="email" id="" placeholder="enter email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default Users;
