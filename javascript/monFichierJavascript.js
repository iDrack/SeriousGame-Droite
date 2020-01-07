//la fonction abonnements permet l'assignation de gestionnaires d'évènements à un élément cible 
var abonnements = function() {
	document.getElementById("repA").addEventListener("click",repAtest);
	document.getElementById("boutondroiteC1").addEventListener("click",droiteC1);
	document.getElementById("affEquat1").addEventListener("click",b2a);
	document.getElementById("affEquat2").addEventListener("click",b2b);
	document.getElementById("affEquat12").addEventListener("click",b2ab);
	document.getElementById("affEquata").addEventListener("click",b3a);
	document.getElementById("affEquatb").addEventListener("click",b3b);
	document.getElementById("affEquatab").addEventListener("click",b3ab);
	document.getElementById("Roui").addEventListener("click",Boui);
	document.getElementById("Rnon").addEventListener("click",Bnon);
	
	document.getElementById("pane").addEventListener("click",coordonées);//initialiser la fonction de récupération de coordonées
	//tracer un quadrillage dans le canvas
	var c = document.getElementById("pane").getContext('2d'); 
	
	
	
	
	//permet de calculer chacun des petitY possibles
	//aka tracer une droite
	for(var i=0;i<41;i++){
		petitX = Choix[i];
		petitY=(a*petitX)+b;
		grandX= (40*petitX+400);
		grandY= ((40*((-1)*petitY)+400));
			if(i==0){
				var x1=grandX;
				var y1=grandY;
			}
			if(i==40){
				c.beginPath();
				c.strokeStyle = "red";
				c.moveTo(x1,y1);
				c.lineTo(grandX,grandY);
				c.lineWidth=2;
				c.stroke();
			}
				
		}
	

	//quadrillage 
	
	c.beginPath();
	c.strokeStyle = "grey";
	c.lineWidth=0.5;
	x=0;
	y=0;
	
		for(i=0;i<400;i++){
	c.moveTo(x, 0);
	c.lineTo(x, 800);
	c.moveTo(0, y);
	c.lineTo(800, y);
	x=x+40;
	y=y+40;
	}
	c.stroke();
	
	//tracer ordonnée et abscisse dans le canvas
	
	c.beginPath();
	c.lineWidth=2;
	c.strokeStyle = "black";
	c.moveTo(400, 0);
	c.lineTo(400, 800);
	c.moveTo(0,400 );
	c.lineTo(800,400);
	c.stroke();
	
//tracer fleches
	 //triangle ordonnée.
	
	c.fillStyle = "black";
	c.beginPath();
    c.moveTo(408, 15);
    c.lineTo(392, 15);
    c.lineTo(400, 0);
    c.fill();
	c.stroke();
	 //triangle abscisse
	c.beginPath();
    c.moveTo(785, 392);
    c.lineTo(785, 408);
    c.lineTo(800, 400);
    c.fill();
	c.stroke();
	
	var nouvelleEquat = document.getElementById("Nequat").innerHTML ="y="+Na+"x+"+Nb;
	var nouvelleEquat2 = document.getElementById("NNequat").innerHTML ="y="+NNa+"x+"+NNb;
	droite1C1 ();
	
}

	
window.addEventListener("load",abonnements);// lance la fonction abonnements après le chargement de ma page html


repAfinal ="";
repBfinal = "";
var size = 80;
	
	//initialisation de la suite permettant de recupérer une valeur de x entre -10 et 10
	var Choix=new Array();
	Choix[0]=(-10);
	
	var Choix2=new Array();
	Choix2[0]=(-10);
	
	//suite allant de -10 à 10 (peut être appellé pour des val -10 à 10)
	for (var i=0;i<40;i++){
		Choix[i+1]=(Choix[i]+0.5);
	}
	
	for (var i=0;i<20;i++){
		Choix2[i+1]=(Choix2[i]+1);
	}
	//détermine la valeur de a et de b dans y=ax+b
	a=Choix2[Math.floor(20*Math.random() )];
	b=Choix2[Math.floor(20*Math.random() )];
	
	Na=Choix2[Math.floor(20*Math.random() )];
	Nb=Choix2[Math.floor(20*Math.random() )];
	
	NNa=Choix2[Math.floor(20*Math.random() )];
	NNb=Choix2[Math.floor(20*Math.random() )];
	
	alert("Bonjour, vous devez effectuer ce test dans l'ordre (A puis B puis C), vous avez le droit à la calculatrice mais pas à votre cours ou internet.");
	alert("Les droites de la partie A sont en rouge.");
	alert("Les droites de la partie B sont en bleu.");
	alert("Les droites de la partie C sont en orange.");
	alert("Bonne Chance.");
	
	var petitX = 0;
	var petitY=0;

