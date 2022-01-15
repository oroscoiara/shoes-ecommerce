import './App.css';
import  NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from './containers/CategoryListContainer/CategoryListContainer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function App(){
  return(
    <div className="App">
    <BrowserRouter>
      <NavBar />
    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route exact path="/categorias">
        <CategoryListContainer/>
      </Route>
      <Route exact path="/categorias/:catId">
        <ItemListContainer/>
      </Route>       
      <Route exact path="/items/:itemId">
        <ItemDetailContainer />
      </Route>

    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App