import React from 'react';
import { StyleSheet, Text, View, ImagePropTypes, TextPropTypes } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherCases = {
    Rain: {
        color:['black', 'grey'],
        title: 'Raining',
        subtitle: 'Hate rain',
        icon: 'weather-pouring'
    },
    Clear: {
        color:['skyblue', 'white'],
        title: 'Sunny Day',
        subtitle: 'Should i go outside?',
        icon: 'weather-sunny'
    },
    Clouds: {
        color:['grey', 'darkgrey'],
        title: 'Gloomy Day',
        subtitle: 'Hate this weather',
        icon: 'weather-cloudy'
    }
}

const Weather = ({weatherName, temp}) => {
    return (
            <LinearGradient
                colors={weatherCases[weatherName].color}
                style={styles.gradient}
            >
                <View style={styles.upperContainer}>
                    <MaterialCommunityIcons name={weatherCases[weatherName].icon} size={140} color='white' />
                    <Text style={styles.upperText}>{temp}</Text>
                </View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.lowerText}>{weatherCases[weatherName].title}</Text>
                    <Text style={styles.lowerSubText}>{weatherCases[weatherName].subtitle}</Text>
                </View>
            </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    upperContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    upperText: {
        fontSize: 50,
        color: 'white'
    },
    lowerContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginBottom: 40,
        marginLeft: 40
    },
    lowerText: {
        fontSize: 40,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 20
    },
    lowerSubText: {
        color: 'white',
        fontSize: 20
    }
})

export default Weather