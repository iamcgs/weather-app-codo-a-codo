import { useState } from 'react';
import Metric from './components/Metric';
import Navbar from './components/Navbar';
import SearchCity from './components/SearchCity';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const weatherData = {
    location: {
      name: 'Pergamino',
      region: 'Buenos Aires',
      country: 'Argentina',
      lat: -33.89,
      lon: -60.57,
      tz_id: 'America/Argentina/Buenos_Aires',
      localtime_epoch: 1657658767,
      localtime: '2022-07-12 17:46',
    },
    current: {
      last_updated: '2022-07-12 17:45',
      temp_c: 14.4,
      temp_f: 57.9,
      is_day: 1,
      condition: {
        text: 'Soleado',
        icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      },
      wind_mph: 8.9,
      wind_kph: 14.4,
      humidity: 33,
      feelslike_c: 13.4,
      feelslike_f: 56.1,
      uv: 4.0,
    },
  };
  const [metric, setMetric] = useState('celsius');

  return (
    <>
      <Navbar />
      <main className="mx-auto mt-8 mb-24 max-w-[500px] px-10 sm:max-w-[700px] sm:px-20">
        <Metric metric={metric} setMetric={setMetric} />
        <SearchCity />
        <WeatherInfo weatherData={weatherData} metric={metric} />
      </main>
    </>
  );
}

export default App;
