import React from 'react';
import { StackNavigator,DrawerNavigator } from "react-navigation"
import EventSingle from './Pages/EventSingle';
import EventLists from './Pages/EventLists';
import HomePage from './Pages/HomePage';
// custom pages
// import EventSingle from './Pages/EventSingle';
// import EventLists from './Pages/EventLists';

// End custom pages

export default App = DrawerNavigator({
	HomePage: {screen: HomePage},
	EventLists: {screen: EventLists},
	EventSingle: {screen: EventSingle},
	},
{ useNativeAnimations: true, });

const SimpleApp = StackNavigator({
	Home: { screen: HomePage,},
	EventLists:{screen:EventLists,},
	EventSingle:{screen: EventSingle,},
	},

);
  
class App extends React.Component {
	render() {
	  return <SimpleApp />;
	}
}


