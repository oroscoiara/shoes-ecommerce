import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CategorySelector from './containers/CategorySelector';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Item from './components/Item/item';



function App(){
  return(
    <BrowserRouter>
      <NavBar />
    <Switch>
      <Route exact path="/">
      <ItemListContainer />
      </Route>
     
            <Route path = "/products" >
              <ItemListContainer/>
            </Route>
            <Route path="products/:catId" >
              <CategorySelector/>
            </Route>
            <Route path= "product/:itemId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/contacto">
                <h1>Contacto</h1>
            </Route>
            <Route path="/comocomprar">
                <h1>Como Comprar?</h1>
            </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
/* export default function App() {
    return(
      <BrowserRouter>
        <NavBar />
      
              <ItemListContainer />

      </BrowserRouter>
       <Route path="/products">
        <div><h2>Filtrar</h2>
        <CategorySelector />
          </div>

  );
} */