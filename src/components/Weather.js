const Weather = ({data}) => {
    return (
        <div>  
	       <h3>Current weather in city: {data.city} of {data.country}</h3>
	       <p>Temperature: {data.temp}°C</p>
	       <p>Conditions: {data.description}</p>
       </div>
    )
}
    
export default Weather;