import React from 'react';
import { ActivityIndicator, ListView, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


/*
 * A cross-platform (iOS / Android), fully customizable, React Native Navigation Bar component.
 * https://www.npmjs.com/package/react-native-nav
 * npm install --save react-native-nav
 */

import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'
/* 
-------End React Native Navigation Bar
*/

export default class AppBar extends React.Component {
	  
	render() { 
		return (
			<View>
				{/* -----------nav----------*/}
				<NavBar style={styles}>
					<NavTitle style={styles.nav_title}>
						{"Menu"}
					</NavTitle>
					<NavGroup>
						<Image style={styles.nav_app_logo} source={require('../img/app_logo.png')} />

						<NavButton onPress={() => alert('hi')}>
							<Image style={styles.nav_search_logo} source={require('../img/icon_search.png')} />
							{/* <NavButtonText>
								{"Button"}
							</NavButtonText> */}
						</NavButton>
					</NavGroup>
				</NavBar>
				{/* -----------end nav ---- */} 
			</View>
		);

	}

}

const styles = StyleSheet.create({
	  
	//--navbar
	statusBar: {
		// StatusBar styles here (all view styles are valid) 

		// default iOS styles: 
		// height: IOS_STATUS_BAR_HEIGHT,
		// backgroundColor: '#f5f5f5',

		// default Android styles: 
		height: 0,
		backgroundColor: '#000',
	},
	navBarContainer: {
		// NavBarContainer styles here (all view styles are valid) 
		// unlikely that you will need to add any styles here 
	},
	navBar: {
		// NavBar styles here (all view styles are valid) 

		// default shared styles: 
		borderTopWidth: 0,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		// default iOS styles: 
		// backgroundColor: '#f5f5f5',
		// height: 30,
		// paddingLeft: 8,
		// paddingRight: 8,

		// default Android styles: 
		backgroundColor: '#ffffff',
		height: 60,
		padding: 16,
	},
	nav_title: {
		color: '#000'
	},
	nav_app_logo:{
		resizeMode: 'contain',
		 
		height: 40,
		width: 70,
	},
	nav_search_logo:{
		resizeMode: 'contain', 
		height: 20,
		width: 20,
		 marginTop:10,
	},
	//--End navbar

});