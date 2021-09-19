import moment from 'moment';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { BoxSpace, Card, Container, Notification, View, Wrapper, WrapperItem } from 'src/components';
import Button from 'src/components/Button';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
import Text, { TextBold, TextPlaceholder, TextSemi } from 'src/components/Text';
import { useSelector } from 'src/redux';
import { sizes } from 'src/utils/constants';

const Upcoming = ({ navigation, route }) => {
	const { SCHEDULES } = useSelector(state => state)
	const defaultWeekdays = Array.apply(null, Array(7)).map((_, i) => moment(i, 'd').startOf('week').isoWeekday(i + 1).format('YYYY-MM-DD'))
	const now = moment()
	return <Container>
		<Header
			onPress={navigation.goBack}
			title="Upcoming schedule"
		/>
		<ScrollView>
			<WrapperItem>
				<BoxSpace.B />
				<TextBold>{now.format('MMMM YYYY').toUpperCase()}</TextBold>
				<BoxSpace.B />
				{defaultWeekdays.rMap((key, _, isLast) => {
					const data = SCHEDULES[key]
					const { location, clockIn, clockOut } = data ?? {}
					const date = moment(key)
					const day = date.format('ddd')
					const theDate = date.format('D')
					const isToday = date.format('YYYY-MM-DD') === now.format('YYYY-MM-DD')
					return <>
						<TouchableOpacity onPress={() => navigation.navigate('/schedule', data ?? { date: key })}>
							<Wrapper>
								<View itemsCenter width="20%">
									<Text color="grey">{day.toUpperCase()}</Text>
									<TextSemi color={isLast ? 'danger' : 'dark'}>{theDate}</TextSemi>
								</View>
								<BoxSpace.A />
								{data
									? <Card flex>
										<TextSemi numberOfLines={1}>{location}</TextSemi>
										<BoxSpace.A />
										<Wrapper itemsCenter>
											<Icon size="t_placeholder" name="clock" />
											<BoxSpace.A />
											<TextPlaceholder font="SemiBold">{`${clockIn} - ${clockOut}`}</TextPlaceholder>
											<BoxSpace.A />
											{isToday && <Notification backgroundColor="danger">
												<TextSemi color="light">TODAY</TextSemi>
											</Notification>}
											<View flex />
										</Wrapper>
									</Card>
									: <Card flex itemsCenter justifyCenter>
										<TextSemi alignCenter>No schedule</TextSemi>
									</Card>}
							</Wrapper>
						</TouchableOpacity>
						{!isLast && <BoxSpace.B />}
					</>
				})}
			</WrapperItem>
		</ScrollView>
	</Container>
}

export default Upcoming