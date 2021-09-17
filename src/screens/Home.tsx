import React, { useEffect, useState } from 'react';
import { LayoutRectangle, ScrollView } from 'react-native';
import { BoxSpace, Card, Container, View, Wrapper, WrapperItem } from 'src/components';
import Button from 'src/components/Button';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { sizes } from 'src/utils/constants';

const Home = ({ navigation }) => {
	const [layout, setLayout] = useState({ width: 10 } as LayoutRectangle)
	useEffect(() => {
	}, [])
	return <Container>
		<Header
			renderLeftAccessory={() => <BoxSpace.D />}
			renderRightAccessory={() => <Icon style={{ marginRight: -sizes.content }} onPress={noop} name="bell" size="t_title" />}
			title="Live attendance"
		/>
		<View backgroundColor="primary" style={{ overflow: 'hidden', borderBottomEndRadius: sizes.contentLarge, borderBottomStartRadius: sizes.contentLarge }}>
			<BoxSpace.D />
			<Text alignCenter size="t_big">07:30</Text>
			<Text alignCenter>Monday, 5 Apr 2021</Text>
			<BoxSpace.F />
		</View>
		<ScrollView>
			<BoxSpace.B />
			<WrapperItem>
				<Wrapper>
					<Text>TODAY'S SCHEDULE</Text>
					<Text>Refresh</Text>
				</Wrapper>
				<Card>
					<Text>Location</Text>
					<Wrapper itemsCenter>
						<Icon name="clock" />
						<BoxSpace.A />
						<Text flex>08:00 - 17:00</Text>
					</Wrapper>
					<BoxSpace.B />
					<Wrapper>
						<Button flex>CLOCK IN</Button>
						<BoxSpace.E />
						<Button color="secondary" flex>CLOCK OUT</Button>
					</Wrapper>
					<Wrapper>
						<Text alignCenter flex>-- : --</Text>
						<Text color="darkGrey" alignCenter width={sizes.box}>---</Text>
						<Text alignCenter flex>-- : --</Text>
					</Wrapper>
				</Card>
				<Wrapper>
					<Text>NEXT SCHEDULE</Text>
					<Text>See all</Text>
				</Wrapper>
				<ScrollView onLayout={({ nativeEvent: { layout } }) => setLayout(layout)} horizontal>
					{[1, 2, 3].rMap((_, __, isLast) => {
						return <>
							<Card width={layout.width * 80 / 100}>
								<Text>Wednesday</Text>
								<Text size="t_big">7 Apr</Text>
								<BoxSpace.C />
								<Text>Location</Text>
								<Wrapper itemsCenter>
									<Icon name="clock" />
									<BoxSpace.A />
									<Text flex>08: 00 - 17: 00</Text>
								</Wrapper>
							</Card>
							{!isLast && <BoxSpace.B />}
						</>
					})}
				</ScrollView>
			</WrapperItem>
		</ScrollView>
		<WrapperItem row>
			<Button flex onPress={() => navigation.navigate('/upcoming')}>CLOCK IN</Button>
			<BoxSpace.E />
			<Button color="secondary" flex>CLOCK OUT</Button>
		</WrapperItem>
	</Container>
}

export default Home
