import { useLoaderData } from "react-router";

const UserDetails = () => {
  const userInfo = useLoaderData();
  console.log(userInfo);

  return (
    <div>
      <h1>user details</h1>
    </div>
  );
};

export default UserDetails;
