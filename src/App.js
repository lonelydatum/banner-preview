import React, { Component } from 'react'
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import CreativeList from './comp/CreativeList';

const SIZES = {
  BB: {w:300, h:250},
  LB: {w:7287, h:90},
}

class App extends Component {

  constructor(p){
    super(p)

    this.bannerData = window.bannerData

    let creativeIndex = 0
    let bannerIndex = 0
    
    
    var hash = window.location.hash.substr(1);
    if(hash){
      const hashArray = hash.split("/")
      if(hashArray.length===2){
        
        creativeIndex = hashArray[0]
        bannerIndex = hashArray[1]
        
      }
    }

    this.state = {selected:this.bannerData.banners[creativeIndex].list[bannerIndex]}
  }

  _clicked(selected){    
    this.setState({selected})
  }

  render(){
    const {selected} = this.state
    const path = `${this.bannerData.rootPath}${selected.path}`
    
    return (
      <MainCSS>
        <aside>
        <h2>{this.bannerData.title}</h2>
          {
            this.bannerData.banners.map((creative, i)=><CreativeList creativeIndex={i} selected={selected} clicked={this._clicked.bind(this)} key={i} data={creative}/>)
          }
        </aside>
          <main>
            {
              selected && <iframe title="hello" src={path} frameBorder="0" scrolling="no" width={SIZES[selected.type].w} height={SIZES[selected.type].h}></iframe>
            }
            
          </main>
      </MainCSS>
    );
  }
}



const MainCSS = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
  aside{    
    flex: 0 0 200px;
    padding: 40px 10px;
    font-size: .85em;
    h2{
      font-size: 16px;
      font-weight: 900;
      margin-bottom: 10px;
    }
  }

  main{    
    padding: 20px 30px;
    flex: 1 1 auto;
    background-color: #f7f7f7;
  }
`

export default App;
