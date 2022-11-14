import './App.css';
import { useEffect, useState } from 'react';
import Phaser from 'phaser';
import Escena from './componente/Escena';

function App() {

    //uso state de  una variable listo, si no usamos esto los lienzos se acumularan
    const [listo,setListo] = useState(false);

    //usamos el hook para renderice acciones que react no hace
    useEffect(() =>{
          var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
          default: 'arcade',
          arcade: {
              gravity: { y: 100 }
          }
      },
      scene:[Escena]
      //scene: {
      //    preload: preload,
      //    create: create
      //}
   };
  //arranca el juego desde aca.
  var game = new Phaser.Game(config);

  // Trigger cuando el juego esta completamente listo
  game.events.on("LISTO", setListo)

  //Si no pongo esto, se acumulan duplicados del lienzo
  return () => {
    setListo(false);
    game.destroy(true);
  }    

    },[listo]);
 


}

export default App;
