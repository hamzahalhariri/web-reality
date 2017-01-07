import React from "react"


export default class WebVR extends React.Component {

	constructor() {
		super()
		this.state = {
			title: "Welcome",
		}
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {
		return (
			<div className='web-vr-app-h1' >
				<h1>
					WEB VR APP
				</h1>
			</div>
		)
	}
}
