import React, {Component} from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/params'
import Field from './src/componentes/Field'
import MineField from './src/componentes/MineField'
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines } from './src/functions'

export default class App extends Component {

	constructor(props){
		super(props)
		this.state = this.createState()
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
			lost: false
		}
	}

	onOpenField = (row, column) => {
		const board = cloneBoard(this.state.board)
		openField(board, row, column)
		const lost = hadExplosion(board)
		const won = wonGame(board)

		if(lost){
			showMines(board)
			Alert.alert('Perdeeeeeu', 'Seu Animal')
		}

		if(won){
			Alert.alert('Parabéns', 'Você Venceu!')
		}

		this.setState({ board, lost, won })
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Iniciando o Mines!!!</Text>
				<Text>Tamanho da grade:
					{params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
				<View style={styles.board}>
					<MineField board={this.state.board} 
					 	onOpenField={this.onOpenField} />
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
