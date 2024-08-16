//console.log("Hola Mundoooo");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2>Desarrolladora Front-End</h2>')
    .pauseFor(2500)
    .deleteAll()
   
    .start();