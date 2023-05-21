import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [dataInStorage, setDataInStorage] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    setDataInStorage(JSON.parse(localStorage.getItem("token")));
  }, []);
  return (
    <>
      {dataInStorage ? (
        <>
          <h1>Hello {dataInStorage.name}</h1>
          <button className="btn btn-dark" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Bạn không được cấp quyền trong nguồn tài nguyên này</h1>
          <button className="btn btn-dark" onClick={handleLogin}>
            Login
          </button>
        </>
      )}
    </>
  );
}

export default Home;
