import "./WeatherForm.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function WeatherForm() {
  let APIKEY = "0eb8e1a2480f4da3aa533249230601";
  const { location, setLocation } = useState("London");
  const { gender, setGender } = useState("Male");
  const { apiData, setApiData } = useState();

  //1. Get info from api based on location

  //2. Change the image of the weather condition and the putfit based on data from api
  function changeBackground(x) {}

  function changeOutfit(x) {}

  //3. If the location and gender change based on the user's input =, then the useEffect will change the background and outfit
  useEffect(() => {
    changeBackground(x);
    changeOutfit(x);
  }, [location, gender]);

  return (
    <>
      <form className="weather-form">
        <label className="form__title">Location</label>
        <input type="text" className="form__input" />

        <label className="form__title">Location</label>
        <input type="text" className="form__input" />

        <label className="form__title">Gender</label>
        <select id="gender_selectors" className="form__input">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input type="submit" />
      </form>
    </>
  );
}

export default WeatherForm;
