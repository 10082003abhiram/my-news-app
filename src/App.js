import React, { Component } from 'react'
import NavBar from './Component/NavBar'
import News from './Component/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  
  state= {
    progress :10,
  }

  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <Router>
        <div>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
        />
      
        <NavBar/>
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} country = "in" key="general" category= "general" pagesize = {9}/>} />
          <Route path="/Sports" element={<News setProgress={this.setProgress} country = "in"   key="sports" category= "sports" pagesize = {9}/>} />
          <Route path="/Business" element={<News setProgress={this.setProgress} country = "in"   key="business" category= "business" pagesize = {9}/>} />
          <Route path="/Entertainment" element={<News setProgress={this.setProgress} country = "in"  key="entertainment" category= "entertainment" pagesize = {9}/>} />
        </Routes>
      </div>
      </Router>
    )
  }
}
