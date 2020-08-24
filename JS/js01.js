// JavaScript Document
function Ten(){
	var name= document.getElementById("name");
	document.getElementById("ketqua").innerHTML="Chao ban "+ name.value;
}
function Tinh(){
	var year=document.getElementById("year").value;
	var Tuoi;
	Tuoi= 2020 - year;
	document.getElementById("ketqua2").innerHTML="So tuoi: " + Tuoi;
}