function $(cla,doc){
	var doc = doc || document;
	return doc.querySelector(cla);
}
function $$(cla,doc){
	var doc = doc || document;
	return doc.querySelectorAll(cla);
}
function play(num){
	var au = document.createElement("audio");
	//doc.setAttribute("id","opp");
	au.src = 'raw/c3.ogg'; // a0 c3 b3 e4 f5 g5
	au.src = "raw/p/raw/" + arr[num] + ".ogg";
	//au.controls = "controls";
	$(".myaudio").appendChild(au);
	setTimeout(function(){
		$(".myaudio").removeChild(au)
	},2000);
	au.play();
}
var mylist = $$(".pianoitem",$(".piano"));
var rawsrc = [];
var arr = ["a0","c3","b3","e4","f5","g5","b3","a0","c3","b3","e4","f5","g5","b3","a0","c3","b3","e4","f5","g5","b3"];
for(var i = 0;i < mylist.length;i++){
	
	//console.log(mylist[i]);
	(function(i){
		mylist[i].addEventListener("click",function(evt){
			//console.log(i);
			play(i);
		});
	})(i);
	//mylist[i].addEventListener("click",function(evt){
		/* console.log(evt.target);
		console.log(evt.target.innerHTML);
		document.createElement("audio"); */
		//console.log(evt);
		//console.log(evt.target);
		
		/* setTimeout(,1000); */
		
	//}); 
	
}
var list1 = [65,83,68,70,71,72,74,75,76,186];
document.addEventListener("keydown",function(evt){
	 console.log(evt.keyCode);
	var num = index(evt.keyCode,list1);
	
	if(num != -1){
		/* console.log("num:"+num);
		var au = document.createElement("audio");
		//doc.setAttribute("id","opp");
		au.src = 'raw/c3.ogg'; // a0 c3 b3 e4 f5 g5
		au.src = "raw/p/raw/" + arr[num] + ".ogg";
		$(".myaudio").appendChild(au);
		setTimeout(function(){
			$(".myaudio").removeChild(au)
		},2000);
		au.play(); 
		//console.log(index(evt.keyCode,list1));
		 */
		play(num);
	}
	//au.controls = "controls";
	
});
function index(sb,list){
	for(var i = 0;i < list.length;i++){
		if(sb == list[i]){return i;}
	}
	return -1;
}
/* function a(boo,cla,doc){
	var doc = doc || document;
	if(boo){
		return doc.querySelector(cla);
	}else{
		return doc.querySelectorAll(cla);
	}
} */
//console.log($$(".pianoitem",$(".piano")));

//debugger;
/* var doc = document.createElement("audio");
doc.setAttribute("id","mp3");
doc.setAttribute("src","raw/b0.ogg");
doc.setAttribute("controls","controls");
doc.innerHTML = "abc"; */

//var arr = ["c3","d3","e3","f3","g3","a3","b3","c4","d4","e4","f4","g4","a4","b4","c5","d5","e5","f5","g5","a5","b5",];
/* $(".myaudio").appendChild(doc); */
