import jQuery from "jquery";
import {db} from "./../backend/app_backend";



export const getWeatherForecast = () =>{
    jQuery(($)=>{
        $.noConflict();
        const $API_KEY = "f0a8dcd5480b8480451dd898d74d5e8d";
        $.ajax({
            url:`https://api.openweathermap.org/data/2.5/forecast?q=Nigeria&appid=${$API_KEY}`,
            success: (result, status, xhr) =>{
                if(result.cod == 200)
                {
                   //console.log(result);
                   return result;
                }

               
            },
    

            error: (xhr, status, error) =>{
                console.log(error);
            }
        });
    
    
    })
    
}
