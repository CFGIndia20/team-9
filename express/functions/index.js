const functions = require('firebase-functions');
const admin = require("firebase-admin");

const express = require("./express");

admin.initializeApp();

exports.Express =  functions.https.onRequest(express)

