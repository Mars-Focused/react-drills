import React, {Component} from 'react'
import '/App.css'
import NewTask from "./NewTask"
import List from ".List"

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: []
    }
    
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task){
    this.steState({ list: [...this.state.list, task] })
  }

  render(){
    return(
      <div>
        <h1>My to-do list:</h1>
        <NewTask add={thislhandleAddTask} />
        <List tasks={this.state.list}/>
      </div>
    )
  }
}

export default App