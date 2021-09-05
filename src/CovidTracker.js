import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import India from './Componenets/India';
import World from './Componenets/World';
import Header from './Componenets/Header';


class CovidTracker extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container fluid>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={India}></Route>
                        <Route  path="/India" component={India}></Route>
                        <Route  path="/World" component={World}></Route>
                        <Route  component={India}></Route>
                    </Switch>
                </Router>
            </Container>
            
        )
    }
}
export default CovidTracker;