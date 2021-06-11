var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');



// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Search Event
filter.addEventListener('keyup', filterItems);

// Add Item FUNCTION

function addItem(e){

  e.preventDefault(e);

  // Get Input Value

  var newItem = document.getElementById('item').value;

  // Create New List Element

  var li = document.createElement('li');

  // Add Class

  li.className = 'list-group-item';

  // Add Text With Input Value

  li.appendChild(document.createTextNode(newItem));

  // Create Delete Button

  var deleteBtn = document.createElement('button');

  // Add Classes To Delete Button

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append Text

  deleteBtn.appendChild(document.createTextNode('X'));

  // Append Button to Li

  li.appendChild(deleteBtn);

  // Append Li to List

  itemList.appendChild(li);

}

// Remove Item FUNCTION

function removeItem(e){

  if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);

    }
  }
}

// Filter Search FUNCTION

function  filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');

  //Convert To Array

  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
  } else {
    item.style.display = 'none';
  }
  });
}