import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import CounterCustom from "./components/CounterCustom";
import CounterReducer from "./components/CounterReducer";
import ErrorHandler from "./components/Errobound";
import NotFound from "./components/Notfound";

function App() {
  return (
    <div>
      <ErrorHandler>
        <Routes>
          <Route path="/" element={<CounterCustom />} />
          <Route path="/CounterReducer" element={<CounterReducer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorHandler>
    </div>
  );
}

export default App;
