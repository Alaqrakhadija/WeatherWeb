const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
async function getWeekWeather(event){
    event.preventDefault();
    const baseUrl=window.location.href.split("?")[0];
    lat = document.getElementById("lat").value;
    lon = document.getElementById("lon").value;

    requestUrl =`${baseUrl}?lat=${lat}&lon=${lon}`;
    const weekWeather = await fetch(requestUrl).then(res => res.json());
    var date = new Date();
    var daysContainers = '';
    for(day of weekWeather){
        daysContainers+=`
            <div class="day-container">
                <h3>${days[date.getDay()]}</h3>
                <h1>${day.temp}°</h1>
                <h4>Feels Like ${day.feels_like}°</h4>
                <h5>L:${day.min_temp}° H:${day.max_temp}°</h5>
                <h6>HMD:${day.humidity}%</h6>
            </div>`
        ;
        date.setDate(date.getDate() + 1);
    }
    document.getElementsByClassName("data-container")[0].innerHTML =daysContainers;

}