import React, { Component } from 'react'
import styled from 'styled-components'
import BannerListItem from './BannerListItem'


class CreativeList extends Component {

    render () {
        const {data, selected, creativeIndex, clicked} = this.props
        return (
            <MainCSS>
                <h3>{data.title}</h3>
                <ul>
                    {
                        data.list.map((item, i)=><BannerListItem  
                            creativeIndex={creativeIndex} 
                            bannerIndex={i} 
                            selected={selected} 
                            clicked={clicked} 
                            key={i} 
                            data={item}></BannerListItem>)
                    }
                </ul>
            </MainCSS>
        )
    }
}


const MainCSS = styled.div`
    display: block;
    margin-bottom: 20px;
    h3{
        padding-bottom: 10px;
    }
    ul{
        padding-left: 20px;
    }
`
export default CreativeList