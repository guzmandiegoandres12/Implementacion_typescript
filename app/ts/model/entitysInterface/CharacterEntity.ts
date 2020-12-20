import LocationEntity from "./LocationEntity";

interface CharacterEntity{
  created: Date | undefined;
  episode: any;
  id: Number | undefined;
  image: String | undefined;
  location: LocationEntity;
  name: String | undefined;
  origin: any ;
  species: String | undefined; 
  status: String | undefined;
  type: String | undefined
  url: String |undefined
}

export default CharacterEntity;