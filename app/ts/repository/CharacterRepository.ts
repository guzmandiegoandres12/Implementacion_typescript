import CharacterEntity from "../model/entitysInterface/CharacterEntity";

const axios = require('axios');
class CharacterRepository{
  private urlBase:string;
  
  constructor(){
    this.urlBase = 'https://rickandmortyapi.com/api';
  }

  async getCharacters(){
    const query = await axios.get(`${this.urlBase}/character`)
    const response: Array<CharacterEntity> =  query.data.results;
    return response
  }

}
export default CharacterRepository;
