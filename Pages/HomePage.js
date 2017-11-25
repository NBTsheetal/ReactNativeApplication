import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, ListView } from 'react-native';
import Header from '../comps/Header';
import List from '../comps/List.js'
import AppBar from '../comps/AppBar';
export default class HomePage extends React.Component {
	state = {
		myState1: "Diablo",
		myState2: "Date & Time",
		myState3: "October 25th,2017 @ 8:00 PM",
		myState4: "The Abacus, The Paseo At Camana Bay",
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{ flex: 1, paddingTop: 20 }}> 
				<AppBar>  </AppBar> 
				<ScrollView> 
					<Header myscene = {navigate} myState1={this.state.myState1} myState2={this.state.myState2} myState3={this.state.myState3} myState4={this.state.myState4} />
					<List  navigation = {navigate}/>
				</ScrollView>
			</View>
		);
	}
}






