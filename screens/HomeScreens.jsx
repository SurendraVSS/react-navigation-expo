import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const HomeScreens = ({ navigation,route }) => {
const name = route.params;
   const [data, setData] = useState("adi")

   useEffect(() => {
   
       setData("Aditya")
   }, []);
    return (
        <View style={styles.container}>
            {/* {name ? <Text>{name.userName}</Text>:null} */}
            <Text>{name?.userName}</Text>
            <Text style={{color: 'white',fontWeight: 'bold',fontSize:20}}>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tab', { userName: data })}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15,marginTop:20 }}>Go to Tab screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreens;
