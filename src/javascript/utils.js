import { createListItem } from './listItem';

export function getTextInput() {
    return document.getElementById('textInput')
}

export function getListItems() {
    return document.getElementById('listItems');
}

export function getAllCheckboxes() {
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    return allCheckboxes;
}

export function getAllListItems() {
    const allListItems = document.querySelectorAll(".listItem");
    return allListItems;
}

export function getAllSelectedListItems() {
    const allCheckboxes = getAllCheckboxes();
    let selectedCheckboxes = [];

    for (let i = 0; i < allCheckboxes.length; i++) {
        if (allCheckboxes[i].checked) {
            selectedCheckboxes.push(allCheckboxes[i].parentElement);
        }
    }
    return selectedCheckboxes;
}


export function areAllCheckboxesSelected() {
    const allCheckboxes = getAllCheckboxes();
    let selectedCount = 0;

    for (let i = 0; i < allCheckboxes.length; i++) {
        if (allCheckboxes[i].checked) {
            selectedCount = selectedCount + 1;
        }
    }

    return selectedCount === allCheckboxes.length;
}


export function updateAllCheckboxes(value) {
    const allCheckboxes = getAllCheckboxes();
    for (var i = 0; i < allCheckboxes.length; i++) {
        allCheckboxes[i].checked = value;
    }
}

export function deleteElements(elements) {
    elements.forEach(element => element.remove());
}

export function addListItem() {
    const textInput = getTextInput()
    if (textInput.value) {
        getListItems().appendChild(createListItem(textInput.value));
        textInput.value = '';
    }
}

export function toggleAllCheckboxes() {
    if (areAllCheckboxesSelected()) {
        updateAllCheckboxes(false);
    } else {
        updateAllCheckboxes(true);
    }
}

export function deleteSelectedItems() {
    deleteElements(getAllSelectedListItems())
}

export function deleteAllItems() {
    deleteElements(getAllListItems())
}

export function addListItemOnEnter(event) {
    if (event.key === 'Enter') {
        addListItem();
    }
}

export function deleteCurrentItem(event) {
    event.target.parentElement.remove();
}

export function taskCompleted(event) {
    if (!event.target.parentElement.classList.contains("completedItems")) {
        event.target.parentElement.querySelector(".todoText").classList.add("completedText");
        event.target.parentElement.classList.add("completedItems");
        event.target.innerHTML = "Un-Done";
    }
    else {
        event.target.parentElement.classList.remove("completedItems");
        event.target.parentElement.querySelector(".todoText").classList.remove("completedText");
        event.target.innerHTML = "Done";
    }
}


export function deleteCompletedItems() {
    const completedItems = document.querySelectorAll(".completedItems");
    completedItems.forEach(element => element.remove());
}

