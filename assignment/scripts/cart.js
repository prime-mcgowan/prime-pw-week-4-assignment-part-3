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
 
 /*basket = ['shampoo', 'conditioner', 'soap'];*/


console.log('***listItems function / loop over items/ console individually***');

 function listItems(basket) {
    for (let i=0; i < basket.length; i++)
    console.log('looping through basket items:', basket[i]);
    return basket;
 }
 //
 console.log(listItems(basket));


//Create a function called empty. 
/*It should:
 - reset the basket to an empty array
 */


 console.log('***empty function / should empty array***');
 basket.splice(0,basket.length);
 console.log(basket);
 

 function empty(basket){
   basket = (basket.splice(0,basket.length));
   return basket;
}
console.log(empty(basket));


//Stretch Goals

const maxItems = 5;
console.log(maxItems);


function isFull(basket) {
   for(i=0; i < basket.length; i++) {  
      if(basket.length < maxItems) {
      return false;
}
} 
return true;     
}


basket = ['shampoo', 'conditioner', 'soap']; //3 items = false
console.log(basket);
console.log(isFull(basket));

basket = ['a', 'b', 'c', 'd', 'e',]; //5 items = true
console.log(basket);
console.log(isFull(basket));

basket = ['a', 'b', 'c', 'd', 'e', 'f']; //6 items = true
console.log(basket);
console.log(isFull(basket));



/*
   else if(basket[i] >= maxItems) {
   return false;
}

  for(i=0; i < basket.length; i++) {


*/