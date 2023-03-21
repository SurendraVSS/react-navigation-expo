import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Drawer = ({ navigation, route }) => {
    const name = route.params;
    
    return (
        <View style={styles.container}>
            <Text>{name.userName}</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Drawer Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home', {userName:'surendra'})}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>Go to Home screen</Text>
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

export default Drawer;
