import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Menu from '../views/Menu'
import Game from '../views/Game'

class Routers extends Component {

    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="menu" component={Menu} hideNavBar />
                    <Scene key="game" component={Game} hideNavBar />
                </Stack>
            </Router>
        )
    }

}

export default Routers