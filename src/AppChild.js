import React,{Component} from 'react';
import {Grid} from '@material-ui/core';
import ClassCompo from './component/ClassComponent';
import FunctCompo from './component/FunctionalComponent';
import ErroBoundary from './component/ErrorBoundary';
class AppChild extends Component{
    state={
        subject:'React',
        mottoNickName:''
    }
    //pass function as a prpos
    compName = (val) => {
        this.setState({mottoNickName:val})
        // console.log("Checking function as a props....");
    }
render(){
    return(
      <Grid container>
         <Grid item xs={6} sm={6} md={6} lg={6} style={{border:'solid'}}> 
         <ErroBoundary>
             <ClassCompo sub={this.state.subject} checkCompName={this.compName}/>
             </ErroBoundary>
             </Grid> 
             <Grid item xs={6} sm={6} md={6} lg={6} style={{border:'solid'}}>
                 <FunctCompo nickName={this.state.mottoNickName}/>
             </Grid> 
      </Grid>
    )
}
}
export default AppChild;