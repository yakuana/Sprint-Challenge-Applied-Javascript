class Carousel {
    constructor(carouselElement) {

        // assign this.carouselElement to the carouselElement DOM reference
        this.carouselElement = carouselElement; 
        // console.log("current carouselElement:", this.carouselElement)

        // get the left button 
        this.left = carouselElement.querySelector(".left-button"); 
        // console.log("left button:", this.left)

        // get the right button 
        this.right = carouselElement.querySelector(".right-button"); 
        // console.log("right button:", this.right)

        // get elements with class img from carouselElement
        this.images = carouselElement.querySelectorAll("img"); 
        // console.log("list of images:", this.images)

        // first image to show is last item in the list of images (this.images)
        this.index = this.images.length - 1; 
        // console.log("index of last element in this.images:", this.index); 

        // add class "on" to the last element in this.image by default 
        this.images[this.index].classList.add("on"); 
        // console.log("the last image with on class added:", this.images[this.index]);

        // displays the last element in this.image by default 
        this.images[this.index].style.display = "block"; 

        // if left arrow clicked, subtract one from this.index and call the selectLR() method 
        // console logs what was clicked and the current value of this.index 
        this.left.addEventListener("click", () => {--this.index; this.selectLR(); console.log("clicked LEFT", "current index is:", this.index)});

        // if right arrow clicked, add one to this.index and call the selectLR() method 
        // console logs what was clicked and the current value of this.index 
        this.right.addEventListener("click", () => {++this.index; this.selectLR(); console.log("clicked RIGHT","current index is:", this.index)}); 
    }

    // selectLR stands for select(ed) Left or Right (button)
    selectLR() {

        // removes the "on" class from every image 
        this.images.forEach((image) => {image.classList.remove("on"); image.style.display = "none"})

        // this.index is greater the length of this.images array - 1
        if (this.index > this.images.length - 1) {
            
            // adds the class "on" to the FIRST element in this.images 
            this.images[0].classList.add("on"); 
            // console.log("this.images[0] with class 'on'", this.images[0])

            // resets the index to 0
            this.index = 0; 
        
        // this.index is a negative number (least negative value possible is -1)
        } else if (this.index < 0) {

            // adds "on" class to the LAST element in this.images 
            this.images[this.images.length - 1].classList.add("on"); 
            // console.log("this.images[this.images.length - 1] with class 'on'", this.images[this.images.length - 1])

            // resets index to equal the length of this.images - 1 
            this.index = this.images.length - 1; 

        // this.index is within the bounds of this.images list 
        } else {

            // adds "on" class to the image at this.index 
            this.images[this.index].classList.add("on"); 
        }

        // loops through the images to find the image with the class "on" and displayes that image 
        this.images.forEach((image) => {if (image.classList[0] === "on") {
            image.style.display = "block"; 
        }})
    }
}

// gets the element with carousel class 
let carousel = document.querySelector(".carousel");
// console.log("carousel element", carousel)

// makes carousel and instance of the class Carousel 
new Carousel(carousel); 



/*s If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
