import { createElement } from "lwc";
import JokeDisplay from "c/displayJokes";
import retrieveJokes from "@salesforce/apex/RetrieveJokes.retrieveJokes";

// Realistic data with a list of contacts
const mockretrieveJokes = require("./data/retrieveJokes.json");
const jokeButtonId = "jokeButton";
const jokefield = "joke";

// Mock getContactList Apex wire adapter
jest.mock(
  "@salesforce/apex/RetrieveJokes.retrieveJokes",
  () => {
    const { createApexTestWireAdapter } = require("@salesforce/sfdx-lwc-jest");
    return {
      default: createApexTestWireAdapter(jest.fn())
    };
  },
  { virtual: true }
);

describe("c-display-jokes", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    // Prevent data saved on mocks from leaking between tests
    jest.clearAllMocks();
  });

  describe("retrieveJokes @wire", () => {
    const element = createElement("c-display-jokes", {
      is: JokeDisplay
    });
    document.body.appendChild(element);
    const eventHandler = jest.fn();
    element.addEventListener("jokegenerated", eventHandler);

    // Emit a fake Apex response using the wire adapter
    retrieveJokes.emit(mockretrieveJokes);

    // Wait for any asynchronous DOM updates
    flushPromises();
    const jokeButton = getElementbyDataId(element, jokeButtonId);
    jokeButton.dispatchEvent(new CustomEvent("click"));

    flushPromises();
    // Assert that the joke is correctly displayed
    const jokeElement = getElementbyDataId(element, jokefield);

    console.log(jokeElement);

    // TBD assertion
  });

  // Return a promise to wait for any asynchronous DOM updates.
  async function flushPromises() {
    return Promise.resolve();
  }

  // retrieve data id from field
  function getElementbyDataId(element, targetId) {
    return element.shadowRoot.querySelector(`[data-id="${targetId}"]`);
  }
});
