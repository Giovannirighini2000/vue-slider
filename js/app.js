// // COLLEGAMENTO MONTAGGIO VUE 
const{createApp} = Vue
console.log('indice di partenza e zero')
createApp({
    data(){
        return{
            // INDICE DI CONTROLLO SLIDES
            currentSlideIndex: 0,
            
            // LA MIA ARRAY DI OGGETTI 
            images: [
                {
                  image: './img/01.webp',
                  title: 'Marvel\'\s Spiderman Miles Morale',
                  text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                  image: './img/02.webp',
                  title: 'Ratchet & Clank: Rift Apart',
                  text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                  image: './img/03.webp',
                  title: 'Fortnite',
                  text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                  image: './img/04.webp',
                  title: 'Stray',
                  text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                  image: './img/05.webp',
                  title: "Marvel's Avengers",
                  text: 'Marvel\'\s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
                
              ]
        }
    },
    // METHODS RACCHIUDE LE NOSTRE FUNZIONI 
    
    methods: {
        
        nextSlide() {
          if (this.currentSlideIndex < this.images.length - 1) {
            this.currentSlideIndex++
            console.log('indice-slide=',this.currentSlideIndex)
          } else {
            this.currentSlideIndex = 0
            console.log('indice-slide=',this.currentSlideIndex)
          }
        },
        prevSlide() {
          if (this.currentSlideIndex > 0) {
            this.currentSlideIndex--
            console.log('indice-slide=',this.currentSlideIndex)
          } else {
            this.currentSlideIndex = this.images.length - 1
            console.log('indice-slide=',this.currentSlideIndex)
          }
        }
      }
    //   COLLEMENTO DI VUE IN HTML CON ID TAG
}).mount('#app')