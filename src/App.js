import './App.css';
import  NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from './containers/CategoryListContainer/CategoryListContainer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext';



function App(){
  return(
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>

      <Route exact path="/categorias/:catId">
        <ItemListContainer/>
      </Route>       
      <Route exact path="/items/:itemId">
        <ItemDetailContainer />
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>


    </Switch>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App