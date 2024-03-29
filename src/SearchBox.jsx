import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updatedInfo}){
     
    let [city , setCity] = useState("")
    let [error , setError] = useState(false)
    let API_URL =  import.meta.env.VITE_API_URL;
    let API_KEY =  import.meta.env.VITE_API_KEY
   
    let getWeather = async () => {
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
              city: city,
              temp : jsonResponse.main.temp,
              humidity : jsonResponse.main.humidity,
              pressure : jsonResponse.main.pressure,
              feelslike : jsonResponse.main.feels_like,
              weather : jsonResponse.weather[0].description
      
            }
            console.log(result)
            return result;
        } catch( err){
            throw err
        } 
         
    }

    let handleChange = (event) => {
     setCity(event.target.value)
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("")
            let newInfo =  await getWeather();
            updatedInfo(newInfo)
        } catch(err){
            setError("No such place in our API")
        }
    
    }

     return( 
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained"  type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place exist!</p>}
            </form>
           
        </div>
     )
}