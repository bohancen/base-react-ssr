import React,{Component} from 'react'

class List extends Component {
  click(){
    console.log(this.props.title)
  }
  render(){
    return <li onClick={this.click.bind(this)}>
      {this.props.title}
    </li>
  }
}

export default List