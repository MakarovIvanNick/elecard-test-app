import './App.css';
import {Header} from "./component/header/Header";
import {Footer} from "./component/footer/footer";
import {DataPage} from "./page/DataPage";
import {useState} from "react";
import {TreePage} from "./page/TreePage/TreePage";

function App() {
    const [view, setView] = useState(true);
  return (
    <div className="app">
        <Header changeView={() => setView(!view)}/>
        {view ? <DataPage /> : <TreePage />}
        <Footer/>
    </div>
  );
}

export default App;
