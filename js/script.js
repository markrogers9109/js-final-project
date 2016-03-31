// Mark Rogers
// JS1 Final Project




var userObjs = [];

function printList() {
    var ul = document.getElementById("textOutputId");
    for (var i = 0; i < userObjs.length; i++) {
        var user = userObjs[i];
        var a = document.createElement("li");
        a["data-index"] = i;
        a.addEventListener("click", function() {
            console.log(this["data-index"]);
        });
        a.textContent = user;
        addBtns(a);
        ul.appendChild(a);
    }
}

printList();


function deleteList() {
    var ul = document.getElementById("textOutputId");
    ul.innerHTML = "";
}

var button = document.getElementById("goBtnId");

button.addEventListener("click", function (evt) {
    var input1 = document.getElementById("input1Id").value;
    userObjs.push(input1);
    deleteList();
    printList();
    // evt.preventDefault();
    console.log(input1);
});

// var deleteBtn = document.getElementById("deleteBtnId");
//
// deleteBtn.addEventListener("click", function() {
//     userObjs.pop();
//     deleteList();
//     printList();
// });

function addBtns(a) {
    var editBtn = document.createElement("button");
    editBtn.classList.add("glyphicon");
    editBtn.classList.add("glyphicon-pencil");
    a.appendChild(editBtn);
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("glyphicon");
    deleteBtn.classList.add("glyphicon-remove");
    a.appendChild(deleteBtn);
    var likeBtn = document.createElement("button");
    likeBtn.classList.add("glyphicon");
    likeBtn.classList.add("glyphicon-heart");
    a.appendChild(likeBtn);
    likeBtn.addEventListener("click", function() {
        console.log(this.parentNode);
        console.log(this.parentNode.textContent);
        likeBtn.style.color = "lightgray";
        // deleteList();
        // printList();
        console.log(userObjs);
    });
    editBtn.addEventListener("click", function() {
        console.log(this.parentNode);
        console.log(this.parentNode.textContent);
        for (var i = 0; i < userObjs.length; i++) {
            if (this.parentNode.textContent == userObjs[i]) {
                userObjs[i] = document.getElementById("input1Id").value;
            }
        }
        deleteList();
        printList();
        console.log(userObjs);
    });
    deleteBtn.addEventListener("click", function() {
        console.log(this.parentNode);
        console.log(this.parentNode.textContent);
        userObjs.splice(this.parentNode["data-index"], 1);
        deleteList();
        printList();
    });
}

// ================================================= corey's final project example

