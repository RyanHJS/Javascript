// Add event
    // form id = 'addForm'
    // input type = 'test'
    // input type = 'submit'

// Delete event
    // ul (unordered list) id = 'items'
    // ul class = 'list-group'
    // li class = 'list-group-item'
    // li delete button class = 'btn btn-danger btn-sm float-right delete'

// Filter items
    // div class = "col-md-6"
    // input type = "text" class = "form-control" id = "filter"

// 1. Get var
var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');

// 2. Form submit event

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li item
    var newLi = document.createElement('li');
    // Assign new li to class 'list-group-item'
    newLi.className = 'list-group-item';
    // Add text to li
    newLi.appendChild(document.createTextNode(newItem));

    // Add delete button to li

    var deleteButton  = document.createElement('button');
    deleteButton.className = "btn btn-danger btn-sm float-right delete"
    deleteButton.appendChild(document.createTextNode('X'));

    newLi.appendChild(deleteButton);

    // Append to list
    itemList.appendChild(newLi);
}

// 3. Delete button event
itemList.addEventListener('click', removeItem);

function removeItem(e){
    // if(e.target.className === "btn btn-danger btn-sm float-right delete"){
    //     console.log("Delete")
    // }
    if (e.target.classList.contains('delete')){
        if (confirm('Are you sure you want to delete?')){
            // Delete the li, which is the parent element of the delete
            var toDelete = e.target.parentElement;

            itemList.removeChild(toDelete);
        }
    }
}

// 4. Filter events
filter.addEventListener('keyup', filterItems);

function filterItems(e){
    var filterText = e.target.value.toLowerCase();

    // Get all li elements
    var items = itemList.getElementsByTagName('li');

    // Convert to array
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent.toLowerCase();
        
        // Check if the filterText matches any item
        if (itemName.indexOf(filterText) !== -1) {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}

