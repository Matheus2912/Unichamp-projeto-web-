//Imagem inicial do cabeçalho
document.getElementById('scroll-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//animação  
const myObserver = new IntersectionObserver( (entries) =>{
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
       entry.target.classList.add('show')
    } else{
        entry.target.classList.remove(('show'))
    }
   })
})

const elements = document.querySelectorAll('.quatro-img')


elements.forEach((elements) => myObserver.observe(elements))



$('.carousel').carousel({
   interval: 4000
 })

 const textElement = document.getElementById('typewriter');
 const phrases = [
     "vida.",
     "universidade.",
     "Trajetória.",
     "Carreira.",
     "Comunidade.",
     "Educação.",
     "Jornada.",
     "Experiência."
 ];
 let currentPhraseIndex = 0;
 let currentCharIndex = 0;

 const colors = ["yellow", "blue", "#FF1493", "green"]; 
let currentColorIndex = 0; 
 
 function typeWriter() {
     if (currentPhraseIndex < phrases.length) {
         if (currentCharIndex < phrases[currentPhraseIndex].length) {
             textElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
             currentCharIndex++;
             setTimeout(typeWriter, 100); // Ajusta a velocidade de digitação
         } else {
             setTimeout(eraseText, 3000); // Este comando faz aguardar 3 segundos antes de apagar o texto
         }
     }
 }
 
 function eraseText() {
     if (textElement.textContent.length > 0) {
         textElement.textContent = textElement.textContent.slice(0, -1);
         setTimeout(eraseText, 100); // Ajusta a velocidade de apagar o texto
     } else {
         currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
         currentCharIndex = 0;

         currentColorIndex = (currentColorIndex + 1) % colors.length; //(altera a cor)
        textElement.style.color = colors[currentColorIndex];

         setTimeout(typeWriter, 1000); // Aguarda 1 segundo antes de iniciar a próxima palavra ou frase
     }
 }
 
 setTimeout(typeWriter, 1000); // Começa após 1 segundo de carregamento da página
 
 // perguntas questionario

 
