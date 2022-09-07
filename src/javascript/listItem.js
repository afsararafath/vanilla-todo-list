import { createCheckbox, createDiv } from "./templates.js";

export function createListItem(text) {
    const listItem = createDiv({ id: 'listItem', className: 'listItem' });
    const checkbox = createCheckbox({ id: text });
    const todoText = createDiv({ id: 'todoText' });
    todoText.innerHTML = text;

    listItem.appendChild(checkbox);
    listItem.appendChild(todoText);
    return listItem;
}