import React from 'react';
import { ActivityIndicator, ListView, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


import AppBar from '../comps/AppBar';

export default class EventLists extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}
	componentDidMount() {
		return fetch('http://salesdemo.frsolutions.ky/api/v1/events')
			.then((response) => response.json())
			.then((responseJson) => {
				let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
				this.setState({
					isLoading: false,
					dataSource: ds.cloneWithRows(responseJson.data),
				}, function () {
					// do something with new state
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
	render() {
		const { navigate } = this.props.navigation;
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					{/* -----------nav----------*/}
					<AppBar>  </AppBar>
					{/* -----------end nav ---- */}
					<ActivityIndicator />
				</View>
			);
		}
		return (
			<View style={{ flex: 1, paddingTop: 20 }}>
				{/* -----------nav----------*/}
				<AppBar>  </AppBar>
				{/* -----------end nav ---- */}
				<Text>{this.state.title}</Text>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={
						(rowData, sectionID, rowID) =>
							<TouchableHighlight
								activeOpacity={1}
								onPress={()=>navigate("EventSingle")}>
								<View style={styles.item}>
									<Image source={{ uri: 'https://78.media.tumblr.com/avatar_11bca66e40b7_128.png' }}
										style={styles.item_image} />
									<View style={styles.item_meta}>
										<Text style={styles.item_date_title}>{'DATE & TIME:'}</Text>
										<Text style={styles.item_dates}>{rowData.displayStartDate}</Text>
										<Text style={styles.item_date}>{rowData.title}</Text>
										<Text style={styles.item_vanue}>{'VENUE:'+rowData.venue}</Text>
										{/* <Text style={styles.item_vanue_txt}>{rowData.releaseYear}</Text> */}
									</View>
								</View>
							</TouchableHighlight>
					}
				/>
			</View>
		);

	}
	_onPressRow(rowID, rowData) {

		/* rowData.isSelect = !rowData.isSelect;
		var dataClone = this.state.data;
		dataClone[rowID] = rowData;
		this.setState({
			data: dataClone
		}); */

		console.log(rowID);
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
		fontSize: 18,
		color: 'red',
	},
	item: {
		padding: 10,
		borderBottomWidth: 0.5,
		borderBottomColor: "#dddddd",
		margin: 1,
		flexDirection: 'row',
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
		height: 70,
		width: 70,
		borderRadius: 4,
		borderWidth: 0.1,
		borderColor: '#E8EAF6',
	},
	item_meta: {
		marginLeft: 20,
	}
	//--------------
});