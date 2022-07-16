import React from 'react';

function WeatherInfo({ weatherData, metric }) {
  return (
    <>
      {weatherData === null ? (
        ''
      ) : (
        <section className="mx-auto flex h-auto flex-col items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-12 drop-shadow-md dark:bg-slate-600 sm:px-8">
          <h2 className="mb-2 px-10 text-center text-2xl font-bold tracking-wider text-white sm:text-4xl">
            {weatherData.location.name}
          </h2>

          <div className="-mt-2 text-xs text-white sm:text-sm ">
            <span>{weatherData.location.region}, </span>
            <span>{weatherData.location.country}</span>
          </div>
          <div className="leading-11 flex flex-col items-center justify-center text-white sm:gap-2">
            <div className="flex flex-col items-center justify-center">
              <span className="mt-2 text-sm font-thin tracking-wide">
                {weatherData.current.condition.text}
              </span>
              <img
                className="-my-2 h-[96px] w-[96px] md:h-[96px] md:w-[96px]"
                src={weatherData.current.condition.icon}
                alt={weatherData.location.name}
              />
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
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center text-slate-200">
              <span className="text-[10px]">Amanecer</span>
              <span className="text-xs font-bold">
                {weatherData.forecast.forecastday[0].astro.sunrise}
              </span>
            </div>
            <div className="flex flex-col items-center text-slate-200">
              <span className="text-[10px]">Atardecer</span>
              <span className="text-xs font-bold">
                {weatherData.forecast.forecastday[0].astro.sunset}
              </span>
            </div>
          </div>
          <div className="mt-2 flex h-auto w-full items-center justify-between rounded-md bg-cyan-300/30 p-4 drop-shadow-md">
            <div className="flex flex-col items-center justify-between gap-2 text-xs text-white">
              <span>Ahora</span>
              <span>
                <img
                  src={weatherData.current.condition.icon}
                  alt="/"
                  className="-my-2 h-[24px] w-[24px] "
                />
              </span>
              <span className="tracking-wide">
                {weatherData.current.temp_c}°C
              </span>
            </div>
            <div className="flex flex-col items-center justify-between gap-2 text-xs text-white">
              <span>
                {weatherData.forecast.forecastday[0].hour[0].time.split(' ')[1]}
              </span>
              <span>
                <img
                  src={weatherData.current.condition.icon}
                  alt="/"
                  className="-my-2 h-[24px] w-[24px] "
                />
              </span>
              <span className="tracking-wide">
                {weatherData.current.temp_c}°C
              </span>
            </div>
            <div className="flex flex-col items-center justify-between gap-2 text-xs text-white">
              <span>
                {' '}
                {weatherData.forecast.forecastday[0].hour[1].time.split(' ')[1]}
              </span>
              <span>
                <img
                  src={weatherData.current.condition.icon}
                  alt="/"
                  className="-my-2 h-[24px] w-[24px] "
                />
              </span>
              <span className="tracking-wide">
                {weatherData.current.temp_c}°C
              </span>
            </div>
            <div className="flex flex-col items-center justify-between gap-2 text-xs text-white">
              <span>
                {' '}
                {weatherData.forecast.forecastday[0].hour[2].time.split(' ')[1]}
              </span>
              <span>
                <img
                  src={weatherData.current.condition.icon}
                  alt="/"
                  className="-my-2 h-[24px] w-[24px] "
                />
              </span>
              <span className="tracking-wide">
                {weatherData.current.temp_c}°C
              </span>
            </div>
            <div className="flex flex-col items-center justify-between gap-2 text-xs text-white">
              <span>
                {' '}
                {weatherData.forecast.forecastday[0].hour[3].time.split(' ')[1]}
              </span>
              <span>
                <img
                  src={weatherData.current.condition.icon}
                  alt="/"
                  className="-my-2 h-[24px] w-[24px] "
                />
              </span>
              <span className="tracking-wide">
                {weatherData.current.temp_c}°C
              </span>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col gap-2">
            <div className="flex w-full items-center justify-between rounded-md bg-cyan-400/30 py-2 px-6 text-slate-200 drop-shadow-md dark:bg-slate-500/20">
              <span className="w-12 text-xs">Hoy</span>
              <span>
                <img
                  className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
                  src={weatherData.current.condition.icon}
                  alt={weatherData.location.name}
                />
              </span>
              <div className="ml-auto flex items-center justify-center gap-2 text-xs tracking-wide text-slate-200 sm:text-sm">
                <span>
                  Min:{' '}
                  {Math.round(
                    weatherData.forecast.forecastday[0].day.mintemp_c
                  )}
                  °C
                </span>
                <span>|</span>
                <span>
                  Máx:
                  {Math.round(
                    weatherData.forecast.forecastday[0].day.maxtemp_c
                  )}
                  °C
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between rounded-md bg-cyan-400/30 py-2 px-6 text-slate-200 drop-shadow-md dark:bg-slate-500/20">
              <span className="w-12 text-xs">Mañana</span>
              <span>
                <img
                  className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
                  src={weatherData.current.condition.icon}
                  alt={weatherData.location.name}
                />
              </span>
              <div className="ml-auto flex items-center justify-center gap-2 text-xs tracking-wide text-slate-200 sm:text-sm">
                <span>
                  Min:{' '}
                  {Math.round(
                    weatherData.forecast.forecastday[1].day.mintemp_c
                  )}
                  °C
                </span>
                <span>|</span>
                <span>
                  Máx:
                  {Math.round(
                    weatherData.forecast.forecastday[1].day.maxtemp_c
                  )}
                  °C
                </span>
              </div>
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
          <div className="text-center text-[8px] italic tracking-wide text-slate-200">
            Actualizado: {weatherData.current.last_updated}
          </div>
        </section>
      )}
    </>
  );
}

export default WeatherInfo;
