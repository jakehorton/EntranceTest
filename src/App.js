import React from 'react';
import {Toolbar} from './components/toolbar/toolbar.component';
import './App.css'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  title : "This is the first title : ",

		}
	}

	

	render() {
    return (
      <>
		<div id='container'>
			<h1 id='title'>{this.state.title}</h1>
			<h4 id='h4'></h4>
		</div>
			<Toolbar class='toolbar'/>
      </>
    );
  }
}
