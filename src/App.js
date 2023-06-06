import { BrowserRouter, Routes, Route } from "react-router-dom";
import { otherpaths } from './Components/Others-Paths';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
    {otherpaths.map (({path, element, id}) => {
    return <Route path= {path} element = {element} key={id} />
    })}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
