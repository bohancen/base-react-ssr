import React,{Component,useState} from 'react'
import ReactDom from 'react-dom'

import App from '../components/app'


const data = window.store.state || []
ReactDom.hydrate(
  <App data={data} />,
  document.getElementById('root')
)
