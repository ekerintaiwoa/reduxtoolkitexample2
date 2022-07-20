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



// create the state of the app, a state is an object 



const initialState = {

   numberOfBooks :  200 

}


// create a Reducer , a reducer is a function that accepts the state of the app and then an action that can change the state



const bookReducer= (state=initialState , action )=>{

      // we make a switch statement to show possible action types


      switch(action.type){

          case ORDER_BOOK: 

             return {
                  // creates a copy of the state  and update numnber of book
                ...state ,
                numberOfBooks : numberOfBooks-6   
             }
            default :

                return state


      }




}