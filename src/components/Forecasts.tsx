import React, { useState, Dispatch, SetStateAction } from 'react';
import '../index.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ForecastDays from './ForecastDays';


export default function Forecasts(
{setForecastTempCSS1, forecastTempCSS1, setForecastTempCSS2, forecastTempCSS2, setForecastTempCSS3, forecastTempCSS3, 
    setForecastTempCSS4, forecastTempCSS4, setForecastTempCSS5, forecastTempCSS5, forecastDateBuilder, forecastModal,
}:{
setForecastTempCSS1: Dispatch<SetStateAction<string>>, forecastTempCSS1: string, setForecastTempCSS2: Dispatch<SetStateAction<string>>, forecastTempCSS2: string,
setForecastTempCSS3: Dispatch<SetStateAction<string>>, forecastTempCSS3: string, setForecastTempCSS4: Dispatch<SetStateAction<string>>, forecastTempCSS4: string,
setForecastTempCSS5: Dispatch<SetStateAction<string>>, forecastTempCSS5: string, forecastDateBuilder: (param: any, param2: any) => any, forecastModal: (param: any) => any,
})


{


    return (
        <div className='forecast'>
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS1}
            forecastTempCSS={forecastTempCSS1}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS2}
            forecastTempCSS={forecastTempCSS2}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS3}
            forecastTempCSS={forecastTempCSS3}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS4}
            forecastTempCSS={forecastTempCSS4}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            />
            <ForecastDays 
            setForecastTempCSS={setForecastTempCSS5}
            forecastTempCSS={forecastTempCSS5}
            forecastDateBuilder={forecastDateBuilder}
            forecastModal={forecastModal}
            />
        </div>
    );

}