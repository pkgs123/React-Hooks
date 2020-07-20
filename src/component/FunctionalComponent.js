import React,{Component,useState,useEffect} from 'react';
import FooterComp from './FooterComponent';
import {Button} from '@material-ui/core';
function FunctComponent(props){

  //Use of Hook
const[weather,setWeather]  = useState('Summer');
const[anything,setAnything] = useState('nothing');

const checkWeatherReport = (evt) =>{
 setWeather('Winter')
}
//It takes two parameters 1st--> callback (componentDid Mount) and 2nd parameter []---->componentDid Update
useEffect(()=>{
setAnything('everything');
if(weather === 'Winter')setAnything('something');
},[weather])

return(
    <>
    Hi {props.nickName}, your real name is Priyanka and  Welcome to Functional Component. 
    Hey {props.nickName}, how is the {weather} of Adarsh Nagar,Gali No.4(New Delhi),India.
    <h1>Hey do you know prashant is {anything} and {props.nickName} is {anything}.</h1>

    <Button onClick={checkWeatherReport}>Check weather</Button>
    <FooterComp>
      <Button color='secondary'> FunctionButton</Button>
        </FooterComp>
    </>
)
}
export default FunctComponent;
