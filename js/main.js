/* Global Vars */
{
	var toggleNavB = false;
	var toggleCHSMB = false
}

function openNav() {
		toggleNavB = true;
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		document.getElementById("myMainFrame").style.width = "81vw";
}

function closeNav() {
		toggleNavB = false;
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		document.getElementById("myMainFrame").style.width = "95vw";
}

/* Toggles the navigation bar */
function toggleNav() {
	if(!toggleNavB){
		openNav();
	}
	else {
		closeNav();
	}
}

/* Toggles CH Submenu */
function toggleSM(element) {
	if(element != null){
		console.log("ID: " + element.id);
	}
	var childs = element.getElementsByClassName('sbsmdiv');
	var child;
	var count = 0;
	/**/
	do{
		child = childs[count];
		if(child != null){
			if(child.style.display == "none")
				child.style.display = "inline";
			else
				child.style.display = "none";
		}
		count += 1;
	}while(child != null)
	/**/
}