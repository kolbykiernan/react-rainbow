// main page where all code is put together, this is all imported into index.js, which is imported into index.html //

//importing css elements//
import './App.css';

//allows us to change avariable's state//
import React, { useState } from 'react'


//importing functions from the other component pages. Each function is displayed below in <green>//
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'


//main function for the app
function App(){

  //defining colors and setColor function which will be able to change the state aka the color//
    let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']) 

    //this function allows us to return all of our colors with unique keys//
    let colorMap = colors.map((color, i) => {
      return(
        <ColorBlock key={i} color ={color} />
      )
    })

    //the spreading operator allows us to continue displaying our existing colors, as the user submits another one to be displayed//
    const addColor = (newColor) => {
      setColors([...colors,newColor])
    }

    //allows us to submit our new array of colors//
    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
}


export default App;
