

//import {Usuario} from './componentes/Usuario/Usuario';
//import {Card} from './componentes/Card/Card';
//import {Counter} from './componentes/Counter/Counter'
//import {Text} from './componentes/Text/Text'
//import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
//import { Pokemon } from  './componentes/Pokemon/Pokemon';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import './main.css'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
//import { Button, Stack } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Elements} from './componentes/Elements/Elements'
import {ElementsDetail} from './componentes/ElementsDetail/ElementsDetail'
import { SearchBox } from './componentes/SearchBox/SearchBox';


function App() {

  const URL :string   = "http://localhost:7000"

  return (
   
     /* <Usuario nombre="Carlos"  edad="41" nacionalidad="Guatemalteco"/>
        <Card />
        <Counter />
        <Text />
        <ItemListContainer />
        <Pokemon />*/

        /*<Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
        </Stack>;*/

    <div className="App">
      <BrowserRouter>
        <NavBar />
        
       <Routes>
           <Route  path="/" element={<ItemListContainer offsetSearch="0" limit ="25" urlsite={URL}  />}/>
           <Route path="/item/:id" element = {<ElementsDetail  datos={URL} />} />
      </Routes>
        
       


      </BrowserRouter>



    </div>
    
  );
}



export default App;
