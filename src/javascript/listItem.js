import { createButton, createCheckbox, createDiv } from "./templates.js";
import { deleteCompletedItems, deleteCurrentItem, deleteSelectedItems, taskCompleted } from "./utils.js";

export function createListItem(text) {
    const listItem = createDiv({ id: 'listItem', className: 'listItem' });
    const checkbox = createCheckbox({ id: text, className: 'checkBox' });
    const todoText = createDiv({ id: 'todoText', className: "todoText" });
    const doneButton = createButton({ label: 'Done', id: 'doneButton', onclick: taskCompleted })
    const deleteButton = createButton({ label: 'Delete Task', id: 'deleteButton', onclick: deleteCurrentItem })
    todoText.innerHTML = text;

    listItem.appendChild(checkbox);
    listItem.appendChild(todoText);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    return listItem;
}