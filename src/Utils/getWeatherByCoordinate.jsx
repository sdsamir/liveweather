import secrets from "../secrets";

const getWeatherByCoordinate = async (longitude, lattitude) =>{
    if(
        longitude === undefined || longitude === null ||
        lattitude === undefined || lattitude === null) return null;

    try{
        const response = 
            await fetch(            
            `${secrets.WeatherApi.weatherApiBaseUrl}/onecall?lat=${lattitude}&lon=${longitude}&units=metric&appid=${secrets.WeatherApi.weatherApiKey}`
            );
        return  await response.json();        
    }
    catch(ex){
        console.log(ex);
    }
    return null;
}

export default getWeatherByCoordinate;