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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/service" Component={Service} />
        <Route path="/customer" Component={ListCustomer} />
        <Route path="/customer/create" Component={FormCustomer} />
        <Route path="/customer/update/:id" Component={FormCustomer} />
        <Route path="/employee" Component={ListCustomer} />
        <Route path="*" Component={Service} />
      </Routes>
    </div>
  );
}

export default App;
