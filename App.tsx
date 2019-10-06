import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

/* eslint-disable no-console */
DeviceInfo.getVersion().then(version => console.log('version: ', version));
DeviceInfo.getBuildNumber().then(buildNr =>
    console.log('build number: ', buildNr)
);
/* eslint-enable no-console */

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}
