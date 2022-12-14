import '../index.css';
import '../App.css';


export default function BlankSearch()
{


    return (
        <div>
            <h2 className='blankH2'>Enter a city above to begin</h2>
            <div className='location-box'>
                <div className='location'>
                    __________, __________
                </div>
                <div className='date'>
                __________ __ __________ ____
                </div>
            </div>
            <div className="weather-box">
                <button className='modal-button'>
                    <div className='temp'>
                        __°C | __°F
                    </div>
                </button>
                <div className='weather-condition'>
                    __________
                </div>
            </div>
            <div className='forecast'>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
                <div className='forecast-day'>
                    <button className='modal-button'>
                        <div className='date-forecast'>
                            __________ __ __________ ____
                                <div className='forecast-temp'>
                                    Forecast
                                </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}