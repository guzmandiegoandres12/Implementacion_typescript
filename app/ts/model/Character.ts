import CharacterEntity from "./entitysInterface/CharacterEntity";

class Character{
  private created: Date | undefined;
  private episode: any;
  private id: Number | undefined;
  private image: String | undefined;
  private location: any;
  private name: String | undefined;
  private origin: any;
  private species: String | undefined;
  private status: String | undefined;
  private type: String | undefined
  private url: String | undefined

  constructor(init : CharacterEntity){
    Object.assign(this, { ... init });
  }

  getName():String{
    return this.name || '';
  }
  getStatus(): String{
    return this.status || '' ;
  }
}

export default Character;