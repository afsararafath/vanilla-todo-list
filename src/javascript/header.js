import { createButton, createDiv, createTextInput } from "./templates.js";
import { addListItem, addListItemOnEnter, deleteAllItems, deleteSelectedItems, toggleAllCheckboxes } from "./utils.js";

export function createHeader() {
    const headerContainer = createDiv({ id: 'headerContainer' })
    const textInput = createTextInput({ placeholder: 'Type here...', id: 'textInput', onkeyup: addListItemOnEnter })
    const addButton = createButton({ label: 'Add', id: 'addButton', onclick: addListItem });
    const toggleAllButton = createButton({ label: 'Select/Deselect All', id: 'toggleAllButton', onclick: toggleAllCheckboxes });
    const deleteSelectedButton = createButton({ label: 'Delete Selected', id: 'deleteSelectedButton', onclick: deleteSelectedItems });
    const deleteCompletedButton = createButton({ label: 'Delete Completed', id: 'deleteCompletedButton', onclick: deleteAllItems });
    const deleteAllButton = createButton({ label: 'Delete All', id: 'deleteAllButton', onclick: deleteAllItems });

    headerContainer.appendChild(textInput);
    headerContainer.appendChild(addButton);
    headerContainer.appendChild(toggleAllButton);
    headerContainer.appendChild(deleteSelectedButton);
    headerContainer.appendChild(deleteCompletedButton);
    headerContainer.appendChild(deleteAllButton);

    return headerContainer;
}