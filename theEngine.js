var imgN = 0;
var win= 0;
function startPlayT1() {
	var ele = document.getElementsByTagName("input");
    for(var i=0;i<ele.length;i++){
      ele[i].disabled = false;
      ele[i].checked = false;
    }
    imgN = 0;
    win = 0;
    var p = document.getElementsByClassName("pilihanT1");
    for (var z=0; z<p.length;z++){
    	p[z].style.backgroundColor= "#A5AD0C";
    }

	document.body.style.background= "#CDD44E";
	document.getElementById("h1").innerHTML="Good Luck!!!";	
	document.getElementById("h1").style.color= "#BA29A9";
	document.getElementById("menu").style.display= "none";
	document.getElementById("hangman").style.display= "unset";
	document.getElementById("hangman").src= "img/0.jpg";
	document.getElementById("hangman").style.position= "fixed";
	document.getElementById("hangman").style.top= "5px";
	document.getElementById("hangman").style.right= "5px";
	document.getElementById("hangman").style.border= "solid";
}


function startPlayT2() {
	var ele = document.getElementsByTagName("input");
    for(var i=0;i<ele.length;i++){
      ele[i].disabled = false;
      ele[i].checked = false;
    }
    imgN = 0;
    win = 0;
    var p = document.getElementsByClassName("pilihanT2");
    for (var z=0; z<p.length;z++){
    	p[z].style.backgroundColor= "#089950";
    }

	document.body.style.background= "#1CA35F";
	document.getElementById("h1").innerHTML="Good Luck!!!";
	document.getElementById("h1").style.color= "#F6FF00";
	document.getElementById("menu").style.display= "none";
	document.getElementById("hangman").style.display= "unset";
	document.getElementById("hangman").src= "img/0.jpg";
	document.getElementById("hangman").style.position= "fixed";
	document.getElementById("hangman").style.top= "5px";
	document.getElementById("hangman").style.right= "5px";
	document.getElementById("hangman").style.border= "solid";
}

function hideSoalanT1() {
	document.getElementById("soalanTahap1").style.display= "none";
}

function visibleSoalanT1() {
	document.getElementById("soalanTahap1").style.display= "unset";
}

function hideSoalanT2() {
	document.getElementById("soalanTahap2").style.display= "none";
}

function visibleSoalanT2() {
	document.getElementById("soalanTahap2").style.display= "unset";
}

function home() {
	hideSoalanT1();
	hideSoalanT2();
	document.getElementById("h1").innerHTML= "Are You Ready!!!";
	document.getElementById("select").innerHTML= "Please choose:";
	document.getElementById("select").style.margin= "75px 0 0 0";
	document.getElementById("h1").style.color= "black";
	document.getElementById("menu").style.display= "unset";
	document.getElementById("hangman").style.display= "none";
	document.body.style.background= "#0099cc";

	var ele = document.getElementsByTagName("input");
    for(var i=0;i<ele.length;i++){
      ele[i].disabled = false;
      ele[i].checked = false;
    }
    imgN = 0;
    win = 0;
    var p = document.getElementsByClassName("pilihanT1");
    for (var z=0; z<p.length;z++){
    	p[z].style.backgroundColor= "#A5AD0C";
    }
    var p = document.getElementsByClassName("pilihanT2");
    for (var z=0; z<p.length;z++){
    	p[z].style.backgroundColor= "#089950";
    }
}


function lose(){
	hideSoalanT1();
	hideSoalanT2();
	document.getElementById("h1").innerHTML= "YOU LOSE!";
	document.getElementById("select").innerHTML= "Try Again:";
	document.getElementById("hangman").src= "img/5.jpg";
	document.getElementById("menu").style.display= "unset";
	document.getElementById("select").style.margin= "75px 500px 0 500px";
	var audio = new Audio("bomb.mp3");
	audio.play();

}


function receiveAnswer(raf, lbl, wh){
	var answer = ["B. mulut tempayan", "B. kerana", "C. 173", "A. 437", "D. tenaga", "A. menyerap nutrisi", "D. sumber makanan", 
		"8A. has", "9B. have", "C. enamel", "D. sungguh", "C. calar-balar", "A. niece", "B. Good luck", "C. 240", "B. 38412", "A. Indonesia",
		"D. Kristian", "C. maklumat", "A. merosakkan sel otak"];
	
		var check= raf.value;

		var dis= document.getElementsByClassName(wh);


		if (answer.includes(check)){
			lbl.style.background= "green";
			dis[0].disabled= true;
			dis[1].disabled= true;
			dis[2].disabled= true;
			dis[3].disabled= true;
			win++;
			if (win == 10){
				alert("You won this game!!! Click home to play again.");
			}
		}

		else {
			lbl.style.background ="red";
			imgN++;
			document.getElementById("hangman").src = "img/" + imgN + ".jpg";
			raf.disabled= true;
			if (imgN == 5){
				lose();
			}
		}
	
}