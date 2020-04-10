//manifest.js
/*
Pages
-home
-application form
-process
-investors
-what is a Dapp
*/

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) 
	{
	res.render("home");	
	});
	
router.get('/form', function (req, res) 
	{
	res.render("form");	
	});

router.get('/process', function (req, res) 
	{
	res.render("process");	
	});

router.get('/investors', function (req, res) 
	{
	res.render("invest");	
	});

router.get('/dapp', function (req, res) 
	{
	res.render("dapp");	
	});
