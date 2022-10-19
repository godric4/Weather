class Localstore {
  constructor() {
    this.location;
    this.defaultLocation = 'New York'
  }

  getDefaultLocation() {
    if(localStorage.getItem('location') === null) {
      this.location = this.defaultLocation
    } else {
      this.location = localStorage.getItem('location')
    }

    return {
      location: this.location
    }
  }

  setDefaultLocation (location) {
     localStorage.setItem('location', location )
  }


}

