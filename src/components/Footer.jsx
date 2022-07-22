import React from 'react';

function Footer() {
  return (
    <footer className="h-[175px] w-full bg-slate-200 py-8 dark:bg-slate-800">
      <div className="text-center  text-cyan-700 dark:text-white">
        <p className="text-lg font-semibold ">Trabajo Grupal Realizado Por:</p>
        <ul>
          <li className="transition-all duration-200 ease-in-out hover:text-orange-400">
            <a
              href="https://www.linkedin.com/in/carla-sottosanti/"
              target="_blank"
              rel="noreferrer"
            >
              Carla Sottosanti
            </a>
          </li>
          <li className="transition-all duration-200 ease-in-out hover:text-orange-400">
            <a
              href="https://www.linkedin.com/in/victoria-bugallo-iribarne/"
              target="_blank"
              rel="noreferrer"
            >
              Victoria Bugallo Iribarne
            </a>
          </li>
          <li className="transition-all duration-200 ease-in-out hover:text-orange-400">
            <a
              href="https://www.linkedin.com/in/vanesa-karina-derderian-6772b6246/"
              target="_blank"
              rel="noreferrer"
            >
              Vanesa Karina Derderian
            </a>
          </li>
          <li className="transition-all duration-200 ease-in-out hover:text-orange-400">
            <a
              href="https://www.linkedin.com/in/flavia-buffa/"
              target="_blank"
              rel="noreferrer"
            >
              Flavia Buffa
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
