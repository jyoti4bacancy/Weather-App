const request=require("request")
const geocode=require('./utils/geocodes.js')
const forecast=require('./utils/forecasts.js')
// const url="http://api.weatherstack.com/current?access_key=b2196bb787c329707e17aca9542e9245&query=New%20York&units=f"
// // in query we can also pass longitude and latitude. query=123445,-345666
// //req method sntax=   
// //request({object with key and value pair},callback function)
// // callback function is to handle when response come back 
// //if it contains error then error executed else response is managed.
// request({url:url,json:true},(error,response)=>{
//     if(error)
//      console.log("unable to connect weather service")
//      else if(response.body.error)
//      console.log("unable to find location!")
//      else
//     console.log(response.body.current.weather_descriptions[0]+". It is a currently "+response.body.current.temperature+" degree out. It feels like "+response.body.current.feelslike+" degree out.")

// })

// const geopoint='https://api.mapbox.com/geocoding/v5/mapbox.places/india.json?access_token=pk.eyJ1Ijoic2hhcm1hanlvdGk0Njk5IiwiYSI6ImNraTl4YXQ2cDBqdjEyeXJvbWh3b3dnaWMifQ.5LrdoZIttDLH0cQdWwJADA&limit=1'
// request({url:geopoint,json:true},(error,res)=>{
//     if(error)
//     console.log("unable to connect weather service")
//     else if(res.body.features.length===0)
//     console.log("unable to find location!")
//     else
//     {
//         const longitude=res.body.features[0].center[0];
//         const latitude=res.body.features[0].center[1];
//         console.log("your location longitude = "+longitude+" and latitude = "+latitude);
        
//     }
// })

const address=process.argv[2]//it gives cmd line third argument.
if(!address){
    console.log('location not provided!')
}
else{
geocode(address,(err,{latitude,longitude,location}={})=>{
    if(err){
        return console.log('error :',err)
    }
    forecast(latitude,longitude,(err,forecastdata)=>{
        if(err){
            return console.log('error :',err)
        }
          console.log(location)
           console.log(forecastdata)
    })
})
}