import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import FunToDoComponet from "./component/FunToDoComponent";
import ComponentModal from "./component/ComponentModal";
import EMI from "./component/EMICalculator/EMI";
import DigitalClock from "./component/DigitalClocks";
import DigitalClockClass from "./component/ComponentDigitalClockClass";
import CurrencyConverter from "./component/CurrencyConverter/CurrencyConverter";
import ThemeApp from "./component/ThemeSwitcher/ThemeContext";
import ContextDemo from "./component/ThemeSwitcher2/ContextDemo";
import WeatherApp from "./component/WeatherApp/WeatherApp";
import "./sass/Test.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <ThemeApp />
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-lg-10 main-wrapper">
              <Routes>
                <Route path="/funtodolist" element={<FunToDoComponet />} />
                <Route path="/digiclock" element={<DigitalClock />} />
                <Route path="/digiclockclass" element={<DigitalClockClass />} />
                <Route
                  path="/currencyconverter"
                  element={<CurrencyConverter />}
                />
                <Route path="/emicalc" element={<EMI />} />
                <Route path="/compmodal" element={<ComponentModal />} />
                <Route path="/contextdemo2" element={<ContextDemo />} />
                <Route path="/weatherapp" element={<WeatherApp />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ThemeApp />
    </BrowserRouter>
  );
}

export default App;
