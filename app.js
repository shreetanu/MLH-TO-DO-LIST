//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearButton = document.querySelector('#clear-list');

let todoItems = []; //to store the input entered by user
form.addEventListener('submit',function(e){
	e.preventDefault();
	const itemName = itemInput.value;
	todoItems.push(itemName);
	getList(todoItems);
	itemInput.value = '';
});

const getList = function(todoItems){
	itemList.innerHTML = '';
	todoItems.forEach(function(item){
		itemList.insertAdjacentHTML('beforeend',`<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5></div>`);
	})
}

clearButton.addEventListener('click',function(){
	todoItems = [];
	getList(todoItems);
})





  

