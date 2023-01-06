var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';


function show5day () {
    data = [
        {
            date: "03/31/2021",
            temp: "74.01",
            wind: "6.67 MPH",
            humidity: "46"
        },
        {
            date: "03/31/2021",
            temp: "74.01",
            wind: "6.67 MPH",
            humidity: "46"
        },
        {
            date: "03/31/2021",
            temp: "74.01",
            wind: "6.67 MPH",
            humidity: "46"
        },
        {
            date: "03/31/2021",
            temp: "74.01",
            wind: "6.67 MPH",
            humidity: "46"
        },
        {
            date: "03/31/2021",
            temp: "74.01",
            wind: "6.67 MPH",
            humidity: "46"
        }
    ]

 
           <p class="card-text">
            wind: ${data[i].wind}
           </p>
           <p class="card-text">
            humidity: ${data[i].humidity}
           </p>
          </div>
        </div>
      </div>
      `
    }

    $("#5-day-weather").html(cardHtml)
 
}

show5day()