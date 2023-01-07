import './WeatherForm.scss';

function WeatherForm() {
    return(
        <>
            <form className="weather-form">
                <label className="form__title">Location</label>
                <input type="text" className="form__input"/>

                <label className="form__title">Gender</label>
                <select id="gender_selectors" className="form__input">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <input type="submit"/>
            </form>
        </>
    );
}

export default WeatherForm;