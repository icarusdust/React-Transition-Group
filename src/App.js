import React, { Component } from 'react';
import Modal from './components/Modal/Modal'
import Backdrop from './components/Backdrop/Backdrop'
import List from './components/List/List'
import './App.css';
import Transition from  'react-transition-group/Transition'

class App extends Component {
  state = {
    isShown: false,
    showBlock: false
  }

  openModal = () => {
      this.setState({isShown:true})
  }

  closedModal = () => {
    this.setState({isShown:false})
  }


  render(){
    const animationTiming = {
      enter:400,
      exit:1000
    }
     return(
          <div className = "App">
          <button onClick = {() => this.setState(prevState => ({showBlock:!prevState.showBlock}))}>Toggle</button>
          {/* <Transition 
          in = {this.state.showBlock}
          timeout = {300}
          mountOnEnter
          onmountOnExit
          onEnter = {() => console.log('onEnter')}
          onEntering = {() => console.log('onEntering')}
          onEntered = {() => console.log('onEntered')}
          onExit = {() => console.log('onExit')}
          onExiting = {() => console.log('onExiting')}
          onExited = {() => console.log('onExited')}
          
          >
          {state => {
           return (
             <div 
              style ={{
              width:100, 
              height:100,
              backgroundColor:'red',
              margin:'auto',
              transition:'opacity 1s ease-out',
              opacity:state === 'exited' ? 0 : 1}} />)
          }}
          
           </Transition> */}
           <Transition in = {this.state.isShown} timeout = {animationTiming} mountOnEnter onmountOnExit >
              {state => (
               <Modal show = {state} closed = {this.closedModal}/>
           )} 
           </Transition>
            
            <Backdrop  show = {this.state.isShown}/>
            <button  onClick = {this.openModal}>Open Modal</button>
            <br /> <br /> <br />
            <List />
          </div>
      )
  }
}

export default App;
