import React,{Component} from 'react';
import FooterComp from './FooterComponent';
import {Button} from '@material-ui/core';
function FunctComponent(props){
return(
    <>
    Hi {props.nickName}, your real name is Priyanka and  Welcome to Functional Component. 
    <FooterComp>
      <Button color='secondary'> FunctionButton</Button>
        </FooterComp>
    </>
)
}
export default FunctComponent;
