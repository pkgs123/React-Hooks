import React,{Component} from 'react';
import FooterComp from './FooterComponent';
import{Button,List,ListItem,ListItemText,Divider,Table,TableBody,TableCell,TableHead,TableRow,Hidden,Grid} from '@material-ui/core';
import Unmount from './Unmount';
import Axios from 'axios';
class classComp extends Component{
    constructor(props){
        console.log("Constructor");
        super(props);
        this.state={
            name:'chotu',
            name1:'guddan',
            kyahua:'',
            switch:true,
            respData:[],
            tableHeadData:[{
                postId:'Post-ID',
                name:'Name',
                email:'Email'
            }]
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
        
        let url1 ='https://jsonplaceholder.typicode.com/posts';
        let url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

        let data={
            userId: 999
                 }
        //GET
      Axios.get(url,{
            headers:{authorization:'abc'},
            params:{userId:1}
             })
             .then((response)=>{
                console.log(response);
                this.setState({respData:response.data});
                console.log("StateData",this.state.respData);
             })
             .catch((error)=>{
                console.log(error);
             })



        //POST
        Axios.post(url,data,{
            headers:{'Content-type':'application/json'},
            params:{userId:1}
             });

        //Create method
      let axiosCreate =   Axios.create({baseURL:url,headers:{'Content-type':'application/json'}})

      axiosCreate.get("?userid=1")

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
       <Hidden smUp>

      
       <List >
        {this.state.respData.map((data) =>{
            return <><ListItem>
                    <ListItemText primary={data.title} secondary={data.body}>
                    {/* {data.title}-{data.body} */}
                    </ListItemText>
            </ListItem><Divider></Divider></>
        })}
       </List>
       </Hidden>
       <Hidden xsDown>
               <Table>
           <TableHead>
               {this.state.tableHeadData.map((headData) =>{
                  return <>
                  <TableRow>
                    <TableCell>
                        {headData.postId}
                    </TableCell>
                    <TableCell>
                        {headData.name}
                    </TableCell>
                    <TableCell>
                        {headData.email}
                    </TableCell>
                  </TableRow>
                  </>
               })}
        
           </TableHead>
           <TableBody>
          {this.state.respData.map((data)=>{
              return <>
                <TableRow>
                <TableCell>
                {data.postId}
               </TableCell>
               <TableCell>
                {data.name}
               </TableCell>
              
               <TableCell>
                {data.email}
               </TableCell>
                </TableRow>

              </>
          })}
          </TableBody>
       </Table>
               {/* </Grid>
           </Grid> */}
      
       </Hidden>



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