import { Component } from "react";
import {Row,Col,Card,Button} from 'react-bootstrap';
import States from "./States";


class India extends Component{
    constructor(props){
        super(props)
       
        
    }
 

    render(){
        return(
           <> 
           <Row>
               <Col md={12}>
                   <img src={"https://www.countryflags.io/IN/shiny/64.png"} />
                   <h3>India</h3>
               </Col>
           </Row>
            <Row>
                <Col md={3}>
                        <Card style={{ width: '18rem' }} border="info" text="secondary text-center">
                            <Card.Body>
                                <Card.Title>Total Case</Card.Title>
                                <Card.Text>
                                    <h3>109879</h3>
                                    [ Today : 25]
                                </Card.Text>    
                            </Card.Body>
                        </Card>
                </Col>

                <Col md={3}>
                <Card style={{ width: '18rem' }} border="warning" text="secondary text-center">
                            <Card.Body>
                                <Card.Title>Active Case</Card.Title>
                                <Card.Text>
                                    <h3>109879</h3>
                                    [ Today : 25]
                                </Card.Text>    
                            </Card.Body>
                        </Card>
                </Col>

                <Col md={3}>
                <Card style={{ width: '18rem' }} border="success" text="secondary text-center">
                            <Card.Body>
                                <Card.Title>Recovered</Card.Title>
                                <Card.Text>
                                    <h3>109879</h3>
                                    [ Today : 25]
                                </Card.Text>    
                            </Card.Body>
                        </Card>
                </Col>

                <Col md={3}>
                <Card style={{ width: '18rem' }} border="danger" text="secondary text-center">
                            <Card.Body>
                                <Card.Title>Total Death</Card.Title>
                                <Card.Text>
                                    <h3>109879</h3>
                                    [ Today : 25]
                                </Card.Text>    
                            </Card.Body>
                        </Card>
                </Col>
                
           </Row>
           <Row>
               <Col md={12}>
                   <States />
               </Col>
           </Row>
           </>
        )
    }

}
export default India;