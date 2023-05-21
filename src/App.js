import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import Carousel from "./Components/Common/Carousel/Carousel";
import Service from "./Components/Service/Service";
import ListCustomer from "./Components/Customer/ListCustomer";
import FormCustomer from "./Components/Customer/FormCustomer";
import FormService from "./Components/Service/FormService";
import { Route, Routes } from "react-router-dom";
import ListService from "./Components/Service/ListService";
import Login from "./Components/Login/Login";
import Home from "./Components/Login/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/home" Component={Service} />
        <Route path="/facilities" Component={ListService} />
        <Route path="/add-facility" Component={FormService} />
        <Route path="/update-facility/:id" Component={FormService} />
        <Route path="/customer" Component={ListCustomer} />
        <Route path="/customer/create" Component={FormCustomer} />
        <Route path="/customer/update/:id" Component={FormCustomer} />
        <Route path="/employee" Component={ListCustomer} />
        <Route path="*" Component={Service} /> */}
        <Route path="/home" Component={Home} />
        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
