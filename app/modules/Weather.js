class Weather {
  constructor(location) {
    this.getData();
  }

  getData() {
    const token ="216fd9a063b72173883f0ddeeeb951f4";
    const latitude = "34.736009";
    const longitude = "-92.331122";
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&APPID=${token}&units=imperial`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        let body = document.querySelector("body");

        document.querySelector("#city").innerHTML = response.city.name;
        document.querySelector("#description").innerHTML = response.list[0].weather[0].description;

        let temp = response.list[0].temp.day;
        document.querySelector("#temp").innerHTML = Math.round(temp);

        let max = response.list[0].temp.max;
        let maxDiv = document.createElement("div");
        maxDiv.innerHTML = Math.round(max);
        body.appendChild(maxDiv);

        let min = response.list[0].temp.min;
        let minDiv = document.createElement("div");
        minDiv.innerHTML = Math.round(min);
        body.appendChild(minDiv);

        let date = new Date(response.list[0].dt * 1000);
        let dayOfWeek = date.getDay();

        if (dayOfWeek === 0) {
          dayOfWeek = "Sunday";
        }
        else if (dayOfWeek === 1) {
          dayOfWeek = "Monday";
        }
        else if (dayOfWeek === 2) {
          dayOfWeek = "Tuesday";
        }
        else if (dayOfWeek === 3) {
          dayOfWeek = "Wednesday";
        }
        else if (dayOfWeek === 4) {
          dayOfWeek = "Thursday";
        }
        else if (dayOfWeek === 5) {
          dayOfWeek = "Friday";
        }
        else if (dayOfWeek === 6) {
          dayOfWeek = "Saturday";
        }

        let dayOfWeekDiv = document.createElement("div");
        dayOfWeekDiv.innerHTML = dayOfWeek;
        body.appendChild(dayOfWeekDiv);

        let icon = `http://openweathermap.org/img/w/${response.list[0].weather[0].icon}.png`;
        //image goes here.

      })
  }
}

export default Weather;