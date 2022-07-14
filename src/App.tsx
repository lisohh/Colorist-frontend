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
const pallete = [
  '#e6e6e6', 
  '#d2b48c', 
  '#800000', 
  '#7e181e',
  '#29f9ff', 
  '#a8a8f8', 
  '#5050f1', 
  '#ffb3ba',
  '#ccff00', 
  '#ff7f50', 
  '#fa8072', 
  '#bada55',
];

function App() {
  const [selectedColors, setSelectedColors] = React.useState<string[]>(Array(BOX_COUNT).fill(WHITE_HEX));
  function addSelected(hex: string){
    setSelectedColors(old => {
      const firstWhiteIndex = old.findIndex(hex => hex === WHITE_HEX)
      if(firstWhiteIndex === -1){
        return old;
      }

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
        <div className="selectedContainer flex flex-row">
          {selectedColors
            .map((hex, index) => (
              <div
                key={index}
                className="selectedBox"
                style={{backgroundColor: hex}}
                onClick={() => { removeSelected(index) }}>
              </div>
            ))}
        </div>
        <div id="pallete" className="flex flex-row flex-wrap">
          {pallete.map(hex => <RoundButton key={hex} hex={hex} addSelected={addSelected} />)}
        </div>
      </article>
    </div>
  );
}

export default App;
