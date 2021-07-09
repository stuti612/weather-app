import "./App.css";
import Template from "./Template";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  return (
    <div className="App">
      <Template />
    </div>
  );
}

export default App;
