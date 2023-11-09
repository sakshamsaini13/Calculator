# Calculator

A fully functional calculator app made using the principles of object-oriented programming in JavaScript.

## Project Link

You can access the calculator app online at (https://calculator5945.netlify.app/).

## Class Structure

The project is structured around a single class, `Calculator`. The class includes a constructor method and several additional methods that perform the various tasks required to operate the calculator.

### Constructor

The `Calculator` constructor takes two arguments, `previousOperandTextElement` and `currentOperandTextElement`, which are expected to be HTML elements in the DOM. These arguments are assigned to instance variables of the same name. The constructor then calls the `clear` method to initialize the calculator's state.

### Methods

The `Calculator` class includes the following methods:

- `clear`: This method sets `currentOperand`, `previousOperand`, and `operation` to their initial values. It's used to reset the calculator state.

- `delete`: This method deletes the last character from `currentOperand`. It uses the JavaScript `slice` method to remove the last character.

- `appendNumber`: This method appends a number to the `currentOperand`. It also checks for decimal points to ensure that only one can be entered.

- `chooseOperation`: This method sets the operation to the chosen operator and stores the `currentOperand` as `previousOperand`, then resets the `currentOperand` for a new input.

- `compute`: This method performs the calculation based on the operation chosen and the `previousOperand` and `currentOperand` values. It uses a switch statement to perform the appropriate calculation.

- `getDisplayNumber`: This method formats a number for display. It separates the integer and decimal parts of the number, if present, and then combines them for the final display format.

- `updateDisplay`: This method updates the calculator's display based on the current state of `currentOperand`, `previousOperand`, and `operation`.

## Event Handling

The code also establishes event handlers for various buttons on the calculator, using the `querySelector` and `querySelectorAll` methods to select DOM elements based on their `data-*` attributes.

Event handlers are set up for:

- Number buttons: When a number button is clicked, the number is appended to the `currentOperand`, and the display is updated.

- Operation buttons: When an operation button is clicked, the operation is chosen, and the display is updated.

- Equals button: When the equals button is clicked, the computation is performed, and the display is updated.

- Clear button: When the clear button is clicked, the calculator is cleared, and the display is updated.

- Delete button: When the delete button is clicked, the last digit of the `currentOperand` is deleted, and the display is updated.
