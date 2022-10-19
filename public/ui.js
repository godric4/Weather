class UI {
  constructor () {
    this.location = document.querySelector('.weather-city')
    this.country = document.querySelector('.weather-country')
    this.degree = document.querySelector('.weather-degree')
    this.desc = document.querySelector('.temperature-detail')
    this.icon = document.querySelector('.weather-icon')
    this.date = document.querySelector('.weather-date')
    this.feels = document.querySelector('.feels-like')
    this.humidity = document.querySelector('.humidity')
    this.speed = document.querySelector('.speed')
    this.outdoor = document.querySelector('.outdoor-events')
  } 

  display (weatherData) {

    // make date format readable on UI
    let today;
    const currentDate = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDay = days[currentDate.getDay()]
    const dateUI = () => { 
      let a = currentDate;
       if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; 
       a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }
    dateUI()
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currentMonth = months[currentDate.getMonth()]
    const currentYear = currentDate.getFullYear()	
    const dayNum = today + ( currentDate.getDate() < 10) ? '0' + currentDate.getDate() + dateUI() : currentDate.getDate() + dateUI()  
    today = `${dayNum} ${currentDay}, ${currentMonth} ${currentYear};`

    // fill ui with weather data values
    const iconCode = weatherData.weather[0].icon   
      this.date.textContent = today
      this.degree.textContent = weatherData.main.temp
      this.desc.textContent = weatherData.weather[0].description
      this.location.textContent = weatherData.name
      this.country.textContent = weatherData.sys.country
      this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${iconCode}@2x.png`)
      this.humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`
      this.feels.innerHTML = `Feels-like: ${weatherData.main.feels_like}c`
      this.speed.innerHTML = `Wind Speed: ${weatherData.wind.speed}mph`

      // notify users of outdoor options    
      const checkWstatus = () => {
        let rainy;
      let snowy;
      rainy = /rain/i
      snowy = /snow/i

      const wStatus = this.desc.textContent = weatherData.weather[0].description
      console.log(wStatus)

      const rainCheck = wStatus.match(rainy)
      const snowCheck = wStatus.match(snowy)

        if(rainCheck == 'rain' || snowCheck == 'snow') {
          this.outdoor.innerHTML = `
        
          <h4><small><mark> The Weather Is Not Suitable</mark></small></h4>

          <ul>        
            <li>Rescheduled Event </li>
              <br>
              <li>or</li>
              <br>
            <li>Cancel Event</li>
          </ul>
         `
          
        } else {
          this.outdoor.innerHTML = `
        
          <h4><small><mark> The Weather Is Perfect</mark></small></h4>
          <ul>          
            <li>Festivals and Carnivals</li>
            <li>Games And Sports</li>
            <li>Parties and Fairs</li>
            <li>Picnics and Eatouts </li>
          </ul>         `
          console.log('false')
        }
      }

      checkWstatus()
       
  }
}