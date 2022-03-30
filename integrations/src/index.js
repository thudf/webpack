// Import fonts
import './fonts.css';

// Import jQuery
import $ from 'jquery';

const body = $('body');

const p = $("<p></p>").text("Inserindo texto").css("color", "red");

body.append(p);