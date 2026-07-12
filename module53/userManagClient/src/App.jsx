import "./App.css";
import Users from "./components/Users";

// user data loading here
const usersdata = fetch("http://localhost:2000/users").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <h1>User management app</h1>
      <Users usersdata={usersdata} />
    </>
  );
}

export default App;
