import CharacterEntity from "./model/entitysInterface/CharacterEntity";
import CharacterRepository from "./repository/CharacterRepository";

interface responseCallback{
  (data:Array<String>):void
}
interface paramFunRender {
  n1:number,
  n2:String,
  n3?:CallableFunction
}
/**
 * Funcion de renderizado 2
 * @param param Objeto de configuracion de funcio
 */
let render2:Function = (param:paramFunRender) =>{}
/**
 *  Funcion de renrerizado 3
 * @param param Objeto de configuracion de funcio
 */
function render3(param:{n1:Number,n2:String ,n3?:responseCallback}){
  const retorno:Array<String> = []
  for (let index = 0; index < param.n1; index++) {
   retorno[index] = `en valor en ${index} es ${param.n2}`
  }
  if(param.n3){
    param.n3(retorno);
  }
}

async function render (param?:paramFunRender)  {
  const characterRepository:CharacterRepository = new CharacterRepository()
  const data = await characterRepository.getCharacters()
  let $body = document.querySelector('#contend') as HTMLElement
  console.log(data);

  data.map( (item: CharacterEntity,index:Number) =>{
    let node: HTMLElement = document.createElement('div');
    node.style.height = 'auto';
    node.style.width = '300px';
    node.style.margin = '1rem';

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
}
render()

render3({
  n1:5,
  n2:'hola',
  n3:(response)=>{
    response.map( item =>{
      console.log('====================================');
      console.log(item);
      console.log('====================================');
    })
  }
})




