// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // This code will let you guess a number

  const userGuess = parseInt(document.getElementById('user-guess').value)
	const actualNumber = Math.floor(Math.random() * 9)  // returns a random integer from 0 to 9
	var counter = 0

  while (userGuess !== actualNumber) {
		if (userGuess < actualNumber) {
			document.getElementById('answer').innerHTML = userGuess + "is too high"
		} else if (userGuess < actualNumber) {
			document.getElementById('answer').innerHTML = userGuess + "is too low"
		}
	} if (userGuess == actualNumber) {
		document.getElementById('answer').innerHTML = "Congrats! You got it right! The hidden number is " + answer
	}
}
