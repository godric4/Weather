class Uidaily{
  constructor(){
    this.sun = document.querySelector('.sun-t')
    this.mon = document.querySelector('.mon-t')
    this.tue = document.querySelector('.tue-t')
    this.wed = document.querySelector('.wed-t')
    this.thu = document.querySelector('.thu-t')
    this.fri = document.querySelector('.fri-t')
    this.sat = document.querySelector('.sat-t')

    this.snicon = document.querySelector('.sn-icon')
    this.micon = document.querySelector('.m-icon')
    this.ticon = document.querySelector('.t-icon')
    this.wicon = document.querySelector('.w-icon')
    this.thicon = document.querySelector('.th-icon')
    this.ficon = document.querySelector('.f-icon')
    this.sicon = document.querySelector('.s-icon')

  }

  displayForecast(forecast){
      const dailyArr = forecast.daily
      
      this.sun.innerText = `${dailyArr[7].temp.max}`  
      this.mon.innerText = `${dailyArr[1].temp.max}` 
      this.tue.innerText = `${dailyArr[2].temp.max}` 
      this.wed.innerText = `${dailyArr[3].temp.max}` 
      this.thu.innerText = `${dailyArr[4].temp.max}` 
      this.fri.innerText = `${dailyArr[5].temp.max}` 
      this.sat.innerText = `${dailyArr[6].temp.max}` 

      this.snicon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyArr[7].weather[0].icon}@2x.png`)  
      this.micon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyArr[1].weather[0].icon}@2x.png`) 
      this.ticon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyArr[2].weather[0].icon}@2x.png`) 
      this.wicon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyArr[3].weather[0].icon}@2x.png`) 
      this.thicon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyArr[4].weather[0].icon}@2x.png`) 
      this.ficon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyArr[5].weather[0].icon}@2x.png`) 
      this.sicon.setAttribute('src', `https://openweathermap.org/img/wn/${dailyArr[6].weather[0].icon}@2x.png`) 
  }
}