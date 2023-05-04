import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import Carousel from "./Components/Common/Carousel/Carousel";
import Service from "./Components/Service/Service";
import ListCustomer from "./Components/Customer/ListCustomer";
import FormCustomer from "./Components/Customer/FormCustomer";
import FormService from "./Components/Service/FormService";

function App() {
  return (
    <div className="App">
      {/* <Service /> */}
      {/* <ListCustomer /> */}
      {/* <FormCustomer /> */}
      <FormService />
    </div>
  );
}

export default App;
