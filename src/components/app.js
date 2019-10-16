import React,{Component} from 'react'
import List from './list'

class App extends Component {
  render(){
    let data = this.props.data || []
    return <div>
      {
        data.map((attr,dex)=><List key={dex} title={attr.image}></List>)
      }
    </div>
  }
}

export default App