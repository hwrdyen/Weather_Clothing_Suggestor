import "./WeatherForm.scss";
import axios from "axios";
import { useEffect, useState } from "react";

//background images
import main_image from "../../assets/backgroundimages/main_image.png";
import coldovercast_Toronto from '../../assets/backgroundimages/coldovercast_Toronto.jpg';
import coldsnowy_Moscow from '../../assets/backgroundimages/coldsnowy_Moscow.jpg';
import warmrainy_Chennai from '../../assets/backgroundimages/warmrainy_Chennai.jpg';
import warmsunnyMexico from '../../assets/backgroundimages/warmsunnyMexico_City.jpg';



//output images
import men_Coldnorain from "../../assets/outfit/men_Coldnorain.jpeg";
import men_Warmrain from "../../assets/outfit/men_Warmrain.png";
import women_Snow from "../../assets/outfit/women_Snow.png";
import women_Warmnorain from "../../assets/outfit/women_Warmnorain.png";


function WeatherForm() {
  let APIKEY = "0eb8e1a2480f4da3aa533249230601";
  const [ location, setLocation ] = useState("London");
  const [ gender, setGender ] = useState("Male");
  const [ apiData, setApiData ]  = useState([]);
  const [ backgroundimg, setbackgroundimg] = useState(main_image);
  const [ outfitimg, setoutfitimg] = useState("");

console.log(location);
  //1. Get info from api based on location

  //2. Change the image of the weather condition and the putfit based on data from api
  function changeBackground(x) {}

  function changeOutfit(x) {}

  //3. If the location and gender change based on the user's input =, then the useEffect will change the background and outfit
  useEffect(() => {
    function GetWeatherData() {
        return axios.get(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}&aqi=no`)
        .then((element) => {
            let weather_data = element.data;
            // console.log(weather_data);
            setApiData(weather_data);
            console.log(weather_data);
        })
        .catch(error => console.log(error));
    }
    GetWeatherData();

  }, [location, gender]);

  useEffect(() => {
    function UpdateBackgroundImg() {
        if (location === "Toronto" || location === "toronto") {
            setbackgroundimg(coldovercast_Toronto);
        }
        else if (location === "Moscow" || location === "moscow") {
            setbackgroundimg(coldsnowy_Moscow);
        }
        else if (location === "Chennai" || location === "chennai") {
            setbackgroundimg(warmrainy_Chennai);
        }
        else if (location === "Mexico City" || location === "mexico city") {
            setbackgroundimg(warmsunnyMexico);
        }
    }

    function UpdateOutfitImg() {
        if (apiData.current?.temp_c <= 8 && gender === "male") {
            //toronto
            setoutfitimg(men_Coldnorain);
        }
        else if (apiData.current?.temp_c <= 8 && gender === "female") {
            //moscow
            setoutfitimg(women_Snow);
        }
        else if (apiData.current?.temp_c > 8 && gender === "male") {
            //chennai
            setoutfitimg(men_Warmrain);
        }
        else if (apiData.current?.temp_c > 8 && gender === "female") {
            //mexico
            setoutfitimg(women_Warmnorain);
        }
    }
    
    UpdateBackgroundImg();
    UpdateOutfitImg();

  }, [apiData])

  //form submit function
  const UpdateFormData = (event) => {
    event.preventDefault();
    let location_input = event.target.location_input.value;
    let gender_input = event.target.gender_input.value;
    // console.log("location: "+ event.target.location_input.value);
    // console.log("gender: "+ event.target.gender_input.value);
    setLocation(location_input);
    setGender(gender_input);
  }



  return (
    <>
      <form className="weather-form" onSubmit={UpdateFormData}>
        <label className="form__title">Location</label>
        <input type="text" className="form__input" name="location_input" placeholder="London"/>

        <label className="form__title">Gender</label>
        <input type="text" className="form__input" name="gender_input" placeholder="Male"/>

        <input type="submit" />
      </form>
      <div className="output_div">
        <img src={backgroundimg} className="background_img"/>
        <div className="temperature_block">
            <p>Temperature: {apiData.current?.temp_c} celcius</p>
            <p>Condition: {apiData.current?.condition.text}</p>
        </div>
        <div className="outfit_block">
            <img src={outfitimg} className="outfit_img" />
        </div>
      </div>

    </>
  );
}

export default WeatherForm;
