< !DOCTYPE html >

    <html lang = 'en' >

    <
    head >
    <
    meta charset = 'UTF-8' >
    <
    style >
    canvas {
        position: absolute;
        top: 45 % ;
        left: 50 % ;
        width: 640 px;
        height: 640 px;
        margin: -320 px 0 0 - 320 px;
    } <
    /style> <
    /head> <
    body >
    <
    canvas > < /canvas>

    <
    script >
    'use strict';
var canvas = document.querySelector('canvas');
canvas.width = 640;
canvas.height = 640;

var g = canvas.getContext('2d');

var right = {
    x: 1,
    y: 0
};

var down = {
    x: 0 y: 1
};
var left = {
    x: -1,
    y: 0
};

var EMPTY = -1;
var BORDER = -2;

var fallingShape;
var nextShape;
var dim = 640;
var nRows = 18;
var nCols = 12;
var blockSize = 30;
var topMargin = 50;
var scoreX = 400
var scoreY = 200
var titleX = 130;
var titleY = 160;
var clickX = 120; 
var clickY = 400;
var previewCenterX = 467;
var previewCenterY = 97;
var mainFont = 'bold 18x monospace';
<
/script> 
