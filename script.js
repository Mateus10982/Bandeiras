//https://restcountries.com/v2/all
const http='https://restcountries.com/v2/all';
var repositoriosPaises=[];
var datalista=document.getElementById("lista1");
var envio=document.getElementById("enviar");
var tela=document.getElementById("tela");
paiss(http);
/////________________________________________________
//eventos
document.addEventListener("keydown",function(eve){
    if(eve.key == 'Enter'){ proc(repositoriosPaises); }});
envio.addEventListener("click",function(){proc(repositoriosPaises);});
/////________________________________________________
//funções__________________________________
function paiss(http){
    fetch(http).then(res => res.json()).then(pais=>{
        pais.forEach(elementoPais => {
            let paises=new Object();
            paises.Nome= elementoPais.name;
            paises.NomeNativo=elementoPais.nativeName;
            paises.TraducaoNome=elementoPais.translations.pt;
            paises.linguagens=elementoPais.languages[0].name;
            paises.sigla3= elementoPais.alpha3Code;
            paises.sigla2= elementoPais.alpha2Code;
            paises.capital= elementoPais.capital;
            paises.bandeira=elementoPais.flags.png;
           repositoriosPaises.push(paises);
        });
        lista();
    });}
function lista(){
for(let i=0; i< repositoriosPaises.length;++i){
    let option=document.createElement('option');
    option.value=`${repositoriosPaises[i].Nome}`;
    option.innerHTML=`${repositoriosPaises[i].sigla},${repositoriosPaises[i].linguagens},${repositoriosPaises[i].TraducaoNome}`;
    datalista.appendChild(option);} }
function proc(repositoriosPaises){
    var procura=document.getElementById("procura");
    for(let i=0; i< repositoriosPaises.length;++i){
        if(procura.value == repositoriosPaises[i].Nome){
            tela.innerHTML=`<img src="${repositoriosPaises[i].bandeira}" id="Bandeira" alt="Bandeira do pais"><table>
            <tr><td>Nome :</td> <td class="info">${repositoriosPaises[i].Nome}</td> </tr>  <tr> <td>Nome nativo:</td><td class="info">${repositoriosPaises[i].NomeNativo}</td></tr> <tr> <td>Tradução do nome para pt-br:</td><td class="info">${repositoriosPaises[i].TraducaoNome}</td> </tr><tr> <td> Sigla de 2 letras:</td><td class="info">${repositoriosPaises[i].sigla2}</td> </tr> <tr>   <td>Sigla de 3 letras:</td>  <td class="info">${repositoriosPaises[i].sigla3}</td> </tr> </table> <table id="table2">     <tr>         <td>Capital :</td>  <td class="info">${repositoriosPaises[i].capital}</td>      </tr>      <tr> <td>Linguagem:</td>    <td class="info">${repositoriosPaises[i].linguagens}</td>  </tr> </table> `;
            break;
        }
    }
}
/////________________________________________________
/*<img src="" id="Bandeira" alt="Bandeira do pais"><table>
        <tr><td>Nome :</td> <td class="info">Brasil</td> </tr>  <tr> <td>Nome nativo:</td><td class="info">Brasil</td></tr> <tr> <td>Tradução do nome :</td><td class="info">Braa</td> </tr><tr> <td> Sigla de 2 letras:</td><td class="info">BR</td> </tr> <tr>   <td>Sigla de 3 letras:</td>  <td class="info">BRA</td> </tr> </table> <table id="table2">     <tr>         <td>Capital :</td>          <td class="info">Brasilia</td>      </tr>      <tr> <td>Linguagem :</td>    <td class="info">Português</td>  </tr> </table> */
