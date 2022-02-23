import { useContext, useState } from "react";
import { Store } from "../../utils/store";
import { signin } from "../../utils/actions/authAction";
const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(Store);
  const login = async (e) => {
    e.preventDefault();
    signin(dispatch, {
      username,
      password,
    });
  };

  return (
    <div style={{ width: "300px" }}>
      <form
        onSubmit={login}
        style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
      >
        <label>Email </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Index;
