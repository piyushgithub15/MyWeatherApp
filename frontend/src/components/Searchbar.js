import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { weatherdata } from '../api/weatherapi';
import WeatherCard from './WeatherCard';

export default function Searchbar() {
    
    
    
const [city, setcity] = useState("");
const [Ans, setAns] = useState();

const callapi = async ()=>{
    let ans={
       "city":city
       }
       try{
           let temp = await weatherdata(ans);
           setAns(temp.data)
       }
       catch(error){
            setAns({
              "error":"error"
            })
       }
         }




const handleChange = (e)=>{
    setcity(e.target.value)
}

const handleClick = ()=>{
    callapi();
}









  return (
    <>
    <Container style={{width:"60%"}}>
    <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Type Your City Here'
          onChange={handleChange}
        />
      </InputGroup>
      <div className='d-flex justify-content-center'>
        <Button variant="outline-info" onClick={handleClick}>Check Here</Button>
      </div>

        <br/>
      </Container>

      {Ans &&
        <WeatherCard data={Ans}/> 
      }
    </>
  )
}
