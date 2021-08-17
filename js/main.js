const getData = async () => {
    let cityName = document.getElementById('city-name').value;
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=d45749cb539c9f8a533e85bdb67ed243`);
    console.log(response.data);
    return response.data
}

const displayData = async (event) => {
    event.preventDefault();
    const data = await getData();
    //High temp
    let high = document.getElementById('high');
    high.innerHTML = (Math.ceil(data.main.temp_max)) + "F";
    //Low temp
    let low = document.getElementById('low');
    low.innerHTML =(Math.ceil(data.main.temp_min)) + "F";
    //Forecast
    let forecast = document.getElementById('forecast');
    forecast.innerHTML = data.weather[0].main;
    //Humidity
    let humidity = document.getElementById('humidity');
    humidity.innerHTML = data.main.humidity + "%";    
}

const button = document.getElementById('search');
button.addEventListener('click', displayData);