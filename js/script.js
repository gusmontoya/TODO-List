// 
let addToDoList = document.getElementById('addToDo'); 
let userInputField = document.getElementById('inputField');
let todoList = document.getElementById('toDoContainer');


// the Event listener will "listen" for a click of the mouse 
// and run a function that will create an element <li>. This 
// will allow the creation of a new list in the TODO-List. 
addToDoList.addEventListener('click', function() {
    let list = document.createElement('li');
    // this add's the styling for each list added 
    list.classList.add('li');
    // specifies the value of the input to the list being created
    list.innerText = userInputField.value;
    // In order to add the created <li> element to the List it needs to be 
    // to be appended.
    todoList.appendChild(list);
    // this resets the input to empty after new list is added
    userInputField.value = "";
    // this uses an event listener "click" to change the listed item 
    // to strikethrough 
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
    })
    // this removes the listed item with a double click
    list.addEventListener('dblclick', function(){
        todoList.removeChild(list);
    })
})
