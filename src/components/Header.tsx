import React from 'react';
import { Wrapper, View } from 'src/components'
import Text from './Text';
import Icon from './Icon';
import { Btn } from './Button';
import { BoxSpace } from './';

type HeaderProps = {
	title: string
	onPress?: () => void
	renderRightAccessory?: () => JSX.Element
}
const Header = (props: HeaderProps) => {
	const { title, onPress, renderRightAccessory: RAccs = noop } = props
	return <View>
		<BoxSpace.B />
		<Wrapper itemsCenter>
			<Btn
				width="70%"
				justify="flex-start"
				onPress={onPress}
				disabled={!onPress}
				style={{ paddingLeft: 0 }}
				color={['']}
			>
				{onPress && <>
					<Icon name="chevron-left" />
					<BoxSpace.B />
				</>}
				<Text numberOfLines={1} font="Bold">{title}</Text>
			</Btn>
			<RAccs />
		</Wrapper>
		<BoxSpace.C />
	</View>
}

export default Header