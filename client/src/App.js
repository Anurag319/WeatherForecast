import './App.css';
import { fetchWeatherRequest } from './redux/action';
import { useDispatch } from 'react-redux';
import Weather from './Components/weather'; // Display weather component 

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
