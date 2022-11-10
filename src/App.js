import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CounterCustom from "./components/CounterCustom";
import CounterReducer from "./components/CounterReducer";
import ErrorHandler from "./components/Errobound";
import NotFound from "./components/Notfound";

function App() {
  const helmetContext = {};

  return (
    <div>
      <ErrorHandler>
        <HelmetProvider context={helmetContext}>
          <Routes>
            <Route path="/" element={<CounterCustom />} />
            <Route path="/CounterReducer" element={<CounterReducer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </ErrorHandler>
    </div>
  );
}

export default App;
