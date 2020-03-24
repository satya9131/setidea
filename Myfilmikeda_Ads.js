const giflink = ["https://4.bp.blogspot.com/--sg5nlMmRWE/XnmfVao936I/AAAAAAAABvw/wJr6__zcPNcR3O2FICeT16prV2XiivS4wCLcBGAsYHQ/s1600/baghi.gif","https://4.bp.blogspot.com/-wRSSjUEsyDM/XnmfXKEr5TI/AAAAAAAABv4/1V18JBJ3Lec9VqHZOmZjdHaMF8PgS7CzQCLcBGAsYHQ/s320/malang.gif","https://1.bp.blogspot.com/-EodCa9E9fRs/XnmfXDf0ANI/AAAAAAAABv0/tZsLSxoAfM4vni_6eqM7XbYck4ChQTvdgCLcBGAsYHQ/s1600/loveaajkal.gif"];
const adtxte = ["Download latest Baghi 3 full movie And much like this.","Download latest Malang full movie And much like this.","Download latest Love Aaj kal 2 full movie And much like this."];
const sponserlink = ["https://www.hindivstech.xyz/2019/12/web-designer-kaise-bane-hindi.html","https://www.hindivstech.xyz/2020/03/ethical-hacking-in-hindi.html","https://www.bloggingvshindi.co ps2020/02/website-kaise-banaye.html"];
function loadFace(){
	 var randomface = Math.floor((Math.random()*3));
	//alert(lennyface[randomface]);
	 document.querySelector('.img-ad').setAttribute("src",giflink[randomface]);
	document.querySelector('.adtext').innerText=adtxte[randomface];
	document.querySelector('.adsponser').setAttribute("href",sponserlink[randomface]);
}
window.onload=loadFace;

//media query 

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector('.ads-container').style.width = "90%";
  } else {
    document.querySelector('.ads-container').style.width = "400px";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
