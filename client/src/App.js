import './App.css';
import { fetchWeatherRequest } from './redux/action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const city = "Lucknow";
  return (
      <div className="App">
        <button onClick={() => dispatch(fetchWeatherRequest(city))}> click me</button>
      </div>
  );
}

export default App;
