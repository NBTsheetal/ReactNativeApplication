import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, ListView, ActivityIndicator,StyleSheet, Image, Alert } from 'react-native';
import AppBar from '../comps/AppBar';

const styles = StyleSheet.create({
	thumb: {
		width: 80,
		height: 90
	},
	textContainer: {
		flex: 1,
		padding: 10
	},
	separator: {
		height: 1,
		backgroundColor: '#dddddd'
	},
	price: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'red',

	},
	title: {
		fontSize: 14,
		color: 'black',

	},
	rowContainer: {
		flexDirection: 'row',
	},
});

class List extends Component {
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
					title: "title",
					
				}, function () {
					// do something with new state
				});
			})
			.catch((error) => {
				//console.error(error);
				Alert.alert("error to load...")
			});
	}
	alertItemName = (item) => {
		alert(item.vanue)
	 }
	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					{/* -----------nav----------*/}
					{/* <AppBar>  </AppBar> */}
					{/* -----------end nav ---- */}
					<ActivityIndicator />
				</View>
			);
		}
		return (
			<View>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={
						(rowData, sectionID, rowID) =>
						<TouchableOpacity
						key = {rowID}
						style = {styles.container}
						onPress = {()=>this.props.navigation("EventSingle")}
						>

							<View>
								<View style={{ flexDirection: 'row'}}>
									<Image style={styles.thumb} source={require('../img/image2.png')} />
									<View style={styles.textContainer}>
										<Text style={styles.price}>{rowData.displayStartDate}</Text>
										<Text style={styles.title}
											numberOfLines={1}>{rowData.title}</Text>
										<Text style={styles.title}
											numberOfLines={1}>{rowData.venue}</Text>
									</View>
								</View>
								<View style={styles.separator} />
							</View>
						</TouchableOpacity>
					}/>
			</View>
		)
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
export default List;

