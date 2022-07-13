import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getDataAsync} from "./store/actions";

function App() {
  const data = useSelector(state => state.data);
  console.log('data ->', data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAsync());
  }, []);
  return (
    <div>
      elecard-app
    </div>
  );
}

export default App;
