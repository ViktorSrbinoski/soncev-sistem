function radians(degrees) {
  return degrees * Math.PI / 180;
};
function merkur(){
	var id=setInterval(frame,7);
	var x=710;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("merkur");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function venera(){
	var id=setInterval(frame,10);
	var x=680;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("venera");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function zemja(){
	var id=setInterval(frame,15);
	var x=645;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("zemja");
	function frame(){
		x=790+(800-x1)*Math.sin(alfa);
		y=790+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function mars(){
	var id=setInterval(frame,20);
	var x=620;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("mars");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function jupiter(){
	var id=setInterval(frame,25);
	var x=510;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("jupiter");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function saturn(){
	var id=setInterval(frame,30);
	var x=377;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("saturn");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function uran(){
	var id=setInterval(frame,35);
	var x=320;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("uran");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function neptun(){
	var id=setInterval(frame,40);
	var x=240;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("neptun");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}
function pluton(){
	var id=setInterval(frame,45);
	var x=210;
	var x1=x;
	var y;
	var agol=-90;
	var alfa=radians(agol);
	var elem=document.getElementById("pluton");
	function frame(){
		x=795+(800-x1)*Math.sin(alfa);
		y=795+(800-x1)*Math.cos(alfa);
		agol++;
		alfa=radians(agol);
		elem.style.top=x+'px';
		elem.style.left=y+'px';
	}
}