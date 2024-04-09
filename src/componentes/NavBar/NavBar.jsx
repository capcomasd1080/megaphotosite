import { Link } from "react-router-dom";
import * as React from 'react';
import './NavBar.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { SearchBox } from "../SearchBox/SearchBox";
import Button from '@mui/material/Button';

/* MODAL Object */
const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  
const NavBar = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    
    return (
        <>
        <nav className="navbar">
            <Link to="/"  className="logo" ><h1> Prueba Page</h1></Link>
            <ul > 
                <li><Link className="menu-link"  to ="/">Inicio</Link></li>
            </ul> 
            <Button onClick={handleOpen}>Filter</Button>
        </nav>
        <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400  }}>
            <SearchBox />
        </Box>
      </Modal>
        </>
    )

}

export default NavBar;