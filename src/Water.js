import React, { Component } from 'react';

class Water extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/* edit this number to display appropriate image*/
			currentTemp: 0,
			backgroundImage: '',
		}
	}
	
	onChangeInput = (event) => {
		this.setState({
			currentTemp: event.target.value,
		})
	}

	render() {
		let stateOfMatter;
		let currentTemp = this.state.currentTemp;
		
		const images = [
			{
				image: [
					'https://i.imgur.com/bz74TMA.jpg',
					'https://i.imgur.com/H0HtKTa.jpg',
					'https://i.imgur.com/tbzYsWd.jpg?1'
				]
			},
			{
				image: [
					'https://i.imgur.com/XX0hWhP.jpg',
					'https://i.imgur.com/42GXPiM.jpg',
					'https://i.imgur.com/gE1EoFw.jpg?1'
				]
			},
			{
				image: [
					'https://i.imgur.com/VxtY0qK.jpg',
					'https://i.imgur.com/FdjZuDk.jpg',
					'https://i.imgur.com/ohdquF9.jpg'
				]
			},
			{
				image: [
					'https://i.imgur.com/bBqqmBF.jpg?1',
					'https://i.imgur.com/fclbs2Q.png',
					'https://i.imgur.com/uykLBOW.png'
				]
			}
		];

		let r = Math.floor(Math.random() * 3);
		//console.log(images[r].image[r]);
		let message = '';
		// let currentTemp = 95;
		if(currentTemp >= 95) {
			stateOfMatter = images[0].image[r];
			message = "It's Hot!";
		} else if(currentTemp <= 32) {
			stateOfMatter = images[3].image[r];
			message = "It's Cold!";
		} else if(currentTemp >= 33 && currentTemp <= 65) {
			stateOfMatter = images[2].image[r];
			message = "It's Cool!";
		} else {
			stateOfMatter = images[1].image[r];
			message = "It's Warm!";
		}
		
		const imageStyle = {
			backgroundImage: 'url(' + stateOfMatter + ')',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		}
		return(
			<div className="image" style={imageStyle}>
				<div className="wrapper">
					<h1>What is the temperature?</h1>
					<input className="temp-input"
						type="number" 
						placeholder="00" 
						value={this.state.currentTemp}
						onChange={this.onChangeInput}
					/>
					<div id="message">{message}</div>
				</div>
			</div>
		)
	}
}

export default Water;