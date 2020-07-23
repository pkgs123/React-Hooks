import React,{Component} from 'react';
class Unmount extends Component{


componentWillUnmount(){
    console.log('Unmounting is calling...');
}

    render(){
        return(
            <></>
        )
    }
}
export default Unmount;