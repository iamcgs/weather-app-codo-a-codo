import React from 'react';

function WeatherInfo({ weatherData, metric }) {
  return (
    <>
      {weatherData === null ? (
        ''
      ) : (
        <section className="mx-auto flex h-auto flex-col items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-12 drop-shadow-md dark:bg-slate-600 sm:px-8">
          <h2 className="mb-4 px-10 text-center text-2xl font-bold tracking-wider text-white sm:text-4xl">
            {weatherData.location.name}
          </h2>
          <div className="mx-auto -mt-4 flex w-3/4 flex-col gap-1 text-center text-xs text-white sm:text-sm">
            <span>{weatherData.location.region}</span>
            <span>{weatherData.location.country}</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-base text-slate-200">
            <span>
              Min: {weatherData.forecast.forecastday[0].day.mintemp_c}
            </span>
            <span>|</span>
            <span>
              Máx: {weatherData.forecast.forecastday[0].day.maxtemp_c}
            </span>
          </div>

          <div className="leading-11 flex flex-col items-center justify-center text-white sm:gap-2">
            <div className="flex flex-col items-center justify-center">
              <img
                className="-my-2 h-[96px] w-[96px] md:h-[96px] md:w-[96px]"
                src={weatherData.current.condition.icon}
                alt={weatherData.location.name}
              />
              <span className="-mt-2 text-sm font-thin tracking-wide">
                {weatherData.current.condition.text}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {metric === 'celsius' ? (
                <span className="text-5xl font-bold tracking-widest drop-shadow-sm sm:text-7xl">
                  {Math.round(weatherData.current.temp_c)}°C
                </span>
              ) : (
                <span className="text-5xl font-bold tracking-widest drop-shadow-sm sm:text-7xl">
                  {Math.round(weatherData.current.temp_f)}°F
                </span>
              )}
            </div>
          </div>
          <div className="mt-8 grid w-full gap-2 rounded-lg py-3 text-white sm:grid-cols-3 sm:justify-between sm:bg-cyan-400/50 sm:px-2 sm:drop-shadow-md sm:dark:bg-slate-500/50">
            <div className="info-details">
              {metric === 'celsius' ? (
                <span>{weatherData.current.wind_kph} km/h</span>
              ) : (
                <span>{weatherData.current.wind_mph} mph</span>
              )}

              <span>Viento</span>
            </div>
            <div className="info-details sm:rounded-none sm:border-x-2 sm:border-cyan-400/70 sm:dark:border-slate-400/40">
              <span> {weatherData.current.humidity} %</span>
              <span>Humedad</span>
            </div>
            <div className="info-details">
              {metric === 'celsius' ? (
                <span>{Math.round(weatherData.current.feelslike_c)}°C</span>
              ) : (
                <span>{Math.round(weatherData.current.feelslike_c)}°F</span>
              )}

              <span>ST</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default WeatherInfo;
