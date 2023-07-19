import secrets from "../secrets";

const getLocations = async (location)=> {

    if(location === undefined || location === null || location.trim() ==="")
        return null;
    try{
        const response = await fetch(
            `${secrets.WeatherApi.weatherApiBaseUrl}/find?q=${location}&appid=${secrets.WeatherApi.weatherApiKey}&units=metric`
          );
          return response.json();
    }
    catch(ex){
        console.log(ex);
    }    
}

export default getLocations;