var coordonées=function(e) 
 {
 var c = document.getElementById("pane").getContext('2d'); 
 
	//permet d'obtenir les coordonnées 
	xc=e.clientX-9;
	yc=e.clientY-9;
	
	//permet de tronquer la valeur des coordonées
	
	var xC = Math.round(10*(-10+xc*((10-(-10))/800)))/10;
	var yC = Math.round(10*(-10+(800-yc)*((10-(-10))/800)))/10;
	document.getElementById("x").innerHTML = xC;
	document.getElementById("y").innerHTML = yC;
 
  }
 repA3=0; 

 //var permettant de vérifier les réponses de A

  var repAtest=function(){
	 
	//permet de vérifier le coefficient directeur
		Yb=a*(2)+b;
        Ya=b;
        Xb=2;
        Xa=0;
        num=(Yb-Ya);
        denom=(Xb-Xa);
        coef=(Yb-Ya)/(Xb-Xa)
  
	    var repa=document.getElementById("repA3a").value;
		var repb=document.getElementById("repA3b").value;
		var repA1=document.getElementById("repA1").value;
		//pour le coefficient directeur.
		if (repA1==coef){
          repAfinal="Votre réponse à la question A1 est bonne."+"<br>";
            }
        else if (repA1==num+"/"+denom){
            repAfinal="Votre réponse à la question A1 est bonne."+"<br>";
            }
        else{repAfinal="Votre réponse à la question A1 est fausse, <br> la bonne réponse est :"+num+"/"+denom+" ou "+coef+"<br>";
                }
	
	
	
	//permet de vérifier  valeur de l’ordonnée à l’origine
	var repordo=document.getElementById("repA2").value;
	if (repordo == b){
			repAfinal=repAfinal+"Votre réponse à la question A2 est bonne."+"<br>";
			}
			else {repAfinal=repAfinal+"Votre réponse à la question A2 est fausse, <br> la bonne réponse est :"+b+"<br>";	
				}
	
	
	//var permettant de vérifier l'équation de droite
	    var repa=document.getElementById("repA3a").value;
		var repb=document.getElementById("repA3b").value;
		if (a == repa && b == repb){
			var repAfinal=repAfinal+"Votre réponse à la question A3 est bonne."+"<br>";
				}
			else{repAfinal=repAfinal+"Votre réponse à la question A3 est fausse, <br> la bonne réponse est :"+a+"x+"+b+"<br>";
			}
	 
	document.getElementById("reponseA").innerHTML=repAfinal;
  }
  
  
    //affichage de la droite de la question b2


	//premier cercle pour la première droite à tracer
  var b2a=function(){
	var c = document.getElementById("pane").getContext('2d'); 
	var coordonées=function(e) 
	{
	xc=e.clientX-9;
	yc=e.clientY-9;
	}
	for(var i=0;i<41;i++){
		peXb = xc;
		peYb=yc;
		xci=xc;
		yci=yc;
		grXb= (peXb);
		grYb= (peYb);
			if(i==0){
				var x1b=grXb;
				var y1b=grYb;
			}
			if(i==40){
				c.beginPath();
				c.strokeStyle = "blue";
				c.arc(xci,yci,2,0,2*Math.PI);
				c.fill();
				c.lineWidth=2;
				c.stroke();
			}
				
		}
  }
 

	//Deuxième cercle pour la première droite à tracer
		xco=0;
		yco=0;
  var b2b=function(){
	var c = document.getElementById("pane").getContext('2d'); 
	var coordonées=function(e) 
	{	
	xc=e.clientX-9;
	yc=e.clientY-9;
	}
	for(var i=0;i<41;i++){
		xco=xc;
		yco=yc;
		peXb = xco;
		peYb=yco;
		grXb= (peXb);
		grYb= (peYb);
			if(i==0){
				var x1b=grXb;
				var y1b=grYb;
			}
			if(i==40){
				c.beginPath();
				c.strokeStyle = "blue";
				c.arc(xco,yco,2,0,2*Math.PI);
				c.fill();
				c.lineWidth=2;
				c.stroke();
			}
				
		}
  }
  		//Tracer la première droite
		var b2ab=function(){
			var c = document.getElementById("pane").getContext('2d');
			c.beginPath();
			c.strokeStyle = "blue";
			c.moveTo(xci,yci);
			c.lineTo(xco,yco);
			c.lineWidth=2;
			c.stroke();
				
		}
	

	//premier cercle pour la deuxième droite à tracer
  var b3a=function(){
	var c = document.getElementById("pane").getContext('2d'); 
	var coordonées=function(e) 
	{
	xc=e.clientX-9;
	yc=e.clientY-9;
	}
	for(var i=0;i<41;i++){
		peXb = xc;
		peYb=yc;
		xci=xc;
		yci=yc;
		grXb= (peXb);
		grYb= (peYb);
			if(i==0){
				var x1b=grXb;
				var y1b=grYb;
			}
			if(i==40){
				c.beginPath();
				c.strokeStyle = "blue";
				c.arc(xci,yci,2,0,2*Math.PI);
				c.fill();
				c.lineWidth=2;
				c.stroke();
			}
				
		}
  }
	
	
	//Deuxième cercle pour la deuxième droite à tracer
		xco=0;
		yco=0;
  var b3b=function(){
	var c = document.getElementById("pane").getContext('2d'); 
	var coordonées=function(e) 
	{	
	xc=e.clientX-9;
	yc=e.clientY-9;
	}
	for(var i=0;i<41;i++){
		xco=xc;
		yco=yc;
		peXb = xco;
		peYb=yco;
		grXb= (peXb);
		grYb= (peYb);
			if(i==0){
				var x1b=grXb;
				var y1b=grYb;
			}
			if(i==40){
				c.beginPath();
				c.strokeStyle = "blue";
				c.arc(xco,yco,2,0,2*Math.PI);
				c.fill();
				c.lineWidth=2;
				c.stroke();
			}
				
		}
  }

  		//Tracer la deuxième droite
		var b3ab=function(){
			var c = document.getElementById("pane").getContext('2d');
			c.beginPath();
			c.strokeStyle = "blue";
			c.moveTo(xci,yci);
			c.lineTo(xco,yco);
			c.lineWidth=2;
			c.stroke();
			

		}
	
  
	//Sont elles parallèles ?
	var Boui=function(){
			if (NNa == Na){
				repBfinal=repAfinal+"Vous avez bon à la question B2."+"<br>";
			}
			else {repBfinal=repAfinal+"Vous avez faux à la question B2, regardez le coefficient directeur."+"<br>";	
			
		}

		document.getElementById("reponseB").innerHTML=repBfinal;
	}
	
 	var Bnon=function(){
			if (NNa != Na){
				repBfinal=repAfinal+"Vous avez bon à la question B2."+"<br>";
			}
			else {repBfinal=repAfinal+"Vous avez faux à la question B2, regardez le coefficient directeur."+"<br>";
		}

		document.getElementById("reponseB").innerHTML=repBfinal;	
	}
  
  
  
	//systéme à deux équations de la pratie c 
	
	//détermine la valeur des b
  var bc1=Choix2[Math.floor(20*Math.random() )];
  var bc2=Choix2[Math.floor(20*Math.random() )];
  
  var droite1C1 = function(){
	 //détermine la valeur des a
	var ac1=Choix2[Math.floor(20*Math.random() )];
	var ac2=Choix2[Math.floor(20*Math.random() )];
	//affiche le systéme à deux équations
	var nouvelleEquatB1 = document.getElementById("syst2equa1").innerHTML ="y="+ac1+"x+"+bc1;
	var nouvelleEquatB2 = document.getElementById("syst2equa2").innerHTML ="y="+ac2+"x+"+bc2;
	
	var c = document.getElementById("pane").getContext('2d');
	 
	
	//affiche les droites
	for(var i=0;i<41;i++){
        petitXc1 = Choix[i];
        petitYc1=(ac1*petitXc1)+bc1;
        grandXc1= (40*petitXc1+400);
        grandYc1= ((40*((-1)*petitYc1)+400));
            if(i==0){
                var x1c1=grandXc1;
                var y1c1=grandYc1;
            }
            if(i==40){
                c.beginPath();
                c.strokeStyle = "orange";
                c.moveTo(x1c1,y1c1);
                c.lineTo(grandXc1,grandYc1);
                c.lineWidth=2;
                c.stroke();
            }

        }
	for(var i=0;i<41;i++){
        petitXc2 = Choix[i];
        petitYc2=(ac2*petitXc2)+bc2;
        grandXc2= (40*petitXc2+400);
        grandYc2= ((40*((-1)*petitYc2)+400));
            if(i==0){
                var x1c2=grandXc2;
                var y1c2=grandYc2;
            }
            if(i==40){
                c.beginPath();
                c.strokeStyle = "orange";
                c.moveTo(x1c2,y1c2);
                c.lineTo(grandXc2,grandYc2);
                c.lineWidth=2;
                c.stroke();
            }

        }
	
	//permet de déterminer si où les droites se coupent
	if(ac1==ac2){
	
	var para = document.getElementById("interrep").innerHTML ="les droites sont paralléles";
	}
	else{
		var eq1y = ((bc2)-(bc1))/((ac1)-(ac2));
		var eq1x = ((eq1y)-(bc1))/((ac1));
		var eq2y = (ac2)*(eq1x)+(bc2);
		document.getElementById("interrep").innerHTML="Les droites se ccoupent en"+eq1x+";"+eq2y;
	}

  }
  
  var droiteC1 = function(){
	  var c = document.getElementById("pane").getContext('2d');
	  c.clearRect(0, 0, 800, 800);
		
	var ac1 = document.getElementById("modequat1").value;
	var ac2 = document.getElementById("modequat2").value;
	
	 
	//quadrillage 
	
	c.beginPath();
	c.strokeStyle = "grey";
	c.lineWidth=0.5;
	x=0;
	y=0;
	
		for(i=0;i<400;i++){
	c.moveTo(x, 0);
	c.lineTo(x, 800);
	c.moveTo(0, y);
	c.lineTo(800, y);
	x=x+40;
	y=y+40;
	}
	c.stroke();
	
	//tracer ordonnée et abscisse dans le canvas
	
	c.beginPath();
	c.lineWidth=2;
	c.strokeStyle = "black";
	c.moveTo(400, 0);
	c.lineTo(400, 800);
	c.moveTo(0,400 );
	c.lineTo(800,400);
	c.stroke();
	
//tracer fleches
	 //triangle ordonnée.
	
	c.fillStyle = "black";
	c.beginPath();
    c.moveTo(408, 15);
    c.lineTo(392, 15);
    c.lineTo(400, 0);
    c.fill();
	c.stroke();
	 //triangle abscisse
	c.beginPath();
    c.moveTo(785, 392);
    c.lineTo(785, 408);
    c.lineTo(800, 400);
    c.fill();
	c.stroke();
	
	//récupére les nouvelles valeurs des a
	var nouvelleEquatB1 = document.getElementById("syst2equa1").innerHTML ="y="+ac1+"x+"+bc1;
	var nouvelleEquatB2 = document.getElementById("syst2equa2").innerHTML ="y="+ac2+"x+"+bc2;
	
    for(var i=0;i<41;i++){
        petitXc1 = Choix[i];
        petitYc1=(ac1*petitXc1)+bc1;
        grandXc1= (40*petitXc1+400);
        grandYc1= ((40*((-1)*petitYc1)+400));
            if(i==0){
                var x1c1=grandXc1;
                var y1c1=grandYc1;
            }
            if(i==40){
                c.beginPath();
                c.strokeStyle = "orange";
                c.moveTo(x1c1,y1c1);
                c.lineTo(grandXc1,grandYc1);
                c.lineWidth=2;
                c.stroke();
            }

        }
	for(var i=0;i<41;i++){
        petitXc2 = Choix[i];
        petitYc2=(ac2*petitXc2)+bc2;
        grandXc2= (40*petitXc2+400);
        grandYc2= ((40*((-1)*petitYc2)+400));
            if(i==0){
                var x1c2=grandXc2;
                var y1c2=grandYc2;
            }
            if(i==40){
                c.beginPath();
                c.strokeStyle = "orange";
                c.moveTo(x1c2,y1c2);
                c.lineTo(grandXc2,grandYc2);
                c.lineWidth=2;
                c.stroke();
            }

        }
	
	if(ac1==ac2){
		var para = document.getElementById("interrep").innerHTML="Les deux droites sont paralléles.";
		}
			else{
		var eq1y = ((bc2)-(bc1))/((ac1)-(ac2));
		var eq1x = ((eq1y)-(bc1))/((ac1));
		var eq2y = (ac2)*(eq1x)+(bc2);
		document.getElementById("interrep").innerHTML="Les droites se ccoupent en"+eq1x+";"+eq2y;
       }
  }

  
  


  
//par TOH-MAS
