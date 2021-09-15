import React from 'react';
import { createView, createText } from 'react-native-ts-aprakoso98'
import { colors, fonts, sizes, textSizes } from 'src/utils/constants';

export const { SafeAreaView, Divider, Wrapper, View } = createView({
	colors
})

export const Text = createText({
	colors, fonts, sizes: textSizes
})