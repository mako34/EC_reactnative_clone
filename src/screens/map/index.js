import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import MapView from 'react-native-maps';

import { FontAwesome } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux';

export default class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: "David's Kitchen",
                    coordinate: {
                        latitude: -33.875675300000005,
                        longitude: 151.20859959999999
                    },
                    duration: 'Hours: 12:00 PM - 9:15 PM',
                    location: '225-227 Castlereagh Street',
                    image: 'https://dinnerdeal.backendless.com:443/api/e14e5098-2393-6d4a-ff80-f5564e042100/v1/files/restaurant_images/F914EC53-520B-0267-FF15-E1E456B87900_image_0_1547688918399.jpg'
                },
                {
                    title: 'Pho Mumum',
                    coordinate: {
                        latitude: -33.8843387,
                        longitude: 151.20184799999998
                    },
                    duration: 'Hours: 12:00 PM - 9:15 PM',
                    location: '8-14 Broadway',
                    image: 'http://dinnerdeal.backendless.com:80/api/e14e5098-2393-6d4a-ff80-f5564e042100/v1/files/restaurant_images/B56C8184-03CF-5FCD-FFC1-29C209097800_image_1_1531369840.jpg'
                },
                {
                    title: 'Clove Lane',
                    coordinate: {
                        latitude: -33.9034532,
                        longitude: 151.2431043
                    },
                    duration: 'Hours: 12:00 PM - 9:15 PM',
                    location: '9 Clovelly Road',
                    image: 'http://dinnerdeal.backendless.com:80/api/e14e5098-2393-6d4a-ff80-f5564e042100/v1/files/restaurant_images/EF258FA3-EB66-479F-FF8D-F36421914A00_image_4_1532596923.jpg'
                },
                {
                    title: "MK's Indian Restaurant",
                    coordinate: {
                        latitude: -33.8876807,
                        longitude: 151.1669641
                    },
                    duration: 'Hours: 12:00 PM - 9:15 PM',
                    location: '123 Parramatta Road',
                    image: 'http://dinnerdeal.backendless.com:80/api/e14e5098-2393-6d4a-ff80-f5564e042100/v1/files/restaurant_images/EF258FA3-EB66-479F-FF8D-F36421914A00_image_4_1533285921.jpg'
                }
            ]
        }
    }
    render() {
        let { items } = this.state
        return (
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: -33.875675300000005,
                        longitude: 151.20859959999999,
                        longitudeDelta: 0.005,
                        latitudeDelta: 0.005
                    }}
                >
                    {items.map((item, index) => <MapView.Marker
                        key={index}
                        onPress={() => Actions.Detail({ item })}
                        coordinate={item.coordinate}
                    >
                        <FontAwesome name="map-marker" color={'rgb(223,32,10)'} size={40} />
                    </MapView.Marker>
                    )}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})