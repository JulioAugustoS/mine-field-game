import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content, Button, Text, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';

class Menu extends Component {

    render(){
        return(
            <Container>
                <View style={style.contentTop}>
                    <Icon type="FontAwesome" name="bomb" style={style.bomb} /> 
                    <Text style={style.title}>Mines</Text>
                </View>
                <Content style={style.content}>
                    <Button block info style={style.btn} onPress={() => Actions.game({})}>
                        <Text>Iniciar Jogo</Text>
                    </Button>
                </Content>
                <View style={style.version}>
                    <Text style={{color: '#999'}}>Versão 1.2</Text>
                </View>
            </Container>
        )
    }

}

const style = StyleSheet.create({
    content: {
        padding: 10
    },
    contentTop: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '40%',
        height: '60%',
        alignContent: 'center',
        alignItems: 'center'
    },  
    bomb: {
        color: '#333',
        fontSize: 60
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    btn: {
        marginTop: 10
    },
    version: {
        alignContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    }
})

export default Menu