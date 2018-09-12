import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'

export default props => {
    return(
        <Modal onRequestClose={props.onCancel}
           visible={props.isVisible} animationType='slide'
           transparent={true} >
           <View style={styles.frame}>
                <Text style={styles.title}>Selecione o Nível</Text>
                <TouchableOpacity
                    style={[styles.button, styles.bgEasy]}
                    onPress={() => props.onLevelSelected(0.1)}>
                    <Text style={styles.button}>Fácil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.bgNormal]}
                    onPress={() => props.onLevelSelected(0.2)}>
                    <Text style={styles.button}>Intermediário</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.bgHard]}
                    onPress={() => props.onLevelSelected(0.3)}>
                    <Text style={styles.button}>Difícil</Text>
                </TouchableOpacity>
           </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF'
    },
    button: {
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#f26337'
    }
})