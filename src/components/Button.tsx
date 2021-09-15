import React from 'react';
import { createButton } from 'react-native-ts-aprakoso98';
import { fonts, colors, BtnKey, buttonColors, sizes, textSizes } from "src/utils/constants"

export const Btn = createButton({
	fonts, colors, sizes: { ...sizes, ...textSizes },
	defaultColor: buttonColors.primary,
	props: (props) => {
		return {
			row: true,
			items: 'center',
			justify: 'center',
			textProps: {
				size: 't_placeholder',
				font: 'Bold'
			},
			style: [{
				minHeight: sizes.box,
				borderWidth: (props?.color ?? [])[2] ? 1 : 0,
				borderRadius: sizes._radius,
				padding: sizes.padding,
				paddingHorizontal: sizes.content
			}, props.style]
		}
	}
})

type ButtonProps = Omit<GetProps<typeof Btn>, 'color'> & { uppercase?: boolean, color?: BtnKey }
const Button = (props: ButtonProps) => {
	const { children, uppercase = true, color, ...rest } = props
	return <Btn
		color={buttonColors[color ?? 'primary']}
		children={typeof children === 'string' ?
			uppercase ? children?.toUpperCase() : children : children
		}
		{...rest}
	/>
}

// export const ButtonSquare = (props: ButtonSquareProps) => {
// 	const { ...rest } = props
// 	return <Button width={sizes.box} {...rest} />
// }

const BButtonSquare = createButton({
	fonts, colors, sizes: { ...sizes, ...textSizes },
	props: props => {
		return {
			items: 'center',
			justify: 'center',
			textProps: {
				size: 't_default',
				font: 'Bold',
				color: 'light'
			},
			style: {
				borderRadius: sizes._radius
			}
		}
	}
})
type ButtonSquareProps = Omit<
	ButtonProps,
	'flex' | 'width' | 'height'
> & { size?: keyof typeof sizes }
export const ButtonSquare = (props: ButtonSquareProps) => {
	const { size = 'box', color, children, ...rest } = props
	return <BButtonSquare
		width={sizes[size]} height={sizes[size]}
		color={buttonColors[color ?? 'primary']}
		children={typeof children === 'string' ?
			children?.toUpperCase() : children
		} {...rest}
	/>
}

export default Button