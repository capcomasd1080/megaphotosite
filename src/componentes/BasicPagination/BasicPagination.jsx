import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState, useEffect} from 'react';
import axios from 'axios';
 import {FilterSearch}  from '../ItemListContainer/ItemListContainer'

export const BasicPagination = () =>{

  const [cproductos,setCProductos] = useState(0);
  const [limit,setLimit] = React.useState(25);
  const [numberpages,setNumberPages] = useState(1);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);



  let numberMod  = 0;
  let numberPage = 0;
  

  useEffect(() => {
    async function fetchData() {

       const response = await axios.get('http://localhost:7000/externalapi/count');
       //console.log(JSON.stringify (response.data) + "aaa");
       const jsonOBJ =  response.data;//JSON.parse(stringifySafe(response.data));
       //console.log(jsonOBJ["valSearch"]);
       setCProductos(  jsonOBJ["total_photos"]);
       
       if(cproductos> 0 ){
        numberPage = cproductos / limit;
        if(numberPage < 1 ){
           setNumberPages(1);
        }else{
          numberPage = cproductos / limit;
          numberMod = cproductos % limit;
          if(numberMod > 0){
            numberPage = numberPage + 1;
          }
          setNumberPages(numberPage);
        }
       
 
    }


    }
    fetchData();
   },[cproductos])


  return (
    <Stack spacing={2}>
         <Pagination count={numberpages}   color="primary" variant="outlined" shape="rounded" hidePrevButton hideNextButton />
    </Stack>
  );
}