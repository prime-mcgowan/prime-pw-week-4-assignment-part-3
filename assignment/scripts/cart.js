console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//console test
console.log('***Testing Console***');
console.log('js');


//Create a global variable named basket and set it to an empty array.
console.log('***Global variable named basket set to empty array:***');

let basket = [];
console.log(basket);


//Create a function called addItem. 
/*It should: 
 - take an input parameter for a string item
 - add the new item to the global array basket.
 - return true indicating the item was added
*/

console.log('*** addItem function / add new item / return true***');

function addItem(item){   
 basket.push(item); 
 return true; 
}
 
console.log('Adding shampoo (expect true)',addItem('shampoo'));
console.log('Basket now has:' , basket);

console.log('Adding conditioner(expect true)',addItem ('conditioner'));
console.log('Basket now has:', basket);

console.log('Adding soap(expect true)',addItem('soap'));
console.log('Basket now has:',basket);



/*
console.log('in addItem', item);
console.log(addItem(basket));



function addItem(item){
    basket.push('shampoo');
    return true;
}
console.log('added shampoo to basket', basket);*/





//Create a function called listItems. 
/*It should:
 - loop over the items in the basket array
 - console.log each individual item on a new line*/
 
 basket = ['shampoo', 'conditioner', 'soap'];


console.log('***listItems function / loop over items/ console individually***');

 function listItems(basket) {
    for (let i=0; i < basket.length; i++)
    console.log('looping through basket items:', basket[i]);
    return basket;
 }
 
 console.log(listItems(basket));


//Create a function called empty. 
/*It should:
 - reset the basket to an empty array
 */

 console.log('***empty function / should empty array***');

 console.log('items currently in basket:', basket);
 basket.splice(0,basket.length);
 console.log(basket);
 

 function empty(basket){
   basket = (basket.splice(0,basket.length));
   return basket;
}
console.log(empty(basket));


//Stretch Goals
console.log('**********STRETCH GOALS*********');


/*2. Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)
  */

console.log('***Global const named maxItems set to 5***')
const maxItems = 5;
console.log(maxItems);

function isFull(basket) {
   if (basket.length < maxItems){
   return false;
   }
else {
   return true;
}
}



/*
console.log('***isFull Function / return false if less than 5 / return true if greater than or equal to 5***')
function isFull(basket) {
   for(i=0; i < basket.length; i++) {  
      if(basket.length < maxItems) {
      return false;
}
} 
return true;     
}
*/

basket = ['shampoo', 'conditioner', 'soap']; //3 items = false
console.log('Current items in basket 3 (expect false):', basket);
console.log(isFull(basket));

basket = ['a', 'b', 'c', 'd', 'e',]; //5 items = true
console.log('Current items in basket 5 (expect true):', basket);
console.log(isFull(basket));

basket = ['a', 'b', 'c', 'd', 'e', 'f']; //6 items = true
console.log('Current items in basket 6 (expect true):',basket);
console.log(isFull(basket));








console.log('***update addItem function***')

function addItem(item){
for(i=0; i<basket.length; i++) {
   if(basket.length < maxItems){
      basket.push(item)
      return true;  
   }
   
      return false;
}
}

basket = ['a', 'b', 'c'];
console.log(addItem('d'));
console.log(basket);

basket = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(addItem('g'));
console.log(basket);




/*
function addItem(item) {
   for(i=0; i<basket.length; i++) {
      if(basket.length > isFull){
         basket.push(item)
      return true;
}
}
   return false;
}

basket = ['shampoo', 'conditioner', 'soap'];
console.log(addItem('candy'));

/*for(i=0; i<basket.length; i++) */


/*
console.log('*** addItem function / add new item / return true***');

function addItem(item){   
 basket.push(item); 
 return true; 
}
 
console.log('Adding shampoo (expect true)',addItem('shampoo'));
console.log('Basket now has:' , basket);

console.log('Adding conditioner(expect true)',addItem ('conditioner'));
console.log('Basket now has:', basket);

console.log('Adding soap(expect true)',addItem('soap'));
console.log('Basket now has:',basket);
*/

//Stretch #4//



console.log('***removeItem function***')

/*
//Array.indexOf
basket = ['shampoo', 'conditioner', 'soap'];
console.log(basket);
let index = basket.indexOf('soap');
console.log(index);

//Array.splice
console.log(basket);
basket.splice(2);
console.log(basket);
*/

//I know the code below isn't right...but it shows what I was trying to work out
//I can't figure out how to join the two pieces of code...individually they work.


basket = ['shampoo', 'conditioner', 'soap'];

function removeItem() {
   let index = basket.indexOf('soap');
   return index;
}
console.log(removeItem());

basket = basket.splice(2,1);
console.log(basket);


//Trying to get null reponse

/*
basket = basket.splice(4,1);{
   let(i=0; i<basket.length; i++){
      if i===splice;{
      return item;
   }
   return null;
}
}
console.log(basket);

/*

basket = ['shampoo', 'conditioner', 'soap'];

function removeItem(item) {
   for(let i=0; i<basket.length; i++) {
      basket.splice(2);
      return item;
    } 
 console.log(removeItem());
}
*/