import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Palette from './Components/Palette'
import seedColors from './Components/seedColors'
import { generatePalette } from './Components/ColorHelpers'

class App extends React.Component {
  render() {
    return (
      <Switch>

        <Route
          exact
          path="/"
          render={() => <h1>Palette list goes here</h1>} />

        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual palette</h1>} />

      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[0])} />
      // </div>
    );
  }
}

export default App;