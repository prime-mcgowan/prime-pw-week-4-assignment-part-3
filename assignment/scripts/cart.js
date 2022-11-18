console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//console test
console.log('js');


//Create a global variable named basket and set it to an empty array.

let basket = [];


//Create a function called addItem. 
/*It should: 
 - take an input parameter for a string item
 - add the new item to the global array basket.
 - return true indicating the item was added
*/


function addItem(item){   
 basket.push(item); 
 return true; 
}
 
console.log(addItem('shampoo'));
console.log(basket);

console.log(addItem('conditioner'));
console.log(basket);

console.log(addItem('soap'));
console.log(basket);



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
 - console.log each individual item on a new line
 */


basket = ['shampoo', 'conditioner', 'soap'];

 function listItems(basket) {
    for (let i=0; i < basket.length; i++)
    console.log('looping through basket items:', basket[i]);
 }
 console.log(listItems(basket));


//Create a function called empty. 
/*It should:
 - reset the basket to an empty array
 */

 basket.splice(0,basket.length);
 console.log(basket);
 



 function empty(basket){
   basket = (basket.splice(0,basket.length))
   return basket;
}
console.log(empty(basket));



/*
function empty(basket) {
basket.splice(0,basket.length);}

console.log(empty (basket));



/*
function empty() {
   for (let i=0; i < basket.length; i--) {
      basket.splice(0,basket.length)
   }
   return empty;
}

console.log(empty());
*/






