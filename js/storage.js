/* global monogatari */


'use strict'

// CSS Presets
var textBoxDefault = `
	color:#ffffff;
	background:#202020;
	border-top-style: solid;
	border-top-color: #333333;
	border-top-width: 2px;
`;
var textBoxE6 = `
	color: #ffffff;
	background: #241111e0;
	border-top-style: solid;
	border-color: #bb6464;
	border-width: 10px;
	max-width: 740px;
	align-self: center;
	border-style: double;
	margin-bottom: 27px;
`;

// Dynamic TextBox CSS
function setTextBoxCSS(cssString) {
	// Get the element
	const element = document.querySelector('[data-component="text-box"]');
	// Change the background color
	element.style.cssText = cssString;
	// Set local Storage
	monogatari.storage({
        textBoxCSS: cssString
    });
}

function getTextBoxCSS(){
    return monogatari.storage('textBoxCSS');
}

// Persistent Storage Variable
monogatari.storage ({
	player: {
		name: '',
		health:5,
		sanity:5,
		care:0,
		day:1,
	},
    textBoxCSS: textBoxDefault,
});

var audio_stats_up = new Audio('assets/sounds/stats_up.mp3');
var audio_stats_down = new Audio('assets/sounds/stats_down.mp3');

// 查询对应的画廊是否解锁
function check_gallery(field){
    const game_name = monogatari._settings.Name;
    const game_version = monogatari._settings.Version;
    const gallery = localStorage.getItem(game_name + '::GameData::'+ game_version + '_gallery');
    const r = gallery.indexOf(field);
    return r != -1;
}

// 基础数值的更改

function add_sanity(value){
    const {sanity} = monogatari.storage('player');
    monogatari.storage({
        player:{
            sanity: sanity + value
        }
    });
    if (value>=0){
        audio_stats_up.play()
    }else{
        audio_stats_down.play()
    }
}

function add_care(value){
    const {care} = monogatari.storage('player');
    monogatari.storage({
        player:{
            care: care + value
        }
    });
}

function add_health(value){
    const {health} = monogatari.storage('player');
    monogatari.storage({
        player:{
            health: health + value
        }
    });
    if (value>=0){
        audio_stats_up.play()
    }else{
        audio_stats_down.play()
    }
}

function unlock_level(level){
  localStorage.setItem(level,1);
}

function lock_level(level){
  localStorage.setItem(level,0);
}

function check_level(level){
    return localStorage.getItem(level);
}