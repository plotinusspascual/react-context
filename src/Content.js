import {ThemeContext, themes} from './ThemeContext';
import React, { useContext } from 'react';
import PhotoList from './PhotoList';
const imageList = PhotoList.photos;

function Content(props){
//  const theme = useContext(ThemeContext);
console.log(props.index)
  return(
    <ThemeContext.Consumer>
      {({theme}) => (
        <div style={{background: theme.background}}>
              <h1 style={{color: theme.color}}> React Context API </h1>
              <h2 style={{color: theme.color}}> Theme Context </h2>
              <img src={imageList[props.index].photo} alt=""></img>
              <button onClick={props.onClick}>NEXT</button>
        </div>          
      )}
    
    </ThemeContext.Consumer>

  )
}

export default Content;