import React, {Component} from 'react';
import {PersonService} from "../services/PersonService";
import PersonComponent from "./PersonComponent";

class People extends Component {
    state={people:[]}
    personService=new PersonService();
    async componentDidMount() {
        let value=await this.personService.getAllPeolpe();
        this.setState({people:value})
    }

    render() {
        return (
            <div>
                {

                   this.state.people.map((value, index) => <PersonComponent person={value} key={index}/>)
                }
            </div>
        );
    }
}

export default People;