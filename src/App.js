import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation.jsx'
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";

function App() {

  // const [query, setQuery] = useState({q:'berlin'})
  // const [units, setUnits] = useState('metric')
  // const [weather, setWeather] = useState(null)

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     const message = query.q ? query.q : "current location.";

  //     toast.info("Fetching weather for " + message);

  //     await getFormattedWeatherData({ ...query, units }).then((data) => {
  //       toast.success(
  //         `Successfully fetched weather for ${data.name}, ${data.country}.`
  //       );

  //       setWeather(data);
  //     });
  //   };

  //   fetchWeather();
  // }, [query, units]);

  // const formatBackground = () => {
  //   if (!weather) return "from-cyan-700 to-blue-700";
  //   const threshold = units === "metric" ? 20 : 60;
  //   if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

  //   return "from-yellow-700 to-orange-700";
  // };

  return (
  //   <div>
  //   {weather && (
  //     <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
  //     <TopButtons/>
  //     <Inputs/>
  //     <TimeAndLocation weather={weather}/>
  //     <Temperature weather={weather}/>
  //     <Forecast title="hourly forecast"/>
  //     <Forecast title="daily forecast"/>
  //   </div>
  // )}

  // </div>

  <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
       <TopButtons/>
       <Inputs/>
       <TimeAndLocation/>
       <Temperature/>
       <Forecast title="hourly forecast"/>
       <Forecast title="daily forecast"/>
     </div>
  );
}

export default App;
