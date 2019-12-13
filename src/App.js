import React from 'react';
import Palette from './Components/Palette'
import seedColors from './Components/seedColors'
import { generatePalette } from './Components/ColorHelpers'

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[0])} />
      </div>
    );
  }
}

export default App;