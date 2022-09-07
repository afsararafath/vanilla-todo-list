import { createDiv } from "./templates.js";


export function createList() {
    const listItems = createDiv({ id: 'listItems' });

    return listItems;
}