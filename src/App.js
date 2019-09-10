import React from 'react';
import 'style/test.less';
import {Button} from 'antd'
function App(props) {
  return (
    <div className='App'>
      {props.children}
    </div>

    // 练习
    // <div className="App">
    //   <header className="App-header">
    //     <Button type='danger'>hehe</Button>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    )
  }
  export default App;