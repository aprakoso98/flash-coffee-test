import moment, { lang } from 'moment';
import React, { useState } from 'react';
import { LayoutRectangle, ScrollView } from 'react-native';
import { Image, useStateObject } from 'react-native-ts-aprakoso98';
import { BoxSpace, Card, Container, View, Wrapper, WrapperItem } from 'src/components';
import Button from 'src/components/Button';
import Header from 'src/components/Header';
import Icon, { IconRight } from 'src/components/Icon';
import Input from 'src/components/Input';
import Text, { TextBold, TextPlaceholder } from 'src/components/Text';
import { addSchedules, editSchedules, Schedule } from 'src/utils/api';
import { colors, sizes } from 'src/utils/constants';
import { Select, ISelectProps, CheckIcon } from 'native-base'
import { Loading } from 'src/components/ModalRoot';
import { useDispatch } from 'react-redux';
import { actionSchedules } from 'src/redux/schedules';

const ScheduleView = ({ navigation, route }) => {
	const _schedule: Schedule = route?.params
	const dispatch = useDispatch()
	const now = moment()
	const [schedule, setSchedule] = useStateObject(_schedule)
	const [layout, setLayout] = useState({ height: 0 } as LayoutRectangle)
	const { date, location, locationDetail, clockIn, clockOut, clockInTime, clockOutTime } = schedule
	const isNew = !_schedule.clockIn
	const [editable, setEditable] = useState(isNew ? true : false)
	const time = moment(date)
	const iTime = clockInTime ? moment(`${now.format('YYYY-MM-DD')} ${clockInTime}`).format('HH : mm') : '-- : --'
	const oTime = clockOutTime ? moment(`${now.format('YYYY-MM-DD')} ${clockOutTime}`).format('HH : mm') : '-- : --'
	const dataTime = Array.apply(null, Array(24)).map((_, i) => {
		const label = moment(i, 'h').startOf('hour').format('HH:mm')
		return { label, id: label }
	})
	const toggleEdit = async () => {
		if (editable) {
			if (clockIn?.length > 0 && clockOut?.length > 0) {
				if (location?.length > 0) {
					if (locationDetail?.length > 0) {
						if (isNew) {
							await addSchedules(schedule)
						} else {
							await editSchedules(schedule)
						}
						dispatch(actionSchedules())
						Loading.hide()
						navigation.goBack()
						setEditable(false)
					} else {
						Alert('Please input the location detail')
					}
				} else {
					Alert('Please input the location')
				}
			} else {
				Alert('Please select the time schedule')
			}
		} else {
			setEditable(true)
		}
	}
	return <Container>
		<Header
			onPress={navigation.goBack}
			renderRightAccessory={() => <IconRight onPress={toggleEdit} solid name={editable ? 'check' : 'edit'} />}
			title={time.format('D MMMM YYYY')}
		/>
		<BoxSpace.B />
		<ScrollView>
			<WrapperItem>
				<TextBold>STORE</TextBold>
				<BoxSpace.B />
				<Card row>
					<View backgroundColor="alertLight" onLayout={({ nativeEvent: { layout } }) => setLayout(layout)} width="20%" style={{ height: layout.width, overflow: 'hidden', borderRadius: sizes.content }}>
						<Image source={{ uri: 'https://lh3.googleusercontent.com/ogw/ADea4I48CA1QY2NpPXe-2cZV1KupGHhTr1Tj3jXMhKRpuQ=s64-c-mo' }} />
					</View>
					<BoxSpace.B />
					<View flex>
						{editable
							? <Input label="Location" value={location} onChangeText={location => setSchedule({ location })} />
							: <TextBold>{location}</TextBold>}
						<BoxSpace.B />
						{editable
							? <Input multiline label="Location detail" value={locationDetail} onChangeText={locationDetail => setSchedule({ locationDetail })} />
							: <Text color="grey">{locationDetail}</Text>}
					</View>
				</Card>
				<BoxSpace.B />
				<TextBold>TIME SCHEDULE</TextBold>
				<BoxSpace.B />
				<Card row itemsCenter>
					<Icon size="t_placeholder" name="clock" />
					<BoxSpace.A />
					{editable
						? <Wrapper itemsCenter flex>
							<View height={sizes.box} flex>
								<ASD
									placeholder="From"
									onValueChange={clockIn => setSchedule({ clockIn })}
									value={clockIn}
									data={dataTime}
								/>
							</View>
							<Text> - </Text>
							<View height={sizes.box} flex>
								<ASD
									placeholder="To"
									onValueChange={clockOut => setSchedule({ clockOut })}
									value={clockOut}
									data={dataTime}
								/>
							</View>
						</Wrapper>
						: <TextPlaceholder flex font="SemiBold">{`${clockIn} - ${clockOut}`}</TextPlaceholder>}
				</Card>
				<BoxSpace.B />
				<TextBold>CLOCK IN</TextBold>
				<BoxSpace.B />
				<Card row itemsCenter>
					<Icon size="t_placeholder" name="qrcode" />
					<BoxSpace.A />
					<TextPlaceholder flex font="SemiBold">{iTime}</TextPlaceholder>
				</Card>
				<BoxSpace.B />
				<TextBold>CLOCK OUT</TextBold>
				<BoxSpace.B />
				<Card row itemsCenter>
					<Icon size="t_placeholder" name="qrcode" />
					<BoxSpace.A />
					<TextPlaceholder flex font="SemiBold">{oTime}</TextPlaceholder>
				</Card>
				<BoxSpace.B />
			</WrapperItem>
		</ScrollView>
	</Container>
}

export default ScheduleView

type Props = ISelectProps & {
	data: Dict<string, 'label' | 'id'>[]
	value?: string
}
const ASD = (props: Props) => {
	const { data, value, ...rest } = props
	return <Select
		borderWidth={0}
		width="100%"
		height="100%"
		selectedValue={value}
		_selectedItem={{
			bg: colors.primary,
			endIcon: <CheckIcon size={5} />,
		}} {...rest}>
		{data.rMap(({ id, label }) => <Select.Item label={label} value={id as string} />)}
	</Select>
}