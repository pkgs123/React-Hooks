import React,{Component} from 'react';
import FooterComp from './FooterComponent';
import{Button} from '@material-ui/core';
class classComp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'chotu',
            name1:'guddan'
        };
        this.props.checkCompName(this.state.name1);
       // this.classFunCall = this.classFunCall.bind(this);
    }

    classFunCall = () =>{
        this.setState({name:this.state.name1})
 }
  
render(){
    return(
        <>
        Hi {this.state.name}, your real name is Prashant Welcome to Class Component. your {this.props.sub} teacher is so intelligent.
        <FooterComp>
           <Button color='secondary' onClick={this.classFunCall}>ClassButton</Button>
            </FooterComp>
        </>
    )
}
}
export default classComp;