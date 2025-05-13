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
    scoopPrice = 1.0
    size = "One scoop"
  } else if (document.getElementById("two-scoops").checked) {
    scoopPrice = 1.5
    size = "Two scoops"
  } else {
    // You should've selected something, or it's just cone...
  }

  // select your flavor
  if (document.getElementById("vanilla").checked) {
    flavor = "Vanilla"
    flavorPrice = 0
  } else if (document.getElementById("chocolate").checked) {
    flavor = "Chocolate"
    flavorPrice = 0.5
  } else if (document.getElementById("cookie-cream").checked) {
    flavor = "Cookies and Cream"
    flavorPrice = 1.0
  } else if (document.getElementById("choco-dipped-cone").checked) {
    flavor = "Chocolate dipped cone"
    flavorPrice = 1.5
  } else {
    // You should've selected something, or you'll just eat air...
  }

  //calculate total price
  const subtotal = scoopPrice + flavorPrice
  const tax = subtotal * TAX_RATE
  const totalPrice = subtotal + tax

  // output
  if (size != "" && flavor != "") {
    document.getElementById("price").innerHTML =
      "<p>Subtotal: $" +
      subtotal.toFixed(2) +
      "<br>Tax: $" +
      tax.toFixed(2) +
      "<br>Total: $" +
      totalPrice.toFixed(2) +
      "</p>"
  } else {
    document.getElementById("price").innerHTML =
      "<p>Please select both the scoops and flavors so that you can get your order!</p>"
  }

  if (size != "" && flavor != "") {
    document.getElementById("order").innerHTML =
      "<p>Size: " + size + "<br>Flavor: " + flavor + "</p>"
  } else {
    document.getElementById("order").innerHTML =
      "<p>Please select both the scoops and flavors so that you can get your order!</p>"
  }
}
