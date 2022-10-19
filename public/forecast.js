const uid = new Uidaily

class Forecast{
  constructor() {
    this.apiKey ='08063759fc5dff519c65a354333553d5';    
  }

  bearing(weatherData) {
    const lat = weatherData.coord.lat
    const lon = weatherData.coord.lon

    const fetchDailyWeather = async () => {
      const response = await fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&
      exclude=current&appid=${this.apiKey}`)
  
      const responseData = await response.json()
     
      return responseData   
    }
    fetchDailyWeather()
    .then(results => {
            uid.displayForecast(results)
          })
       .catch(error => console.log(error))
  }
}