/* Geekwise - JavaScript I
 * Final Project Example
 * Corey Shuman
 * 12/15/2015
 *
 *
 */

 // var listArray = [];
 // var itemId = 1;
 // var editing = false;
 // var curItem = null;
 //
 // $(function() {
 // var newItemButton = document.getElementById("NewItemButton");
 // var itemInput = document.getElementById("ItemInput");
 // var itemID = document.getElementById("ItemID");
 // var itemEditButton = document.getElementById("ItemButton");
 // var listNode = document.getElementById("ListNode");
 //
 // function handleNewItemClick(evt) {
 // 	showEditWindow(true);
 // }
 //
 // function handleEditClick(evt) {
 // 	showEditWindow(false);
 // 	if(itemID.value === "0") {
 // 		addItemToList(itemInput.value);
 // 	} else {
 // 		editItem(parseInt(itemID.value), itemInput.value);
 // 	}
 // 	itemInput.value = "";
 // 	itemID.value = "0";
 // 	printList();
 // }
 //
 // function addItemToList(itemText) {
 // 	if(!itemText) return;
 // 	var itemObj = {};
 // 	itemObj.id = itemId++;
 // 	itemObj.done = false;
 // 	itemObj.text = itemText;
 // 	listArray.push(itemObj);
 // }
 //
 // function setupEditAction(id) {
 // 	itemID.value = id;
 // 	// find item and update
 // 	for(var i=0; i<listArray.length; i++) {
 // 		var item = listArray[i];
 // 		if(item.id === id) {
 // 			itemInput.value = item.text;
 // 			break;
 // 		}
 // 	}
 // 	showEditWindow(true);
 // }
 //
 // function editItem(id, text) {
 // 	// find item and update
 // 	for(var i=0; i<listArray.length; i++) {
 // 		var item = listArray[i];
 // 		if(item.id === id) {
 // 			item.text = text;
 // 			break;
 // 		}
 // 	}
 // }
 //
 // function deleteItem(id) {
 // 	// find item and stop for loop so i is our item's index
 // 	for(var i=0; i<listArray.length; i++) {
 // 		var item = listArray[i];
 // 		if(item.id === id) {
 // 			break;
 // 		}
 // 	}
 // 	// if i is < length then it found our item
 // 	if(i < listArray.length) {
 // 		listArray.splice(i,1);
 // 	}
 // }
 //
 // function markItem(id) {
 // 	// find item and update
 // 	for(var i=0; i<listArray.length; i++) {
 // 		var item = listArray[i];
 // 		if(item.id === id) {
 // 			item.done = !item.done;
 // 			break;
 // 		}
 // 	}
 // }
 //
 // function handleListItemButtons(evt) {
 // 	var target = evt.target;
 // 	evt.preventDefault();
 // 	console.log(target)
 // 	if(target.hasAttribute("data-action")) {
 // 		var action = target.getAttribute("data-action");
 // 		var itemId = target.parentNode.parentNode.getAttribute("rel");
 // 		itemId = parseInt(itemId);
 // 		console.log(itemId);
 // 		switch(action) {
 // 			case "edit":
 // 				// bring up edit window
 // 				setupEditAction(itemId);
 // 				break;
 // 			case "delete":
 // 				if(confirm("Are you sure you want to delete?")) {
 // 					deleteItem(itemId);
 // 					printList();
 // 				}
 // 				break;
 // 			case "mark":
 // 				markItem(itemId);
 // 				printList();
 // 				break;
 // 		}
 // 	} else if(target.hasAttribute("rel")) {
 // 		selectItem(target);
 //
 // 	}
 // }
 //
 // function selectItem(ref) {
 // 	clearSelect();
 // 	ref.setAttribute("class", "selectLite");
 // 	curItem = ref;
 // }
 //
 // function clearSelect() {
 // 	var items = document.querySelectorAll("ol li a");
 // 	for(var i = 0; i < items.length; i++) {
 // 		items[i].removeAttribute("class");
 // 	}
 // 	curItem = null;
 // }
 //
 // function printList() {
 // 	listNode.innerHTML = "";
 // 	listArray.forEach(function(item) {
 // 		var newTodo = createListItem(item);
 // 		listNode.appendChild(newTodo);
 // 	});
 // }
 //
 // function showEditWindow(show) {
 // 	var wnd = document.getElementById("EditWindowDiv");
 // 	if(show) {
 // 		editing = true;
 // 		wnd.style.display = "block";
 // 		itemInput.focus();
 // 	} else {
 // 		editing = false;
 // 		wnd.style.display = "none";
 // 	}
 // }
 //
 // function createListItem(itemObj) {
 // 	var item = document.createElement("li");
 // 	var a = document.createElement("a");
 // 	a.setAttribute("href", "");
 // 	a.innerHTML = itemObj.text + getListControls();
 // 	a.setAttribute("rel", itemObj.id);
 // 	if(itemObj.done) {
 // 		a.style.textDecoration = "line-through";
 // 	}
 // 	item.appendChild(a);
 // 	return item;
 // }
 //
 // function getListControls() {
 // 	var html = "";
 //
 // 	html += '<span class="ListControls pull-right">';
 // 	html += '<span class="glyphicon glyphicon-pencil" aria-hidden="true" data-action="edit"></span>';
 // 	html += '<span class="glyphicon glyphicon-ok" aria-hidden="true" data-action="mark"></span>';
 // 	html += '<span class="glyphicon glyphicon-remove" aria-hidden="true" data-action="delete"></span>';
 // 	html += '</span>';
 // 	return html;
 // }
 //
 // newItemButton.addEventListener('click', handleNewItemClick);
 // itemEditButton.addEventListener('click', handleEditClick);
 //
 // // handle all edit, delete, done events using a single event handler
 // listNode.addEventListener('click', handleListItemButtons);
 //
 // // handle enter and escape keys
 // document.onkeydown = function keyCheck(e) {
 // 	var KeyID = (window.event) ? event.keyCode : e.keyCode;
 // 	console.log(KeyID)
 // 	switch(KeyID) {
 // 		case 13: // [enter]
 // 			handleEditClick();
 // 			break;
 // 		case 27: // [esc]
 // 			showEditWindow(false);
 // 			clearSelect();
 // 			break;
 // 		case 78: // new (n)
 // 			if(!editing) {
 // 				showEditWindow(true);
 // 				e.preventDefault()
 // 			}
 // 			break;
 // 		case 69: // edit (e)
 // 			if(!editing && curItem !== null) {
 // 				var itemId = curItem.getAttribute("rel");
 // 				itemId = parseInt(itemId);
 // 				setupEditAction(itemId);
 // 				e.preventDefault();
 // 			}
 // 			break;
 // 		case 68: // delete (d)
 // 			if(!editing && curItem !== null) {
 // 				var itemId = curItem.getAttribute("rel");
 // 				itemId = parseInt(itemId);
 // 				if(confirm("Are you sure you want to delete?")) {
 // 					deleteItem(itemId);
 // 					printList();
 // 				}
 // 			}
 // 			break;
 // 		case 70: // mark (f)
 // 			if(!editing && curItem !== null) {
 // 				var itemId = curItem.getAttribute("rel");
 // 				itemId = parseInt(itemId);
 // 				markItem(itemId);
 // 				printList();
 // 			}
 // 			break;
 // 	}
 //
 // }
 // });

// ================================================= vanilla javascript js I found online

// //I want to eventually push all new elements into this empty //array
// var added = [ ];
// //add counter for each new element
// var counter = 1;
// document.getElementById("add").addEventListener("click", function(){
//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode("NEW");
//   var currentDiv = document.getElementById("div1");
//   //create a constructor function that adds elements to dom
//   function addElement(){
//     //create new element
//     //give it some content
//     newDiv.appendChild(newContent); //add the text node to the newly created div.
//     //add id to current element
//     newDiv.id = "new";
//
//     // add the newly created element and its content into the DOM
//     document.body.insertBefore(newDiv, currentDiv);
//     // console.log(added.length);
//     // alert("button was clicked " + (counter++) + " times");
//   }
//   //initialize function
//   addElement();
// });
//
// document.getElementById("delete").addEventListener("click", function(){
//   var currentDiv = document.getElementById("new");
//   function deleteElement(){
//     //delete current element
//     //target the currentDiv and if it has a parentNode
//     //removeChild of currentDiv
//     if (currentDiv.parentNode) {
//       currentDiv.parentNode.removeChild(currentDiv);
//     //   alert("button was clicked " + (counter--) + " times");
//     }
//
//
//   }
//   //initialize function
//   deleteElement();
// });
