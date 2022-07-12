import React from 'react';

function SearchCity() {
  return (
    <form className="my-4 ">
      <input
        type="text"
        placeholder="Buscar por Ciudad ..."
        className="h-12 w-full rounded-lg bg-slate-200 px-4 text-slate-600 outline-cyan-500 placeholder:text-slate-400 dark:outline-slate-400 "
      />
    </form>
  );
}

export default SearchCity;
