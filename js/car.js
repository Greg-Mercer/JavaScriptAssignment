var c = document.getElementById("car");
		var ctx = c.getContext("2d");

	


		

	
function car(){
	ctx.moveTo(255, 142);//orgin
	//front window
	ctx.lineTo(377, 143);
	ctx.lineTo(353, 195);
	ctx.lineTo(335, 201);
	ctx.lineTo(198,201);
	ctx.closePath();

	//2nd shape
	ctx.moveTo(198,201);
	ctx.lineTo(143,216);
	ctx.lineTo(90,242);
	ctx.lineTo(95,221);
	ctx.closePath();

		//3rd
	ctx.moveTo(90,242);
	ctx.lineTo(167,253);
	ctx.lineTo(160,290);
	ctx.lineTo(97,279);
	ctx.closePath();

		//4th
	ctx.moveTo(90,242);
	ctx.lineTo(80,257);
	ctx.lineTo(89,323);
	ctx.lineTo(198,340);
	ctx.lineTo(165,301);
	ctx.lineTo(95,288);
	ctx.lineTo(89,323);

		//
	ctx.moveTo(167,253);
		ctx.lineTo(272,226);
		ctx.lineTo(334,202);

		//
		ctx.moveTo(167,253);
		ctx.lineTo(244,251);
		ctx.lineTo(281,248);
		ctx.lineTo(251,273);
		ctx.lineTo(204,269);
		ctx.lineTo(198,252);

		//
		ctx.moveTo(244,251);
		ctx.lineTo(352,205);
		ctx.lineTo(361,245);
		ctx.lineTo(362,301); //2
		ctx.lineTo(324,314);
		//tire goes here
		ctx.lineTo(275,339);
		ctx.lineTo(182,348);
		ctx.lineTo(83,330);
		ctx.lineTo(89,321);
		ctx.lineTo(198,340);

		//front door 
		ctx.moveTo(352,205);
		ctx.lineTo(362,198);//2
		ctx.lineTo(424,183);//
		ctx.lineTo(431,221);
		ctx.lineTo(432,275); //2
		ctx.lineTo(362,300);
		ctx.closePath();

		//window
		ctx.moveTo(362,198);
		ctx.lineTo(382,140);//2
		ctx.lineTo(401,130);
		ctx.lineTo(476,122);
		ctx.lineTo(496,137);
		ctx.lineTo(497,162);

		//backdoor needs circle
		ctx.moveTo(422,183);
		ctx.lineTo(430,221);
		ctx.lineTo(432,275);
		ctx.lineTo(479,251); //2
		ctx.lineTo(491,230); //2
		ctx.lineTo(490,197);
		ctx.lineTo(483,167);
		ctx.closePath();

		//frontwindow wrapper
		ctx.moveTo(388,129);
		ctx.lineTo(292,127);
		ctx.lineTo(255,142);//orgin
		ctx.lineTo(377,143);

		//roof
		//ctx.lineTo(393,122);
		ctx.lineTo(489,113); //2
		ctx.lineTo(401,113);
		ctx.lineTo(292,127);
		ctx.lineTo(390,129);
		ctx.closePath();

		//backwrapper
		ctx.moveTo(489,113);//2
		ctx.lineTo(524,174);
		ctx.lineTo(525,221);
		ctx.lineTo(518,238);
		ctx.lineTo(491,230);//2
		ctx.lineTo(483,167);
		ctx.lineTo(497,162);
		ctx.closePath();
		
		//PIPES

		ctx.moveTo(525,221);
		ctx.lineTo(530,216);
		ctx.lineTo(532,229);
		ctx.lineTo(518,238);
	
}


function ellipse(cx, cy, w, h){

	var lx = cx - w/2,
		rx = cx + w/2,
		ty = cy - h/2,
		by = cy + h/2;
	var magic = 0.551784;
	var xmagic = magic*w/2;
	var ymagic = h*magic/2;
		ctx.moveTo(cx,ty);
		ctx.bezierCurveTo(cx+xmagic,ty,rx,cy-ymagic,rx,cy);
		ctx.bezierCurveTo(rx,cy+ymagic,cx+xmagic,by,cx,by);
		ctx.bezierCurveTo(cx-xmagic,by,lx,cy+ymagic,lx,cy);
		ctx.bezierCurveTo(lx,cy-ymagic,cx-xmagic,ty,cx,ty);
			
}


function halfEllipseL(cx, cy, w, h){
	var lx = cx - w/2,
		rx = cx + w/2,
		ty = cy - h/2,
		by = cy + h/2;
	var magic = 0.551784;
	var xmagic = magic*w/2;
	var ymagic = h*magic/2;
		ctx.moveTo(rx,cy);
		ctx.bezierCurveTo(rx,cy+ymagic,cx+xmagic,by,cx,by);
		ctx.bezierCurveTo(cx-xmagic,by,lx,cy+ymagic,lx,cy);
		ctx.closePath();
}

function smoke(cx, cy, r){
	ctx.beginPath();
	ctx.arc(cx, cy, r, 0, 2 * Math.PI);
	ctx.stroke();
	
}
		
	
		
		
		ctx.save();
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.rotate(0.17);
		ellipse(350,280,50,80);
		ellipse(340,280,50,80);
		halfEllipseL(170,290,50,80);	
		ellipse(530,160,40,70);
		ellipse(520,160,40,70);
		ctx.closePath();
		ctx.fill();
		
		ctx.restore();
		
		ctx.beginPath();
		car();
		ctx.closePath();
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
		ctx.stroke();

		smoke(553,213, 20);
		smoke(571,161, 30);
		smoke(611,131, 40);
		

		



		
