import React,{Component} from 'react';
import {Grid} from '@material-ui/core';
import ClassCompo from './component/ClassComponent';
import FunctCompo from './component/FunctionalComponent';
import ErroBoundary from './component/ErrorBoundary';
class AppChild extends Component{

    constructor(props){
        super(props);
        this.parentRefs = React.createRef();
    }


    state={
        subject:'React',
        mottoNickName:''
    }
    //pass function as a prpos
    compName = (val) => {
        this.setState({mottoNickName:val})
        // console.log("Checking function as a props....");
    }
    changeChildInputValue = (evt) =>{

        let inputVal = evt.target.value;
        this.parentRefs.current.value = inputVal;
        this.setState({
            subject:'React.Js'
        })
    }

render(){
    return(
      <Grid container>
         <Grid item xs={6} sm={6} md={6} lg={6} style={{border:'solid'}}> 
         <ErroBoundary>
             <ClassCompo sub={this.state.subject} checkCompName={this.compName} ref={this.parentRefs} />
             </ErroBoundary>
             </Grid> 
             <Grid item xs={6} sm={6} md={6} lg={6} style={{border:'solid'}}>
                 <FunctCompo nickName={this.state.mottoNickName}/>
             </Grid> 
             <Grid item>
                parentInput: <input ref={this.parentRefs} onChange={this.changeChildInputValue}></input>
             </Grid>
      </Grid>
    )
} 
}
export default AppChild;