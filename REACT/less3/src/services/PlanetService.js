export class PlanetService{
    url="https://swapi.dev/api/planets/";
    async getAllPlanets(){
        return await fetch(this.url).then(value => value.json().then(value => value.results));
    }
}