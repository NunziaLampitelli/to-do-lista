import React, { useState } from "react";

// React Function Component and I need it to get as a result a JSX element [syntax to work with js and html languages together]
const App: React.FC = () => {
  
  // This is to assign the values to an item and for later all the items
  const [todo, setTodos] = useState<
    { id: number; text: string; done: boolean }[]  // characteristics of the arrey I want for every item in the list
  >([]);  // the last part of the code line is to start with an empty arrey for the useState component ???

  // This is to declare the useState for a new list item when it will be written and it should follow the code in line 8 and so it should be a string to wich an id in form of number will be assigned
  const [newTodo, setNewTodo] = useState("");  

	
	
};

export default App;
