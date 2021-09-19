import React, { useState } from 'react';
import AppRoute from './routes';
import store from './redux';
import { Platform, StatusBar } from 'react-native';
import { Root } from 'react-native-ts-aprakoso98';
import { SafeAreaView } from 'src/components'
import { colors } from './utils/constants';
import { Provider, useDispatch } from 'react-redux';
import { SheetRoot } from './components/BottomSheet';
import ModalRoot from './components/ModalRoot';
import { useEffect } from 'react';
import { actionRoute, initStateRoute } from './redux/app';
import { useLayoutEffect } from 'react';
import { NativeBaseProvider } from 'native-base'

const AppContainer = () => {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    dispatch(actionRoute(initStateRoute))
  }, [])
  useLayoutEffect(() => {
    setLoaded(true)
  }, [])
  return <SheetRoot>
    <ModalRoot>
      {loaded && <AppRoute />}
    </ModalRoot>
  </SheetRoot>
}

const App = () => {
  return <SafeAreaView backgroundColor="primary" flex>
    <NativeBaseProvider>
      <Root>
        <StatusBar barStyle="dark-content" backgroundColor={Platform.OS === 'android' ? colors.dark : colors.light} />
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </Root>
    </NativeBaseProvider>
  </SafeAreaView>
}

export default App