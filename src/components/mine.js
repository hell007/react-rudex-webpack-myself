import React, {Component} from 'react'

import {config} from '../utils'


export default class Mine extends Component {

  render() {
  	
    return (
	    <section className="mines" >
	        <div className="headers"><img  src="http://www.kunyujie.com/web/css/assets/absolute/header_bg.jpg" /></div>
	        <section className="author">
	          <span> {config.name} </span>
	          <h2> {config.profession}</h2>
	          <em>{config.city}</em>
	        </section>
	        <ul className="contact">
	          <li>Tel：{config.tel}</li>
	          <li>Email：{config.email}</li>
              <li>Github：<a href="https://github.com/hell007" target="_blank">github.com/hell007</a></li>
              <li>Copyright：<a href="{config.website}">{config.copyright}</a></li><ul>
          </ul>
	        </ul>
	    </section>
	  )
  }

}


