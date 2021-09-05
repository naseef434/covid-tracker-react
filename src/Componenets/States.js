import { Component } from "react";
import axios from "axios";
import {Container,Row,Col,Accordion,Table} from 'react-bootstrap';


class States extends Component{
    constructor(props){
        super(props)
        this.state = {
            covidData : {},
        }
    }
  
    componentDidMount(){
        axios.get("https://data.covid19india.org/state_district_wise.json")
        .then( (response) => {
            this.setState( {covidData : response.data} )
        } )
    }
    render(){
    
        let keys = Object.keys(this.state.covidData) 
    
        return(
            <>
            <br></br>
                <Container>
                    <Row>
                        <Col lg={12}>

                       { keys.map((index,key)=>{
                           let district = this.state.covidData[index].districtData;
                           let districKeys = Object.keys(district)
                           
                           
                           let total_active = 0;
                           let total_confirmed = 0;
                           let total_death = 0;
                           let total_recovery = 0;
                            let district_list = [];
                           for (let i in district){
                               total_active =+  district[i].active;
                               total_confirmed =+ district[i].confirmed;
                               total_death =+ district[i].death;
                               total_recovery =+ district[i].recovery;
                               let ob = district[i];
                               ob["district_name"] =i;
                               district_list.push(ob)

                           }
                           console.log(district_list)

                           return (
                            <Accordion >
                            <Accordion.Item eventKey={key}>
                                <Accordion.Header>{index}</Accordion.Header>
                                <Accordion.Body>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                      
                                        <th>Distric</th>
                                        <th>Confirmed</th>
                                        <th>Active</th>
                                        <th>Recovered</th>
                                        <th>Deaths</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { district_list.map((item,key)=>{
                                            return (
                                                <tr>
                                                    <td>{item.district_name}</td>
                                                    <td>{item.confirmed}</td>
                                                    <td>{item.active}</td>
                                                    <td>{item.recovered}</td>
                                                    <td>{item.deceased}</td>
                                                </tr>
                                            )
                                        }) }
                                    </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                           )
                       }) }

                        {/* <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ggg</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion> */}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}
export default States;