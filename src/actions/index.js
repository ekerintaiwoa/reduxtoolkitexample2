// creating a constant helps to prevent spelling mistaked
const ORDER_BOOK = "BOOK_ORDERED" ;


// define action , action is an object that has a property
// below is an action  of type 
/*
{
    type: ORDER_BOOK ,
    quantity : 4,

}

*/

// create an action creator .Action creator is a function that returns an action

function orderBook(){

   return {

         type: ORDER_BOOK,
         quantity : 6   

   }


}
