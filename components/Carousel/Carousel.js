class Carousel {
    constructor(carouselElement, index) {
        this.carouselElement = carouselElement; 
        console.log("current carouselElement", this.carouselElement)

        this.index = index; 
        console.log("index of element", this.index)
    }
}

let carousel = document.querySelectorAll(".carousel");
console.log("carousel elements", carousel)

carousel.forEach((car, index) => {return new Carousel(car, index)})
console.log("carousel as instance of class Carousel", carousel); 

/*s If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
