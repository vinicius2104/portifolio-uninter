const aboutMe = document.querySelector('#about-me');
const aboutMeButton = document.querySelector('#about-me-button');
const formacao = document.querySelector('#formacoes');
const formacaoButton = document.querySelector('#formacao-button');
const experiencia = document.querySelector('#experiencias');
const experienciaButton = document.querySelector('#experiencia-button')

aboutMeButton.addEventListener('click',(e)=>{
    e.preventDefault();
    animateBorder (aboutMe)}
);
formacaoButton.addEventListener('click',(e)=>{e.preventDefault();
    animateBorder(formacao);});
experienciaButton.addEventListener('click',(e)=>{e.preventDefault();animateBorder(experiencia)})

function animateBorder(classList){
    classList.classList.add('animate-border');
setTimeout(()=>{
    classList.classList.remove('animate-border');
    fadeBorder(classList);

},4000)


}
function fadeBorder(classList){
    classList.classList.add('fadeBorder')
    setTimeout(()=>{classList.classList.remove('fadeBorder')},2000)
}