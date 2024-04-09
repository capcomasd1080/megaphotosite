
//import data from '../../datos.json';

import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ForwardIcon from '@mui/icons-material/Forward';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container'
//import {React, useEffect, useState} from  'react'; 
import { React,useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import {useParams} from "react-router-dom";



export const mensaje = () =>{

   
    return (<> console.log('aaa')';</>);

}
 export interface FilterSearch {
    limit: Number;
    offsetSearch : Number; 
    limitLast : Number;
    offsetSearchLast : Number; 
    urlparam : string ;
    urlsite: string;
  }

const stringifySafe = 
    require('json-stringify-safe');
   
  
   

export const ItemListContainerGRD : React.FC<FilterSearch> = (parameter) => {

//const DynamicComponent: React.FC<FilterSearch> = ( prop ) => {
       
    const [productos,setProductos] = useState({productos:[]});

   
    const {limit,offsetSearch,limitLast,offsetSearchLast,urlparam,urlsite} = parameter;

  

    const [limitgrd,setLimitGRD] = useState(limit);
    const [offsetgrd,setOffSetGRD] = useState(offsetSearchLast);
    
    //setProductos({productos:[]});
    useEffect(() => {

   
        async function fetchData() {
            let urlExtern :string = "";
            if(urlparam !== ""){
                console.log("aaaca aca ---");
                urlExtern = `&${urlparam}`;
            }
           const response = await axios.get(`${urlsite}/externalapi/photos?limit=${limit}&offset=${offsetSearch}${urlExtern}`);

           if(response.status === 200) {
                const jsonOBJ = JSON.parse(stringifySafe(response.data));
                setProductos(  jsonOBJ["valSearch"]);
            }else{
                setProductos([]);
            }
            
        }
           
            setOffSetGRD(offsetSearch);
            fetchData();
           
       },[offsetSearch])


        return  (
        <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
        {productos.length > 0 && 

            productos.map((producto) => {
               
                return (
                    
                    <Grid xs={4}   key={producto.id} >
                         <Card sx={{ maxWidth: '95%', maxHeight:'95%' }}>
                            <CardHeader
                                avatar={
                                <   Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {producto.id}
                                    </Avatar>
                                }
                                title = {producto.title}
                                
                            />
                            <CardActions >
                                <IconButton
                                    sx={{ color: 'Black' }}
                                    aria-label='Go'>
                                    <SendIcon fontSize="inherit"   
                                    onClick={ ()=>{ 
                                        
                                        window.location.href=`/item/${producto.id}`;
                                      }} />       
                                    
                                </IconButton>
                                
                            </CardActions>

                            <CardMedia
                                sx={{ height: 140 }}
                                image= {producto.url}
                                title={ producto.album.title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {producto.album.user.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {producto.album.user.email}
                                </Typography>
                            </CardContent>
                            
                         </Card>    
                        
                    </Grid>
                )
            })

          
        }
    </Grid>
        );
        
    
    };
      
     /* const createDynamicComponent = (component: React.ComponentType<any>, props: any) => {
        return React.createElement(component, props);
      };*/
      
      /*const App: React.FC = () => {
        const dynamicComponent = createDynamicComponent(DynamicComponent, { text: 'Hello, Dynamic World!' });
        return <div>{dynamicComponent}</div>;
      };
      
*/

//: React.FC = () =>


export const ItemListContainer : React.FC<FilterSearch> = (parameter) => {

 
    

    //const  = useParams();

    const search = window.location.search;
    const paramsURL = new URLSearchParams(search);

    const [paramsend,setParamSend] = useState('');

    console.log(paramsURL);

  

    console.log(`param send ${paramsend}a`);

    const [cproductos,setCProductos] = useState(1);
    const [numberpages,setNumberPages] = useState(1);
    const [currentpage,setCurrentPage] = useState(1);
    const [importedComponent, setImportedComponent] = useState(null);

    let numberPage = 0;
    let {limit,offsetSearch,urlsite} = parameter;
    const [offsetfind,setOffsetFind] = useState(offsetSearch);
    const [limitlast,setLimitLast] = useState(-1);
    const [offsetlast,setOffsetLast] = useState(-1);
    const [limitcount,setLimitCount] = useState(limit);
    const [limitini,setLimitIni] = useState(limit);




    useEffect(()=>{
        const loadURL = () =>{
                let sendParams : string = "";
                for (const [key, value] of paramsURL) {
                    console.log(key + " llave ");
                    if(sendParams !== ""){
                        sendParams += "&";
                    }

                    sendParams += key + "=" + value;
                }
                setParamSend(sendParams);
            }
            loadURL();
            //setOffsetLast(-1);
            //setOffsetFind(-1);
            //setLi
            //setOffsetLast] = useState(-1);
            //const [limitcount,setLimitCount] = useState(limit);

    },[paramsend])



    const handleChange = (event, value) => {
        setCurrentPage(value);
        setOffsetLast(offsetfind); //0
        setOffsetFind( (value - 1) * limitcount ); 
      };
    
      useEffect(() => {
        async function fetchDataT() {
    
           //const response = await axios.get('http://localhost:7000/externalapi/count');
           

           //console.log("url " + paramsend);
           const response = await axios.get(`${urlsite}/externalapi/photos?notlimit=1${(paramsend===""?"":"&" +paramsend )}`);

           if(response.status === 200) {
                const jsonOBJ = JSON.parse(stringifySafe(response.data));
                
            
           
           console.log(  jsonOBJ["total_photos"]);
          // const jsonOBJ =  response.data;
           setCProductos(  jsonOBJ["total_photos"]);
        
            if(paramsend !== ""){
                setOffsetFind (-1);//offsetfind

            }

           if(cproductos ===0){
              setNumberPages(1);
           }
           else if(cproductos> 0 ){
            numberPage = cproductos / limitcount;
            if(numberPage < 1 ){
               setNumberPages(1);
            }else{
              numberPage = cproductos / limitcount;
  
              if(numberPage<1){
                  setNumberPages(1);
              }
              else if(Number.isInteger(numberPage)){
                  setNumberPages(numberPage);
              
              }else{
                  setNumberPages( Math.trunc(numberPage) + 1 );
              }
            }
        }
    }else{
        console.log('error---');
        setNumberPages(1);
        return;
    }
    
        }
        
        fetchDataT();
       },[cproductos])


       

     useEffect(() => {

        if(offsetfind===-1)
         setOffsetFind(0);
        //console.log("last , limcount, iffsetfind,offsetlast "  , limitlast , limitcount ,offsetfind , offsetlast );
        const dynamicComponent = (
            <ItemListContainerGRD limit={limitcount}  limitlast={limitlast}  offsetSearch={offsetfind}  offsetSearchLast={offsetlast} urlparam ={paramsend}  urlsite={urlsite} />
        );   
        setImportedComponent(dynamicComponent);

     },[offsetfind])

    
     const limitChange = (event) =>{
        setCProductos(0);

        console.log("cargar filtro",limitlast , limitcount,limitini);
        
        setLimitLast(limitcount);
        setLimitCount(limitini);
        
        setOffsetLast(-1);
        setOffsetFind(0);
     }


    return <Container maxWidth="lg" >
         
        <Stack spacing={2} marginTop={2}>
            <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid xs={8} > 
                    <Pagination count={numberpages}  onChange={handleChange} color="primary" variant="outlined" shape="rounded" hidePrevButton hideNextButton />
                </Grid>
                <Grid xs={0.8}>
                    <TextField id="standard-basic" label="Limit"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        defaultValue ="25"
                        size="small"
                        onChange={ (e) => {  
                                console.log(e.target.valueAsNumber);
                                if(e.target.value > 25 ){ 
                                    e.target.value = 25;
                                }else if(e.target.value < 1) { 
                                    e.target.value = 1; 
                                } 
                                //setLimitLast(limitcount);

                                setLimitIni(e.target.value);
                                //console.log(limi);
                            }}
                        
                        

                         
                    />
                </Grid>
                <Grid xs={1}>
                    <IconButton   >
                        <ForwardIcon  onClick={limitChange} />
                    </IconButton>
                </Grid>
             </Grid>
        </Stack>
        {importedComponent}
    </Container>
   
}

