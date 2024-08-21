import React, { useState } from "react";

interface Todo {
  id: number;  
  text: string;  
  done: boolean;  
}

// React Function Component and I need it to get as a result a JSX element [syntax to work with js and html languages together]
const App: React.FC = () => {
  
  // This is to assign the values to an item and for later all the items
  const [todo, setTodos] = useState<
    { id: number; text: string; done: boolean }[]  // characteristics of the arrey I want for every item in the list
  >([]);  // the last part of the code line is to start with an empty arrey for the useState component ???

  // This is to declare the useState for a new list item when it will be written and it should follow the code in line 8 and so it should be a string to wich an id in form of number will be assigned
  const [newTodo, setNewTodo] = useState("");  // --> I should get the text of the new todo
	const [nextId, setNextID] = useState(1); // this is to assign a number to the id

//function for the items when they are added in the list (what must happen when using it)
	 const handleAddTodo = () => {
    if (newTodo.trim()) {  // I need this to verify if the field is empty 
      //Here I add the new items 
      setTodos([
        ...todo,  //here I modify the list if there are already items inside
        {
          id: nextId,  
          text: newTodo,  
          done: false  // this is to start the item undone in the checkbox
        }
      ]);
   
};

export default App;
