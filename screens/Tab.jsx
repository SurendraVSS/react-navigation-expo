import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Tab = ({ navigation, route }) => {
    const name = route.params
    
    return (
        <View style={styles.container}>
            <Text>{name.userName}</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Tab Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer',{userName:'Ashvini'})}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>Go to Drawer screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Tab;
