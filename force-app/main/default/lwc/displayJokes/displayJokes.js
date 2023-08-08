import { LightningElement, wire } from "lwc";
import retrieveJokes from "@salesforce/apex/RetrieveJokes.retrieveJokes";

export default class JokeDisplay extends LightningElement {
  // Properties to store the retrieved data
  category;
  error;
  joke;
  type;
  setup;
  delivery;

  // Computed property to check if type is "single"
  get isSingleType() {
    return this.type === "single";
  }

  // Computed property to check if type is "twopart"
  get isTwoType() {
    return this.type === "twopart";
  }

  // Wire method for initial data loading
  @wire(retrieveJokes)
  wiredResponse({ data, error }) {
    if (data) {
      console.log("wiredResponse");
      console.log(data);
      this.category = data.category;
      this.error = data.error;
      this.joke = data.joke;
      this.type = data.type;
      this.setup = data.setup;
      this.delivery = data.delivery;
    } else if (error) {
      console.error(error);
    }
  }

  // Method to handle the "Regenerate Joke" button click
  handleRegenerateClick() {
    // Call the retrieveJokes Apex method directly to fetch new data
    retrieveJokes()
      .then((response) => {
        console.log("response");
        console.log(response);
        this.category = response.category;
        this.error = response.error;
        this.joke = response.joke;
        this.type = response.type;
        this.setup = response.setup;
        this.delivery = response.delivery;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  notifyJokeGenerated() {
    const jokeEvent = new CustomEvent("jokegenerated", {
      detail: {}
    });
    this.dispatchEvent(jokeEvent);
  }
}
