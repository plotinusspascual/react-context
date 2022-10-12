import {ThemeContext, themes} from './ThemeContext';
import React from 'react';
import PhotoList from './PhotoList';
import Content from './Content';

const imageList = PhotoList.photos;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
      index: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    var nextIndex = this.state.index + 1;
    this.setState(state => ({
      index: nextIndex,
      theme: themes[imageList[nextIndex].theme],
    }));
  }

  render() {
    console.log(this.state.theme)
    return (
        <ThemeContext.Provider value={{theme: this.state.theme}}>
          <Content index={this.state.index} onClick={this.onClick} />                  
        </ThemeContext.Provider>
    );
  }
}

export default App;