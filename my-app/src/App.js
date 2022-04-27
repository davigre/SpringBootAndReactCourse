import React, { Component } from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
// import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

import './App.css';
import './bootstrap.css';
 
class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Counter/> */}
                <TodoApp/>
            </div>
        )
    }
}

// function FourthComponent() {

//     return (
//         <div className="fourthComponent">Fourth Component</div>
//     )

// }

// class LearningComponents extends Component {

//     render() {

//         return (

//             <div className="LearningComponenets">
//                 My Hello World
//                 <FirstComponent/>
//                 <SecondComponent/>
//                 <ThirdComponent/>
//                 <FourthComponent/>
//             </div>

//         )

//     }

// }

export default App;