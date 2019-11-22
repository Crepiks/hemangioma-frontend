import React, { Component } from 'react'
import * as THREE from 'three'
import CELLS from '../../lib/vanta.cells.min.js'
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    height: 90vh;
    box-sizing: border-box;
`

class AnimatedBackgroundSection extends Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = CELLS({
            el: this.vantaRef.current,
            color1: 0xcf0767,
            color2: 0xf23558,
            THREE: THREE
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return (
            <Wrapper ref={this.vantaRef} className={this.props.className}>
                {this.props.children}
            </Wrapper>
        )
    }
}

export default AnimatedBackgroundSection