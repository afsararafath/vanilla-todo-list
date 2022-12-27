import { createHeader } from "./header.js";
import { createList } from "./list.js";


const todoListContainer = document.getElementById('toDoList');
const header = createHeader();
const list = createList();
todoListContainer.appendChild(header);
todoListContainer.appendChild(list);