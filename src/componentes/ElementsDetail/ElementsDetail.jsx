import { React,useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { Elements } from '../Elements/Elements';
import axios from 'axios';



const stringifySafe = 
    require('json-stringify-safe');

export const ElementsDetail = ({datos}) =>{

    //const id =useParams().id;
    const { id } = useParams();

    const [itemlist,setItemList] = useState(undefined);
    
    useEffect (() => {
        async function fetchData() {
         
            const response = await axios.get(`${datos}/externalapi/photos/${id}`);
            
            if(response.status === 200) {
                const jsonOBJ = JSON.parse(stringifySafe(response.data));
                setItemList(  jsonOBJ["photo"]);
            }else{
                setItemList({});
            }
        
        }

        fetchData();
       
    },[])

    console.log(itemlist);

    return (<div>
        {<Elements itemlist={itemlist}  />}
    </div>);
}