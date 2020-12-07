"use strict";

const BASE_GIF_URL = 'gif/';
const BASE_MUSIC_URL = 'music/';
let lst = ['gif1.gif', 'gif2.gif', 'gif3.gif', 'gif4.gif', 'gif5.gif'];

let songs = [
    'chillwithme - faded.mp3',
    'chillwithme - lifeanddeath.mp3',
    'chillwithme - loveisfake.mp3',
    'chillwithme - lucid.mp3',
    'chillwithme - shapeofmyheart.mp3',
    'Everything - Would Be Fine.mp3',
    'Allin1 - Little Nicky.mp3',
    'grandson - Blood __ Water.mp3',
    'grandson - Identity.mp3',
    'grandson - Oh No.mp3',
    'grandson - Riptide.mp3',
    'grandson, Moby Rich - Happy Pill.mp3',
    'Jaiden Stylez - Alive.mp3',
    'K.Flay - Giver.mp3',
    'K.Flay - High Enough.mp3',
    'K.Flay - Make Me Fade.mp3',
    "Kayou. - i don't wanna be.mp3",
    'LXST CXNTURY - AMNESIA.mp3',
    'Sirpreme - 2fourfive6.mp3',
    'Tolebi - Savage.mp3',
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var lastSong = null;
var selection = null;

function selectRandom(){
    while(selection == lastSong){
        selection = Math.floor(Math.random() * getRandomInt(0, songs.length));
        }
        lastSong = selection;
        player.src = BASE_MUSIC_URL + songs[selection];
        let songname = BASE_MUSIC_URL + songs[selection];
        songname = songname.split(BASE_MUSIC_URL);
        songname = songname.slice(1);
        songname = songname.toString().replace(/.mp3/, '');
        document.getElementById('Song_name').innerHTML=songname;
}
let player = document.getElementById("audioplayer");
let audio = document.getElementById("audioplayer");
let slider = document.getElementById("myRange");

player.autoplay=true;
player.addEventListener("ended", selectRandom);

change_gif.src = BASE_GIF_URL + lst[getRandomInt(0, lst.length)];

function play_audio(task) {
	if(task == 'play'){
		$("#audioplayer").trigger('play');
	}
	if(task == 'stop'){
		$("#audioplayer").trigger('pause');
		$("#audioplayer").prop("currentTime",0);
	}
}

selectRandom();
player.play();
window.setInterval(function(){audio.volume = slider.value / 100;}, 10);