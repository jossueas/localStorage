// Variables
const listaTweets = document.getElementById('lista-tweets');



// Event Listeners

eventListeners();

function eventListeners() {
     //When we send the form
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     // erase tweets
     listaTweets.addEventListener('click', borrarTweet);

     // content loaded
     document.addEventListener('DOMContentLoaded', localStorageListo);
}



// Functions


// add Tweet to form
function agregarTweet(e) {
     e.preventDefault();
     // read the text area
     const tweet = document.getElementById('tweet').value;
     // creato remove botton
     const botonBorrar = document.createElement('a');
     botonBorrar.classList = 'borrar-tweet';
     botonBorrar.innerText = 'X';

     // Crear elemento y añadirle el contenido a la lista

     // create element and add content to the list
     const li = document.createElement('li');
     li.innerText = tweet;
     // add botton erease to the tweet X
     li.appendChild(botonBorrar);
     // add tweet to the list
     listaTweets.appendChild(li);

     // add to the local storage
     agregarTweetLocalStorage(tweet);
}
// Remove tweet fron the DOM
function borrarTweet(e) {
     e.preventDefault();
     if(e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
          borrarTweetLocalStorage(e.target.parentElement.innerText);
     } 
}
// Show data in the localStorage 
function localStorageListo() {
     let tweets;

     tweets = obtenerTweetsLocalStorage();

     tweets.forEach(function(tweet) {
          // create botton erase
          const botonBorrar = document.createElement('a');
          botonBorrar.classList = 'borrar-tweet';
          botonBorrar.innerText = 'X';

         // create element and add content to the list

          const li = document.createElement('li');
          li.innerText = tweet;
          // añade el botón de borrar al tweet
          // add botton to remove tweet

          li.appendChild(botonBorrar);
          // add tweet to the list
          listaTweets.appendChild(li);
     });
}

// Add tweet to local Storese 
function agregarTweetLocalStorage(tweet) {
     let tweets;
     tweets = obtenerTweetsLocalStorage();
     // add to new tweet
     tweets.push(tweet);
     // convert from stream to array
     localStorage.setItem('tweets', JSON.stringify(tweets) );
}

// check elements in the localstorage,return one array

function obtenerTweetsLocalStorage() {
     let tweets;
     // review values in the local Storage
     if(localStorage.getItem('tweets') === null) {
          tweets = []; 
     } else {
          tweets = JSON.parse(localStorage.getItem('tweets') );
     }
     return tweets;
}

// Delet tweets from the local storage

function borrarTweetLocalStorage(tweet) {

     let tweets, tweetBorrar;
     // Delete  X from tweet
     tweetBorrar = tweet.substring(0, tweet.length - 1);

     tweets = obtenerTweetsLocalStorage();

     tweets.forEach(function(tweet, index) {
          if(tweetBorrar === tweet) {
               tweets.splice(index, 1);
          }
     }) ;

     localStorage.setItem('tweets', JSON.stringify(tweets) );
}


/// **personalize titles
let title;

title = document.getElementById('mainTitle');

//Change mail title
title.innerText='FM COMUNICACIÓN TAREAS';

//Change title textArea

let titleTextArea;

titleTextArea = document.getElementById('titleTextArea');

//Change
titleTextArea.innerText='Tarea:';



//Change name list

let nameList;

nameList = document.getElementById('nameList');
  //Change

  nameList.innerText='Lista de tareas Pendientes:'






