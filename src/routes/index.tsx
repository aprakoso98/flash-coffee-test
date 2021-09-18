import React, { createRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import Transition from './transition';
import Home from 'src/screens/Home';
import Upcoming from 'src/screens/Upcoming';

export const Stack = createStackNavigator()

export const navigationRef = createRef<NavigationContainerRef<{}>>()

const AppRoute = () => {
	return <NavigationContainer ref={navigationRef}>
		<Stack.Navigator screenOptions={{ header: noop, cardStyleInterpolator: Transition.horizontalSlide }}>
			<Stack.Screen name="/upcoming" component={Upcoming} />
			<Stack.Screen name="/" component={Home} />
		</Stack.Navigator>
	</NavigationContainer>
}

export default AppRoute