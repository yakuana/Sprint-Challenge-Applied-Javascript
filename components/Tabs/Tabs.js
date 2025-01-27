class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log("current tab", this.tabElement);
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = tabElement.dataset.tab; 
    //console.log("data-tab value for current tab", this.tabData)


    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    if (this.tabData === "all") {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll(".card");
      // console.log("this.tabData === all:", this.tabData, "-cards value: ", this.cards); 

    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      // console.log("this.tabData !== all:", this.tabData, "-cards value: ", this.cards); 
    }


     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map((element) => {return new TabCard(element)});
    console.log("card as instances of TabCard class", this.cards)

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    // console.log("tabs", tabs); 
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove("active-tab"))
    // console.log("tabs without active-tab class", tabs)

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");
    // console.log("elements with card class", cards)

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display = "none"); 
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");
    // console.log("active tab", this.tabElement);
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());
    
    // console.log("this.cards after for each", this.cards)
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement; 
    // console.log("card element", this.cardElement); 
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

let tabs = document.querySelectorAll(".tab");
// console.log("all elements with tab class", tabs); 

tabs.forEach((tab) => {return new TabLink(tab)});
// console.log("tabs converted to TabLink instances", tabs); 