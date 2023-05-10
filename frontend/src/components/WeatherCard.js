import React from 'react'
import Container from 'react-bootstrap/Container';

export default function WeatherCard(props) {

  let Data = props.data;

  if(Data.error){
    return(
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-6 col-xl-4">
      <div className="card" style={{color:"#4B515D" , borderRadius:"35px"}}>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_qw8ewk7k.json"  background="transparent"  speed="1"  style={{width: "", height: "50%"}}  loop  autoplay></lottie-player>
      
      <h4 className='text-center error-heading'>Error Location Provided</h4>
      </div>
      </div>
      </div>
    );
  }


  let temperature;
  if(Data.main.temp){
    temperature = Math.round((Data.main.temp - 32) * 5 / 9);
  }
  

  return (
    <>
    {/* <section className="vh-100" style={{backgroundColor: "#4B515D"}}> */}
    <Container>
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card" style={{color:"#4B515D" , borderRadius:"35px"}}>
          <div className="card-body p-4">

            <div className="d-flex">
              <h6 className="flex-grow-1">{Data.name}</h6>
              <h6>{Data.sys.country}</h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{color:"#1C2331"}}> {temperature}°C </h6>
              <span className="small" style={{color:"#868B94"}}>{Data.weather[0].main}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{fontSize:"1rem"}}>
                <div><i className="fas fa-wind fa-fw" style={{color:"#868B94"}}></i> <span className="ms-1"> {Data.wind.speed} Mph
                  </span></div>
                 
                <div><i className="fa-solid fa-droplet" style={{color:"#868B94"}}></i><span className="ms-1"> {Data.main.humidity}% </span>
                </div>

                <div><i className="fa-solid fa-cloud" style={{color:"#868B94"}}></i> <span className="ms-1">{Data.clouds.all}%</span>
                </div>
              </div>
              <div>
                <img src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}@4x.png`}
                  width="100px" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
{/* </section> */}




</Container>

    </>
  )
}
