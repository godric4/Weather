 // Search
 const store = new Localstore();
 const storedLocation = store.getDefaultLocation()
 const weatherData = new Weather(storedLocation.location)
 const forecast = new Forecast()
 const ui = new UI

//  console.log(location)

 document.addEventListener('DOMContentLoaded', fetchWeatherData)




 
 const loadScreen = () => {
  const loader = document.querySelector('.loader')
  const wc = document.querySelector('.weather-condition')
  const dc = document.querySelector('.days')
  const od = document.querySelector('.outdoor-events')
  const wic = document.querySelector('.weather-icon')
  const wsd = document.querySelector('.weather-sub-details')
 


  setTimeout(() => {
    loader.style.visibility = 'hidden'
    dc.style.visibility = 'visible'
    wc.style.visibility = 'visible'
    od.style.visibility = 'visible'
    wsd.style.visibility = 'visible'
    wic.style.visibility = 'visible'
  }, 1000)

  // window.addEventListener('load', (event) => {
  //   console.log('page is fully loaded');
  // });
 }

 loadScreen()



 const searchLocation = document.querySelector('.weather-search');
 searchLocation.addEventListener('click', (e)=> {
  const location = document.querySelector('.search-weather').value;

   weatherData.searchLocation(location)
   store.setDefaultLocation(location)
   

   fetchWeatherData()
   e.preventDefault()
 })



 function fetchWeatherData (){
   weatherData.fetchWeatherData()
    .then(results => {
      
      ui.display(results)
      forecast.bearing(results)
      console.log(results)
        return status
    })
    .catch(error => {
      console.log(error)
           
    })
 }

