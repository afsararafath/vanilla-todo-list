import { createHeader } from "./header.js";
import { createList } from "./list.js";
import { getTodoListContainer } from "./utils.js";


const todoListContainer = getTodoListContainer();
const header = createHeader();
const list = createList();
todoListContainer.appendChild(header);
todoListContainer.appendChild(list);