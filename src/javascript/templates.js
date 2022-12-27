export function createButton({ label, id, onclick }) {
  const button = document.createElement("button");
  button.innerHTML = label;
  button.id = id;
  button.onclick = onclick;
  return button;
}

export function createTextInput({ placeholder, id, onkeyup }) {
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.id = id;
  textInput.onkeyup = onkeyup;
  textInput.placeholder = placeholder;
  return textInput;
}

export function createDiv({ id, className }) {
  const div = document.createElement('div');
  div.className = className;
  div.id = id;
  return div;
}

export function createCheckbox({ id, className }) {
  const checkbox = document.createElement("input");
  checkbox.id = id;
  checkbox.className = className;
  checkbox.type = "checkbox";
  return checkbox;
}