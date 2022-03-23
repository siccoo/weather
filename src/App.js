import React from 'react';
const api = {
  key: "12510a2f713d51450ce443ab6e07c188",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search__box'>
          <input type="text" className="search__bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
