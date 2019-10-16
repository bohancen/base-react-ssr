import 'source-map-support/register'
// Instead of:
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import axios from 'axios'

import App from '../components/app'
// import log from './log'

const app = express()

// 静态资源
app.use(`/static/`, express.static('./static'))

app.get('/',async (req,res)=>{
  let [err,data] = await axios.get('http://web-dev.d.bigfunapp.cn/api/client/web?method=getHomeBanner').then(r=>[null,r.data]).catch(e=>[e,null])
  if(err){
    return res.send('error!')
  }

  // try{
  //   throw new Error('xxx')
  // }catch(e){
  //   // let stack = `[time:] at: ${e.stack.split('at ')[2].replace('\n','')}`
  //   console.log(e.stack)
  //   console.log('data')
  // }

  console.trace('Show me');

  let content = renderToString(<App data={data.data} />)
  let html = `
  <html>
    <head>
      <title>ssr react</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.store = {state:${JSON.stringify(data.data)}}
      </script>
      <script src="/static/js/index.js"></script>
    </body>
  </html>
  `
  res.send(html)
})

app.listen(2333,()=>{
  console.log('run')
})