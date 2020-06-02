import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './weather'; 

const API_KEY = 'd8d8cf6db7ad526a7ec43b51070a4d75';

export default function App() {
  const [weather, setWeather] = useState({
    temperature:null,
    name: null
  });
  const [isLoading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather()
  }, [getWeather])
  
  const getWeather =() => {
    navigator.geolocation.getCurrentPosition(position => {
      _getWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      setError(error)
    }
    );
  }

  const _getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        setWeather({
          temperature: json.main.temp,
          name: json.weather[0].main
        })
      })
      .catch(error => {
        throw error
      })
      .finally(() => setLoading(true) )
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {isLoading ? (
        <Weather weatherName={weather.name} temp={Math.floor(weather.temperature - 273.15)}/>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator />
          <Text style={styles.loadingText}> Getting weather </Text>
          {error ? <Text style={styles.errorMessage}>{error}</Text> : null }
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 30,
  },
  errorMessage: {
    fontSize: 20,
    color: 'red',
    backgroundColor: 'transparent',
    marginTop: 20
  }
});
