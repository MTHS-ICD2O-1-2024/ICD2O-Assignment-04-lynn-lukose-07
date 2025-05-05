// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the cost of an ice cream cone
 */

function calculate() {
  const TAX_RATE = 0.13
  let scoopPrice = 0
  let flavorPrice = 0
  let size = ""
  let flavor = ""

  // how many scoops user would like
  if (document.getElementById("one-scoop").checked) {
    scoopPrice = "$1.00"
    size = "One scoop"
  } else if (document.getElementById("two-scoops").checked) {
    scoopPrice = "$1.50"
    size = "Two scoops"
  } else {
    // You should've selected something, or it's just cone...
  }

  // select your flavor
  if (document.getElementById("vanilla").selected) {
    flavor = "Vanilla"
    flavorPrice = "$0"
  } else if (document.getElementById("chocolate").selected) {
    flavor = "Chocolate"
    flavorPrice = "$0.50"
  } else if (document.getElementById("cookie-cream").selected) {
    flavor = "Cookies and Cream"
    flavorPrice = "$1.00"
  } else if (document.getElementById("choco-dipped-cone").selected) {
    flavor = "Chocolate dipped cone"
    flavorPrice = "$1.50"
  } else {
    // You should've selected something, or you'll just eat air...
  }

  //calculate total price
const subtotal = scoopPrice + flavorPrice
const tax = subtotal * TAX_RATE
const totalPrice = subtotal + tax

  //state what the order was
  document.getElementById("order").innerHTML =
    <p>You ordered " + size + " of " + flavor + "</p>

  // state costs
  document.getElementById("cost").innerHTML.HTML =
  <p>Subtotal: " + subtotal + "  Tax: " + tax + "  Total: " + totalPrice + "</p> 


}
