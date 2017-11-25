import React from 'react';
import { ActivityIndicator, ListView, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { DrawerNavigator } from "react-navigation"
 
import AppBar from '../comps/AppBar';

 
export default class EventSingle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
	}
	/* componentDidMount() {
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
				this.setState({
					isLoading: false,
					dataSource: ds.cloneWithRows(responseJson.movies),
					title: responseJson.title,
				}, function () {
					// do something with new state
				});
			})
			.catch((error) => {
				console.error(error);
			});
	} */
	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}
		return (
			<View style={{ flex: 1, paddingTop: 20 }}>
				{/* -----------nav----------*/}
				<AppBar>  </AppBar>
				{/* -----------end nav ---- */}
				<Image source={{
					uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-09/5/14/campaign_images/buzzfeed-prod-fastlane-01/34-cool-and-random-things-you-can-probably-afford-2-24031-1504635679-4_dblbig.jpg'
				}}
					style={styles.item_image} />
				<View style={styles.single_data_wrapper}>
					<Text style={styles.item_date_title}> Diablo</Text>
					<View style={styles.data_item_wrapper}>
						<Image style={styles.data_item_ico} source={require('../img/icon_calender.png')} />
						<View style={styles.data_item_meta}>
							<Text style={styles.data_item_title}>{'Date & Time:'}</Text>
							<Text style={styles.data_item_subtitle}>{'Oct 27th'}</Text>

						</View>
					</View>
					<View style={styles.data_item_wrapper}>
						<Image style={styles.data_item_ico} source={require('../img/icon_venu.png')} />
						<View style={styles.data_item_meta}>
							<Text style={styles.data_item_title}>{'Venu:'}</Text>
							<Text style={styles.data_item_subtitle}>{'Oct 27th'}</Text>
						</View>
					</View>

				</View>
			</View>
		);

	}

}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 4,
		paddingTop: 56,
		backgroundColor: '#E8EAF6',
	},
	//--------------
	item_date_title: {
		fontSize: 22,
		marginTop: 10,
		marginBottom: 10,
	},
	single_data_wrapper: {
		padding: 10,
	},
	data_item_title: {
		fontSize: 14,
		fontWeight: '500'

	},
	data_item_subtitle: {
		fontSize: 12,
		marginTop: 3,
	},
	data_item_wrapper: {

		// borderBottomWidth: 0.5,
		// borderBottomColor: "#dddddd",
		margin: 1,
		flexDirection: 'row',
		marginTop: 20,
	},
	item_vanue: {
		fontSize: 14,
		fontWeight: '100'
	},
	item_vanue_txt: {
		fontWeight: '600'
	},
	item_date: {
		fontSize: 14,
		fontWeight: '100'
	},
	item_image: {
		height: 200,
		width: '100%',
		borderRadius: 4,
		borderWidth: 0.1,
		borderColor: '#E8EAF6',

	},
	data_item_meta: {
		marginLeft: 5,
	},
	data_item_ico: {
		resizeMode: 'contain',
		//resizeMode?: enum('cover', 'contain', 'stretch', 'repeat', 'center')
		//https://facebook.github.io/react-native/docs/image.html
		height: 30,
		width: 30,

	},
	//--------------

});
 