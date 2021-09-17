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
	renderLeftAccessory?: () => JSX.Element
}
const Header = (props: HeaderProps) => {
	const { title, onPress, renderLeftAccessory: LAccs, renderRightAccessory: RAccs = noop } = props
	return <Wrapper backgroundColor="primary" height={50} justifyBetween itemsCenter>
		<BoxSpace.C />
		<View itemsStart width="15%">
			{LAccs ? <LAccs /> : <Btn
				width="100%"
				justify="flex-start"
				onPress={onPress}
				disabled={!onPress}
				style={{ paddingHorizontal: 0 }}
				color={['']}>
				{onPress && <Icon size="t_title" name="chevron-left" />}
			</Btn>}
		</View>
		<BoxSpace.A />
		<Text flex alignCenter numberOfLines={1} font="Bold">{title?.toUpperCase()}</Text>
		<BoxSpace.A />
		<View itemsEnd width="15%">
			<RAccs />
		</View>
		<BoxSpace.C />
	</Wrapper>
}

export default Header