import { Keyboard, Keystroke } from 'keysim';
const keyboard = Keyboard.US_ENGLISH;
import simulateType from '@entrptaher/simulate-type';
import reactTriggerChange from 'react-trigger-change';
import wait from 'waait';

const driver = {
  findElem(selector) {
    const elem = document.querySelector(selector);
    elem.focus();
    elem.scrollIntoView();
    return elem;
  },
  simulateKeyboardEvent(elem) {
    [
      "click",
      "focus",
      "keydown",
      "keypress",
      "mousedown",
      "compositionstart",
      "compositionend",
      "blur",
    ].forEach(
      event => this.passEventToDom(event, elem, 'Keyboard')
    );
    elem.dispatchEvent(new Event('input', { bubbles: true }));
    elem.dispatchEvent(new Event('change', { bubbles: true }));
  },
  passEventToDom(eventName, elem, eventType) {
    const event = new window[`${eventType}Event`](eventName, {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    elem.dispatchEvent(event);
  }
}

const dispatchFake = (inputField) => keyboard.dispatchEventsForKeystroke(new Keystroke(0, 65), inputField);

const fillInput = (selector, inputText) => {
  let inputField = driver.findElem(selector);
  const childInput = [...inputField.querySelectorAll('input, textarea')];
  if(childInput.length) inputField = childInput[0];

  if (['INPUT', 'TEXTAREA'].includes(inputField.tagName)) {
    inputField.value = inputText
    // setNativeValue(inputField, inputText);
    // setNativeValue2(inputField, inputText);
    // inputField.dispatchEvent(new Event('input', { bubbles: true }));

  } else {
    dispatchFake(inputField);
    const realContainer = [...inputField.querySelectorAll('*')].find(e => e.childNodes[0].wholeText);
    realContainer.innerText = inputText;
    wait(100)
    dispatchFake(inputField)
  }

  reactTriggerChange(inputField);
  // driver.simulateKeyboardEvent(inputField);
}

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    fillInput(".public-DraftStyleDefault-ltr", "Hello world");
    fillInput("input", "Hello world");
    fillInput("#textarea", "Hello world");
  }
}
