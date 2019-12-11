import React, { Component } from 'react'
import ColorBox from './ColorBox'
import { generatePalette } from './ColorHelpers'
import '../Palette.css'
import seedColors from './seedColors'

export default class Palette extends Component {
    render() {

        console.log(generatePalette(seedColors[4]))

        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))

        return (
            <div className="Palette">
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
