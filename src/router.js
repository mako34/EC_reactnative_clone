import React, { PureComponent } from "react";

import { KeyboardAvoidingView, NetInfo, StyleSheet, StatusBar } from "react-native";
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import { StackViewStyleInterpolator } from 'react-navigation-stack';

import Home from '@screens/home'
import Favorite from '@screens/favorite'
import Map from '@screens/map'
import Detail from '@screens/map/detail'
import Setting from '@screens/setting'
import TabBarIcon from '@components/tabBarIcon'

import { Asset, AppLoading, DangerZone } from 'expo';

const transitionConfig = () => ({
    screenInterpolator:
        StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(252,252,252)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: 'rgb(248,248,248)'
    },
    // tabBarSelectedItemStyle: {
    //     backgroundColor: 'black',
    // },
    // labelStyle: {
    //     fontWeight: 'bold',
    //     fontSize: 14,
    //     color: '#333'
    // },
});

export default class Root extends PureComponent {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            isReady: false,
        }
    }

    async _cacheResourcesAsync() {
        const images = [
        ];
        const cacheImages = images.map((image) => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages)

    }

    render() {
        let { isReady } = this.state
        if (!isReady) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        this.scenes = Actions.create(
            <Overlay key="overlay">
                <Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
                    <Lightbox key="lightbox">
                        <Stack key="root">
                            <Scene key="Main" hideNavBar>
                                <Tabs
                                    key="TabBar"
                                    onTabOnPress={() => {
                                    }}
                                    showLabel={false}
                                    tabBarStyle={styles.tabBarStyle}
                                >

                                    <Scene key="Map"
                                        icon={(props) => <TabBarIcon name="md-map" {...props} />}>
                                        <Scene key="Map" component={Map} title="EatClub" />
                                        <Scene key="Detail" component={Detail} title="EatClub" />
                                    </Scene>

                                    <Scene key="Home"
                                        icon={(props) => <TabBarIcon name="md-home" {...props} />}>
                                        <Scene key="Home" component={Home} title="EatClub" />
                                    </Scene>

                                    <Scene key="Favorite"
                                        icon={(props) => <TabBarIcon name="md-heart" {...props} />}>
                                        <Scene key="Favorite" component={Favorite} title="EatClub" />

                                    </Scene>

                                    <Scene key="Setting"
                                        icon={(props) => <TabBarIcon name="md-settings" {...props} />}>
                                        <Scene key="Setting" component={Setting} title="EatClub" />
                                    </Scene>
                                </Tabs>
                            </Scene>
                        </Stack>
                    </Lightbox>
                </Modal>
            </Overlay>
        );
        return (
            <KeyboardAvoidingView
                behavior={'padding'}
                style={{ flex: 1 }}>
                <Router hideNavBar scenes={this.scenes} />
            </KeyboardAvoidingView>
        );
    }
}