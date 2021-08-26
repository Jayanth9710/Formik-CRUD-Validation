import './App.css';
import Sidebar from "./Sidebar";
import TopHeader from "./Topbar";
import Product from "./Products";
import Dashboard from './Dashboard';
import ProductCreate from './CreateProduct'
import ProductEdit from './EditProduct';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div id="wrapper">
          <Sidebar key="side53"></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <TopHeader key="top21"></TopHeader>
            <div className="container-fluid">
            <Switch>
                
            <Route path="/" component={Dashboard} exact={true} />
                <Route path="/product" component={Product} exact={true} />
                <Route path="/create-product" component={ProductCreate} exact={true} />
                <Route path="/product/edit/:id" component={ProductEdit} exact={true} />

                
                
              </Switch>
            </div>
            </div>
          </div>

        </div>
      </Router>
      
    </div>
  );
}

export default App;
