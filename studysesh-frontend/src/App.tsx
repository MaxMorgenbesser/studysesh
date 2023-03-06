import { Provider } from "react-redux";
import Store from "./utils/redux/Store";
import "./App.css";
import UnifiedNavigator from "./navigation/UnifiedNavigator";


function App() {
  return (
    <Provider store={Store}>
      <UnifiedNavigator />
    </Provider>
  );
}

export default App;
