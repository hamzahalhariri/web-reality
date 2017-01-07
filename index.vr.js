import React from 'react';
import VR from 'react-vr';


class ReactVrTest extends React.Component {

	render() {
		return (
			<VR.View>
				<VR.Pano source={VR.asset('chess-world.jpg')}/>
				<VR.Text 
					style={{
					fontSize: 0.8,
					layoutOrigin: [0.5, 0.5],
					transform: [{translate: [0, 0, -3]}],
					}}>
					"Hamzah Alhariri"
				</VR.Text>
			</VR.View>
		)
	}
}

VR.AppRegistry.registerComponent('ReactVrTest', () => ReactVrTest)