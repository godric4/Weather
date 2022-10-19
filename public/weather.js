class Weather {
  constructor(location) {
    this.apiKey ='08063759fc5dff519c65a354333553d5';
    this.location= location;
  }

  async fetchWeatherData() {
    const weatherResponse = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${this.apiKey}`)

    const resData = await weatherResponse.json()
   
    return resData   
    // try {
    //    const weatherResponse = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${this.apiKey}`)
       
    //    const status = weatherResponse.status >= 200 && weatherResponse.status < 300; // either true or false
    //    console.log('online')
    //    return status
    // } catch (err) {
    //   const wc = document.querySelector('.weather-condition')
    //   wc.innerHTML = `<h1>You are offline</h1>`
    //   console.log('offline')
    //   return false; // definitely offline      
    // }
  }

  searchLocation( location) {
    this.location = location
  }
}

