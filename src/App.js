import React from 'react';
const api = {
  key: "12510a2f713d51450ce443ab6e07c188",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  }
  return (
    <div className="app">
      <main>
        <div className='search__box'>
          <input type="text" className="search__bar" placeholder="Search..." />
        </div>
        <div className='location__box'>
          <div className='location'>Lagos, Nigeria</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
