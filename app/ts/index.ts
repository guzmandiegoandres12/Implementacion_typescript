import CharacterEntity from "./model/entitysInterface/CharacterEntity";
import CharacterRepository from "./repository/CharacterRepository";

(async () => {
  const characterRepository:CharacterRepository = new CharacterRepository()
  const data = await characterRepository.getCharacters()
  let $body = document.querySelector('#contend') as HTMLElement
  console.log(data);

  data.map( (item: CharacterEntity,index:Number) =>{
    console.log('====================================');
    console.log('Estado:',item.status);
    console.log('Locaciones:',item.location.name,item.location.url);
    console.log('====================================');
    let node: HTMLElement = document.createElement('div');
    node.style.height = 'auto';
    node.style.width = '300px';
    node.style.margin = '1rem';

  //node.style.justifyContent='aº'
    node.innerHTML =  `
    <div class="card" style="width:100%; margin:0 .8rem">
      <img class="card-img-top" src="holder.js/100x180/" alt="">
      <div class="card-body d-flex flex-column align-items-center">
        <h4 class="card-title">${item.name}</h4>
        <p class="card-text">${item.location.name}</p>
        <img src="${item.image}" style="width:80%">
      </div>
    </div>
    `;
    $body.append(node)
  })
})()