const { createApp } = Vue;

createApp({
    data() {
        return {
            activeImage: 0,
            images: [
                'img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',
            ],

        };
    },
    methods: {
        nextClick() {
            if (this.activeImage > this.images.length -2) {
                this.activeImage = 0;
            } else {
                this.activeImage++;
                
            }
        }
    }
}).mount('#app')