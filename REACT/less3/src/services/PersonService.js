export class PersonService {
    url = "https://swapi.dev/api/people/";

    getAllPeolpe() {
        return fetch(this.url).then(value => value.json());
    }
}