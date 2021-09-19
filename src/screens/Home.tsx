import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { LayoutRectangle, ScrollView } from 'react-native';
import { Image, useTicker } from 'react-native-ts-aprakoso98';
import { useDispatch } from 'react-redux';
import { ActivityIndicator, BoxSpace, Card, Container, Notification, TouchableOpacity, View, Wrapper, WrapperItem } from 'src/components';
import Button from 'src/components/Button';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
import Text, { TextBold, TextPlaceholder, TextSemi } from 'src/components/Text';
import Wave from 'src/components/Wave';
import { useSelector } from 'src/redux';
import { actionSchedules } from 'src/redux/schedules';
import { clockIn, clockOut } from 'src/utils/api';
import { sizes } from 'src/utils/constants';

const Home = ({ navigation }) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(actionSchedules())
	}, [])
	return <Container>
		<Header
			renderLeftAccessory={() => <View style={{ borderRadius: sizes.box, overflow: 'hidden' }} height={sizes.container} width={sizes.container}>
				<Image resizeMode="contain" source={require('src/assets/images/bambang.png')} />
			</View>}
			title="Live attendance"
		/>
		<Timer />
		<BoxSpace.B />
		<ScrollView>
			<WrapperItem>
				<TodaySchedules navigation={navigation} />
				<BoxSpace.B />
				<NextSchedules navigation={navigation} />
			</WrapperItem>
		</ScrollView>
		<BoxSpace.B />
		<WrapperItem row>
			<Button flex color="success" onPress={clockIn}>CLOCK IN</Button>
			<BoxSpace.B />
			<Button color="secondary" onPress={clockOut} flex>CLOCK OUT</Button>
		</WrapperItem>
	</Container>
}

export default Home

const Timer = () => {
	const [now, setNow] = useState(moment())
	const hour = now.format('HH : mm : ss')
	const date = now.format('dddd, D MMM YYYY')
	useEffect(() => {
		const interval = setTimeout(() => {
			setNow(moment())
		}, 1000)
		return () => {
			clearTimeout(interval)
		}
	}, [now])
	return <View backgroundColor="primary" style={{ overflow: 'hidden', borderBottomEndRadius: sizes.contentLarge, borderBottomStartRadius: sizes.contentLarge }}>
		<BoxSpace.D />
		<TextSemi alignCenter size="x_big">{hour}</TextSemi>
		<TextSemi alignCenter size="t_big">{date}</TextSemi>
		<BoxSpace.F />
	</View>
}

const TodaySchedules = ({ navigation }) => {
	const dispatch = useDispatch()
	const now = moment()
	const { SCHEDULES } = useSelector(state => state)
	const currentSchedule = SCHEDULES[now.format('YYYY-MM-DD')]
	const { location, clockIn, clockOut, clockInTime, clockOutTime } = currentSchedule ?? {}
	const iTime = clockInTime ? moment(`${now.format('YYYY-MM-DD')} ${clockInTime}`).format('HH : mm') : '-- : --'
	const oTime = clockOutTime ? moment(`${now.format('YYYY-MM-DD')} ${clockOutTime}`).format('HH : mm') : '-- : --'
	const [refresh, setRefresh] = useState(false)
	const refreshToday = () => {
		setRefresh(true)
		dispatch(actionSchedules())
		setTimeout(() => setRefresh(false), 1000)
	}
	return <>
		<Wrapper>
			<TextBold>TODAY'S SCHEDULE</TextBold>
			<TouchableOpacity onPress={refreshToday}>
				<TextSemi color="danger">Refresh</TextSemi>
			</TouchableOpacity>
		</Wrapper>
		<BoxSpace.B />
		{refresh && <>
			<ActivityIndicator />
			<BoxSpace.B />
		</>}
		<TouchableOpacity onPress={() => navigation.navigate('/schedule', currentSchedule)}>
			{currentSchedule
				? <Card flex>
					<TextSemi numberOfLines={1}>{location}</TextSemi>
					<BoxSpace.A />
					<Wrapper itemsCenter>
						<Icon size="t_placeholder" name="clock" />
						<BoxSpace.A />
						<TextPlaceholder flex font="SemiBold">{`${clockIn} - ${clockOut}`}</TextPlaceholder>
					</Wrapper>
					<BoxSpace.B />
					<Wrapper>
						<Notification flex itemsCenter backgroundColor="success"><TextSemi color="light">CLOCK IN</TextSemi></Notification>
						<BoxSpace.E height={1} />
						<Notification flex itemsCenter backgroundColor="danger"><TextSemi color="light">CLOCK OUT</TextSemi></Notification>
					</Wrapper>
					<BoxSpace.A />
					<Wrapper>
						<TextSemi alignCenter flex>{iTime}</TextSemi>
						<Text color="darkGrey" alignCenter width={sizes.box}>---</Text>
						<TextSemi alignCenter flex>{oTime}</TextSemi>
					</Wrapper>
				</Card>
				: <Card itemsCenter justifyCenter>
					<TextSemi alignCenter>No schedule</TextSemi>
				</Card>}
		</TouchableOpacity>
	</>
}

const NextSchedules = ({ navigation }) => {
	const { SCHEDULES } = useSelector(state => state)
	const [layout, setLayout] = useState({ width: 10 } as LayoutRectangle)
	const upcoming3Days = Array.apply(null, Array(3)).map((_, i) => moment(i, 'd').format('YYYY-MM-DD'))
	return <>
		<Wrapper>
			<TextBold>NEXT SCHEDULE</TextBold>
			<TouchableOpacity onPress={() => navigation.navigate('/upcoming')}>
				<TextSemi color="danger">See all</TextSemi>
			</TouchableOpacity>
		</Wrapper>
		<BoxSpace.B />
		<ScrollView onLayout={({ nativeEvent: { layout } }) => setLayout(layout)} horizontal>
			{upcoming3Days.rMap((key, _, isLast) => {
				const date = moment(key)
				const data = SCHEDULES[key]
				const day = date.format('dddd')
				const theDate = date.format('D MMM')
				const width = layout.width * 80 / 100
				const { location, clockIn, clockOut } = data ?? {}
				return <>
					<TouchableOpacity onPress={() => navigation.navigate('/schedule', data ?? { date: key })}>
						<Card flex width={width}>
							<TextSemi>{day}</TextSemi>
							<TextSemi size="t_big">{theDate}</TextSemi>
							<BoxSpace.C />
							{data
								? <>
									<TextSemi numberOfLines={1}>{location}</TextSemi>
									<BoxSpace.A />
									<Wrapper itemsCenter>
										<Icon size="t_placeholder" name="clock" />
										<BoxSpace.A />
										<TextPlaceholder flex font="SemiBold">{`${clockIn} - ${clockOut}`}</TextPlaceholder>
									</Wrapper>
								</>
								: <View flex justifyCenter itemsCenter>
									<TextSemi>No schedule</TextSemi>
								</View>}
						</Card>
					</TouchableOpacity>
					{!isLast && <BoxSpace.B />}
				</>
			})}
		</ScrollView>
	</>
}