import React,{Component} from 'react';

class ErrorBoundary extends Component{

    state={
        errValue:false
    }



static getDerivedStateFromError(error){
    console.log('Error checking...');
    return {errValue:true}
    
}

componentDidCatch(error,errorInfo){
console.log(error);
console.log(errorInfo);
}

render(){

    if(this.state.errValue) {
        return(
            <>
            <h2>OOps!Something went wrong</h2>
            <h3>We have trouble processing your request</h3>
            </>
        )
    }
    else{
        return this.props.children;
            
    
    }
  
}
}
export default ErrorBoundary;