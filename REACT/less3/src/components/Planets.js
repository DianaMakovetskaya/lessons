import React, {Component} from 'react';
import {PersonService} from "../services/PersonService";
import {PlanetService} from "../services/PlanetService";
import PlanetComponent from "./PlanetComponent";

class Planets extends Component {
    state={planets:[]}
    planetService=new PlanetService();
    async componentDidMount() {
        let value=await this.planetService.getAllPlanets();
        this.setState({planets:value})
    }

    render() {
        let {planets}=this.state;
        return (
            <div>
                {
                 planets.map((value, index) => <PlanetComponent planet={value} key={index}/>)
                }
            </div>
        );
    }
}

export default Planets;