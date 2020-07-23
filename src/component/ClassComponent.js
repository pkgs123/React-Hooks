import React,{Component} from 'react';
import FooterComp from './FooterComponent';
import{Button} from '@material-ui/core';
import Unmount from './Unmount';
class classComp extends Component{
    constructor(props){
        console.log("Constructor");
        super(props);
        this.state={
            name:'chotu',
            name1:'guddan',
            kyahua:'',
            switch:true
        };
        this.props.checkCompName(this.state.name1);
       // this.classFunCall = this.classFunCall.bind(this);
    }

    // till 16.3 for new version it is depricated
    // UNSAFE_componentWillReceiveProps(){

    // }
    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps");
        return {
            kyahua:props.sub
        }
    }
    componentDidMount(){
        console.log('ComponentDidMount');
    }

    classFunCall = () =>{
        this.setState({name:this.state.name1,switch:!this.state.switch})
 }
  
render(){
    console.log("render");
    return(
        <>
       {this.state.switch ?  `Hi ${this.state.name}, your real name is Prashant Welcome to Class Component. your ${this.state.bolna} teacher is so intelligent.`
       :<Unmount></Unmount>}
       
        <FooterComp>
           <Button color='secondary' onClick={this.classFunCall}>ClassButton</Button>
            </FooterComp>
        </>
    )
}

componentWillUnmount(){
    console.log('Releasing the component as per need');
}

//Update Phase
shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    if(this.state.name !== 'Priyanka') return true;
}

getSnapshotBeforeUpdate(){
return {"printkar":console.log('getSnapshotBeforeUpdate')};
//to store the logs for your previous state,props and any value.
}
componentDidUpdate(){
    console.log('ComponentDidUpdate');
}

}
export default classComp;