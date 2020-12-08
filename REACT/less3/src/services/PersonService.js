export class PersonService{
    url="https://swapi.dev/api/people/";
    async getAllPeolpe(){
        return await fetch(this.url).then(value => value.json().then(value => value.results));
    }
}