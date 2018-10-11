import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flag from './Flag'

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <View onPress={props.onFlagPress}
                   style={styles.flagButton}>
                   <Flag bigger />
                </View>
                <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={props.dificultPress}>
                <Text style={styles.buttonLabel}>Dificuldade</Text>    
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#2765F7',
        padding: 10,
        borderRadius: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
    }
})