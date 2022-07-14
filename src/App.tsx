import logo from "./logo.svg";
import * as React from "react";
import "./App.css";

// curl https://bun.sh/install | bash

function RoundButton({ hex, addSelected }: { hex: string, addSelected: (hex: string) => void }){
  return (
    <button className="roundButton" style={{backgroundColor: hex }} onClick={() => {
      addSelected(hex);
    }}>
      {hex}
    </button>
  )
}

const BOX_COUNT = 10;
const WHITE_HEX = '#ffffff';

function App() {
  const pallete = ["#ff0000", "#00ff00", "#0000ff"];

  const [selectedColors, setSelectedColors] = React.useState(Array(BOX_COUNT).fill(WHITE_HEX));
  function addSelected(hex: string){
    setSelectedColors(old => {
      const firstWhiteIndex = old.findIndex(hex => hex === WHITE_HEX)
      if(firstWhiteIndex === -1){
        return old;
      }
      console.log('firstWhiteIndex', firstWhiteIndex)

      const copy = [...old];
      copy[firstWhiteIndex] = hex;
      return copy;
    })
  }

  function removeSelected(targetIndex: number){
    setSelectedColors(old => {
      const copy = [...old];
      copy[targetIndex] = WHITE_HEX;
      return copy;
    })
  }

  return (
    <div className="App">
      <article>
        <div className="selectedContainer flexRow">
          {selectedColors
            .map((hex, index) => (
              <div
                className="selectedBox"
                style={{backgroundColor: hex}}
                onClick={() => { removeSelected(index) }}>
              
              </div>
            ))}
        </div>
        <div id="pallete" className="flexRow">
          {pallete.map(hex => <RoundButton hex={hex} addSelected={addSelected} />)}
        </div>
      </article>
    </div>
  );
}

export default App;
