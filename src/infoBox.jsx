import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import "./infoBox.css"

export default function InfoBox({info}){
     let INIT_URL = "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3Ds://plus.unsplash.com/premium_photo-1670527200668-ad4b53a1aefb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D"
     let COLD_URL ="https://plus.unsplash.com/premium_photo-1675791930245-a94ea3edcaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
     let HOT_URL = "https://images.unsplash.com/photo-1557434440-d4d48e6578b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D"
     let RAIN_URL ="https://images.unsplash.com/photo-1552486289-7a93ac6d69a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55JTIwZGF5fGVufDB8fDB8fHww"
     
     return(
        <div className='InfoBox'>
           <div className='cardContainer'>
           <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {info.city }
                 {info.humidity > 80 ?<BeachAccessIcon /> : info.temp > 15 ? <WbSunnyIcon />: <AcUnitIcon />}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>Temperature - {info.temp}&deg;C</p>
                  <p>Humidity - {info.humidity}</p>
                  <p>Pressure - {info.pressure}</p>
                  <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}