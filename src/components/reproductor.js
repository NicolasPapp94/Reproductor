import React, { Component } from 'react';
import firebase from 'firebase';
var Reproduciendo;
const config = {
    apiKey: 'AIzaSyCcqguc1RuEa46XNSwePVm2O-dHyxKzs-k',
    authDomain: 'botonera-fccfc.firebaseapp.com',
    databaseURL: 'https://botonera-fccfc.firebaseio.com',
    projectId: 'botonera-fccfc',
    storageBucket: 'botonera-fccfc.appspot.com',
    messagingSenderId: '465060720795'
};
firebase.initializeApp(config);
class Reproductor extends Component{

	componentWillMount(){
			const ReproName = firebase.database().ref().child('objeto');
	   		ReproName.on('value', (snapshot)=>{
	      	Reproduciendo = snapshot.val();	      
      		if (Reproduciendo.Repro === false){
				var audio = document.getElementById("Reproductor");	
				audio.src = Reproduciendo.Ultimo;
				audio.volume=1;
			    audio.load();
			    audio.play();
			    audio.onended = function() {
		    	setTimeout(function(){ 
		    		ReproName.set(
				    {
			        	Repro : true,
			        	Ultimo : Reproduciendo.Ultimo,
			        	UltimaRepro:  new Date().toLocaleTimeString()
				    }
			      	).then(()=>{
			      	}).catch((error) => {
			    	    console.log(error);
				 	});
		    	}, 3000);		
				};
			}
	    }); 
  	}


	render(){
		return( 
		<div className="container-fluid">
			<h1> Reproductor de botonitos </h1>
			<audio src="" id="Reproductor"/>
		</div>	
		)
	}	
}
export default Reproductor;