import { React,useState, useEffect} from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

//
//export const ItemListContainer : React.FC<FilterSearch> = (parameter) => { 
export const Elements = ({itemlist}) => {  

    
    console.log(itemlist);


    return (
        itemlist &&(
            <Container maxWidth="lg" >
         
            <Stack spacing={2} marginTop={2}>
            <Grid  container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }} >
            <Grid xs={10}>
            <Card   sx={{ maxWidth: '95%', maxHeight:'95%'  }}>
                <CardMedia  
                    sx={{ height: 300  }}
                    image= {itemlist.url}
                    title={ itemlist.album.title}
                />
                <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {itemlist.url}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Album : {itemlist.album.title} </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Username :  {itemlist.album.user.username}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    City :  {itemlist.album.user.address.city} -{itemlist.album.user.address.zipcode} 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Company :  {itemlist.album.company.name}  
                                </Typography>
                                

                            </CardContent>
               
            </Card></Grid></Grid></Stack></Container> ));
}
