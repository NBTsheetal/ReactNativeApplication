import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	headerText: {
		height: 30,
		backgroundColor: '#fff',
		 
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginLeft: 10

	},
	title: {
		flex: 1, color: 'red',
		marginBottom: 3,
		fontSize: 20,
		fontWeight: '200'
	},

	info: {
		backgroundColor: 'rgba(225, 225, 225, 0.8)',
		marginTop: 170,
		height: 230,
		flex: 1,
	},
	upcoming: {
		height: 30,
		backgroundColor: '#fff',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginLeft: 10
	},
});

const Header = (props) => (<View style={styles.container}>
	<View style={styles.headerText}>
		<Text style={{ width: '75%' }}>FEATURED EVENT</Text>
		<Text style={{ width: '25%' }} onPress={()=>props.myscene("EventLists")}>VIEW ALL</Text>
	</View>
	<ImageBackground source={require('../img/background.png')} style={{ height: 300, width: '100%' }}>
		<View style={styles.info}>
			<View style={{ marginLeft: 10, flex: 1, height: 250, }}>
				<Text style={styles.title}>{props.myState1}</Text>
				<Text style={{ flex: 1, marginBottom: 3 }}>{props.myState2}</Text>
				<Text style={{ flex: 1, marginBottom: 3 }}>{props.myState3}</Text>
				<Text style={{ flex: 1, marginBottom: 3 }}>Vanue:</Text>
				<Text style={{ flex: 1, marginBottom: 3 }}>{props.myState4}</Text>
			</View>
		</View>
	</ImageBackground>
	<View style={styles.upcoming}>
		<Text style={{ width: '75%' }}>UPCOMING EVENTS</Text>
		<Text style={{ width: '25%' }}>VIEW ALL</Text>
	</View>
</View>);

export default Header;

