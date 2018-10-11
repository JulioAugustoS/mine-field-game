import React, {Component} from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import params from '../params'
import Field from '../componentes/Field'
import MineField from '../componentes/MineField'
import Header from '../componentes/Header'
import LevelSelection from '../screens/LevelSelection'
import { 
	createMinedBoard, 
	cloneBoard, 
	openField, 
	hadExplosion, 
	wonGame, 
	showMines, 
	invertFlag, 
	flagsUsed 
} from '../functions'

class Game extends Component {

	constructor(props){
		super(props)
		this.state = this.createState()
    }
    
    win = () => {
        Alert.alert(
            'Parabéns!', 
            'Você venceu',
            [
                {
                    text: 'Iniciar Novo Jogo',
                    onPress: () => this.setState(this.createState()),
                    style: 'default'
                },
                {
                    text: 'Voltar ao Menu',
                    onPress: () => Actions.menu({}),
                    style: 'cancel'
                }
			],
			{ cancelable: false }
        )
    }

    lost = () => {
        Alert.alert(
            'Game Over!', 
            'Tente novamente',
            [
                {
                    text: 'Iniciar Novo Jogo',
                    onPress: () => this.setState(this.createState()),
                    style: 'default'
                },
                {
                    text: 'Voltar ao Menu',
                    onPress: () => Actions.menu({}),
                    style: 'cancel'
				}
			],
			{ cancelable: false }
        )
    }

	minesAmount = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()
		return Math.ceil(cols * rows * params.difficultLevel)
	}

	createState = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()
		return {
			board: createMinedBoard(rows, cols, this.minesAmount()),
			won: false,
			lost: false,
			showLevelSelection: false,
		}
	}

	onOpenField = (row, column) => {
		const board = cloneBoard(this.state.board)
		openField(board, row, column)
		const lost = hadExplosion(board)
		const won = wonGame(board)

		if(lost){
			showMines(board)
			this.lost()
		}

		if(won){
			this.win()
		}

		this.setState({ board, lost, won })
	}

	onSelectField = (row, column) => {
		const board = cloneBoard(this.state.board)
		invertFlag(board, row, column)
		const won = wonGame(board)

		if(won){
			this.win()
		}

		this,this.setState({ board, won })
	}

	onLevelSelected = level => {
		params.difficultLevel = level
		this.setState(this.createState())
	}

	render() {
		return (
			<View style={styles.container}>
				<LevelSelection isVisible={this.state.showLevelSelection}
					onLevelSelected={this.onLevelSelected}
					onCancel={() => this.setState({ showLevelSelection: false })} 
				/>
				<Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
					dificultPress={() => this.setState({ showLevelSelection: true })}
					onFlagPress={() => this.setState({ showLevelSelection: true })} 
				/>
				<View style={styles.board}>
					<MineField board={this.state.board} 
						onOpenField={this.onOpenField}
						onSelectField={this.onSelectField} 
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	board: {
		alignItems: 'center',
		backgroundColor: '#AAA',
	}
});

export default Game
