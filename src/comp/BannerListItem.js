import React, { Component } from 'react'
import styled, {css} from 'styled-components'


class BannerListItem extends Component {
    _clicked(){
        const {data, creativeIndex, bannerIndex, clicked} = this.props
         window.location.hash = `${creativeIndex}/${bannerIndex}`
         console.log(creativeIndex, bannerIndex)
         this.props.clicked(data)
    }

    render () {
        const {data, creativeIndex, bannerIndex, clicked} = this.props
        const isSelected = this.props.selected===this.props.data
        return (
            <MainCSS isSelected={isSelected}>
                <p onClick={this._clicked.bind(this)}>{data.title}</p>
            </MainCSS>
        )
    }
}

const isSelectedCSS = css`
    opacity: .5;
    pointer-events: none;
    color: black;
    background-color: #CCC;
`

const MainCSS = styled.li`
    /* display: flex; */
    cursor: pointer;
    &:hover{
        background-color: #CCC;
    }
    padding:5px;
    margin-bottom: 8px;
    ${me=>me.isSelected && isSelectedCSS};
    
`
export default BannerListItem