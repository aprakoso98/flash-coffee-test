import React from 'react';
import { ScrollView } from 'react-native';
import { BoxSpace, Card, Container, View, Wrapper, WrapperItem } from 'src/components';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { sizes } from 'src/utils/constants';

const Upcoming = ({ navigation, route }) => {
	return <Container>
		<Header
			onPress={navigation.goBack}
			renderRightAccessory={() => <Icon style={{ marginRight: -sizes.content }} onPress={noop} name="sync" size="t_title" />}
			title="Upcoming schedule"
		/>
		<ScrollView>
			<WrapperItem>
				<Text>APRIL 2021</Text>
				{[1, 2, 3, 4, 5, 6, 7].rMap((_, __, isLast) => {
					return <>
						<Wrapper>
							<View>
								<Text>MON</Text>
								<Text>{_}</Text>
							</View>
							<BoxSpace.A />
							<Card flex>
								<Text>Location</Text>
								<Wrapper itemsCenter>
									<Icon name="clock" />
									<BoxSpace.A />
									<Text flex>08: 00 - 17: 00</Text>
								</Wrapper>
							</Card>
						</Wrapper>
						{!isLast && <BoxSpace.B />}
					</>
				})}
			</WrapperItem>
		</ScrollView>
	</Container>
}

export default Upcoming