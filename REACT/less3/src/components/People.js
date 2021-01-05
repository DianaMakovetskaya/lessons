import React, {Component} from 'react';
import {PersonService} from "../services/PersonService";
import PersonComponent from "./PersonComponent";

class People extends Component {
    personService = new PersonService();

    state = {
        people: []
    }

    async componentDidMount() {
        let {results} = await this.personService.getAllPeolpe();

        this.setState({people: results})
    }

    render() {
        const {people} = this.state;
        return (
            <div>
                {

                    people && people.map((value, index) => <PersonComponent person={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default People;