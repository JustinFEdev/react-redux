import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./components/Display";
import Views from "./components/Views";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
