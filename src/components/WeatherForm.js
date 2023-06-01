const WeatherForm = ({ submitHandler, changeHandler, city, country }) => {
    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={city} name="city" placeholder="City..." onChange={changeHandler} />
            <input type="text" value={country} name="country" placeholder="Country..." onChange={changeHandler} />
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default WeatherForm;