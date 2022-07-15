import './App.css';
import {Header} from "./component/header/Header";
import {Footer} from "./component/footer/footer";
import {DataPage} from "./page/DataPage";
import {useState} from "react";

function App() {
    const [view, setView] = useState(true);
    const changeView = () => {
      setView(!view);
    };
  return (
    <div className="app">
        <Header changeView={changeView}/>
        {view ? <DataPage /> : null}
        <Footer/>
    </div>
  );
}

export default App;
