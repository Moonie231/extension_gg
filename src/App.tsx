import "./App.css";
import RemoveButton from "./pages/RemoveButton";
import BeenTogether from "./pages/beenTogether";
import Mantine from "./pages/mantine";
import MaxCount from "./pages/maxCount";

const App = () => {

  return (
    <div>
      <BeenTogether/>
    <Mantine />
    <MaxCount />
    <RemoveButton />
    </div>
    
  );
};

export default App;
