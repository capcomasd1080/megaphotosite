import {React,useEffect,useState} from 'react'
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



export const  SearchBox = () =>{

        const [textuser,setTextUser] = useState('');
        const [texcompany,setTextCompany] = useState('');

        const[textemail,setTextEmail] = useState('');
        const[textalbum,setTextAlbum] = useState('');
        const[textcity,setTextCity] = useState('');


        const [checkuser, setCheckUser] = useState(false);
        const [checkcompany, setCheckCompany ] = useState(false);
        const [checkemail, setCheckEmail ] = useState(false);
        const [checkalbum,setCheckAlbum] = useState(false);
        const [checkcity,setCheckCity] = useState(false);



        useEffect(()=>{
           
        },[textemail])

        useEffect(()=>{
           
        },[textalbum])

        useEffect(()=>{
              
        },[])

        useEffect(()=>{
           
        },[textuser])

        useEffect(()=>{
           
        },[texcompany])

        useEffect(()=>{
           
        },[textcity])

        const handleTextCity = (e) => {
            setTextCity(e.target.value);
        }

        const changeCity = (e,value) =>{
            
            setCheckCity(value);
            if(value === false){
                setTextCity("");
            }
        }





        const handleTextEmail = (e) => {
            setTextEmail(e.target.value);
        }

        const changeEmail = (e,value) =>{
            
            setCheckEmail(value);
            if(value === false){
                setTextEmail("");
            }
        }

        const handleTextAlbum = (e) => {
            setTextAlbum(e.target.value);
        }

        const changeAlbum = (e,value) =>{
            
            setCheckAlbum(value);
            if(value === false){
                setTextAlbum("");
            }
        }



        const handleTextCompany = (e) => {
            setTextCompany(e.target.value);
        }

        const changeCompany = (e,value) =>{
            
            setCheckCompany(value);
            if(value === false){
                setTextCompany("");
            }
        }


        const handleTextUser = (e) => {
            setTextUser(e.target.value);
        }

        const changeUser = (e,value) =>{
            
            setCheckUser(value);
            if(value === false){
                setTextUser("");
            }
        }
        const getParams = ()=> {
            let parmSend :string = "";
            
            if(checkuser=== true){
                parmSend = "?album.user.username=" + textuser;
            }
            if(checkcompany === true){
                if(parmSend==="")
                    parmSend = "?album.company.name=" + texcompany;
                else
                    parmSend += "&album.company.name=" + texcompany;
            }

            if(checkemail===true){
                if(parmSend==="")
                    parmSend = "?album.user.email=" + textemail;
                else
                    parmSend += "&album.user.email=" + textemail;
            }
            if(checkalbum===true){
                if(parmSend==="")
                    parmSend = "?album.title=" + textalbum;
                else
                    parmSend += "&album.title=" + textalbum;

            }
            if(checkcity===true){
                if(parmSend==="")
                    parmSend = "?album.user.address.city=" + textcity;
                else
                    parmSend += "&album.user.address.city=" + textcity;
            }

            if(parmSend==="")
                parmSend = "/";

            console.log(parmSend);

            window.location.href = parmSend;
        }


        return (<div>
                <Stack spacing={2} marginTop={2} >
                <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                <Grid xs={4} > 
                    <FormControlLabel control={<Checkbox   />}  label="User"  onChange = {changeUser}  />
                </Grid>
                <Grid xs={6}>
                    <TextField id="standard-basic" label="User"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        size="small"
                        onChange = {handleTextUser}
                    />
                    </Grid>
                    </Grid>
                </Stack>
                <Stack spacing={2} marginTop={2} >
                <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid xs={4} > 
                    <FormControlLabel control={<Checkbox  />}  onChange = {changeAlbum}  label="Album" />
                </Grid>
                <Grid xs={6}>
                    <TextField id="standard-basic" label="Album"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        size="small"
                        onChange={handleTextAlbum}
                    />
                    </Grid>
                    </Grid>
                </Stack>
                <Stack spacing={2} marginTop={2} >
                    <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid xs={4} > 
                    <FormControlLabel control={<Checkbox  />}  onChange = {changeCompany}   label="Company" />
                </Grid>
                <Grid xs={6}>
                    <TextField id="standard-basic" label="Company"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        size="small"

                        onChange={handleTextCompany}
                    />
                    </Grid>
                    </Grid>
                </Stack>
                <Stack spacing={2} marginTop={2} >
                <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid xs={4} > 
                    <FormControlLabel control={<Checkbox  />}   onChange={changeEmail} label="Email" />
                </Grid>
                <Grid xs={6}>
                    <TextField id="standard-basic" label="Email"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        size="small"
                        onChange={handleTextEmail}
                    />
                    </Grid>
                    </Grid>
                </Stack>
                <Stack spacing={2} marginTop={2} >
                <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                <Grid xs={4} > 
                    <FormControlLabel control={<Checkbox  />} onChange={changeCity}  label="City" />
                </Grid>
                <Grid xs={6}>
                    <TextField id="standard-basic" label="City"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        size="small"
                        onChange={handleTextCity}
                    />
                    </Grid>
                    </Grid>
                </Stack>

                <Stack spacing={2} marginTop={2} >
                <Grid container marginTop={5}  rowSpacing={2}  columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
                        <Grid xs={1} />
                        <Grid xs={5}>
                            <Button variant="contained" onClick ={getParams} //?album.user.username=abc&album.nombre.pp=2adsad"
                                      >
                                 Search
                            </Button>
                        </Grid>
                        <Grid xs={5}>
                        <Button variant="contained"   >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid xs={1}></Grid>
                </Grid>
                </Stack >
            </div>)
}