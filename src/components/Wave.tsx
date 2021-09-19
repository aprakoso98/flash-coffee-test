import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizes } from 'src/utils/constants';
import { View, Wrapper } from './';

const Waves = (props: Props) => {
	const { baseColor = 'alertLight', color = 'primary' } = props
	const { width, height } = Dimensions.get('window')
	const [a, b] = [sizes.container, sizes.box]
	return <View row>
		<View
			backgroundColor={baseColor}
			height={a}
			width={b}
			style={{
				borderTopEndRadius: a,
				borderTopStartRadius: a,
			}}
		/>
		<View backgroundColor={baseColor}>
			<View
				backgroundColor={color}
				height={a}
				width={b}
				style={{
					borderBottomEndRadius: a,
					borderBottomStartRadius: a,
				}}
			/>
		</View>
	</View>
}

const Wave = () => {
	return null
	return <View>
		<View row>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].rMap(() => {
				return <Waves />
			})}
		</View>
		<View absolute row left={-sizes.box} style={{ opacity: .5 }}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].rMap(() => {
				return <Waves color="primary" baseColor="blue" />
			})}
		</View>
	</View>
}

export default Wave