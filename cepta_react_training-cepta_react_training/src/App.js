import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import Counter from "./component/Counter";
import FunToDoComponet from "./component/FunToDoComponent";
import DigitalClock from "./component/DigitalClocks";
import DigitalClockClass from "./component/ComponentDigitalClockClass";
import CurrencyConverter from "./component/CurrencyConverter/CurrencyConverter";
import HOC2 from "./component/hoc/HOC2";
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
                <Route path="/counter" element={<Counter />} />
                <Route path="/funtodolist" element={<FunToDoComponet />} />

                <Route path="/digiclock" element={<DigitalClock />} />
                <Route path="/digiclockclass" element={<DigitalClockClass />} />
                <Route
                  path="/currencyconverter"
                  element={<CurrencyConverter />}
                />

                <Route path="/hoc2" element={<HOC2 />} />
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
