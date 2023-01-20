import React, {useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import {NavigationState, PartialState} from '@react-navigation/native';

// TODO: must be tested on real android device

const exitRoutes = ['Home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
): any {
  const route = state?.routes[state?.index || 1];

  // Found the active route -- return the name
  if (!route.state) {
    return route.name;
  }

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(
  ref: React.RefObject<any>,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  canExit: (routeName: string) => boolean,
) {
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      const navigation = ref.current;

      if (navigation == null) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigation.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // let the system know we've not handled this event
        return false;
      }

      // we can't exit, so let's turn this into a back action
      if (navigation.canGoBack()) {
        navigation.goBack();

        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [ref]);
}
