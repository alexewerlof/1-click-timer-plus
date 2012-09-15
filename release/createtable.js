for ( var h = 0; h < 24; h++ ) {
	var ul = document.createElement( "ul" );
	//add the hour number
	var li = document.createElement( "li" );
	li.id = h + "-hour1";
	li.className = "hour";
	li.textContent = h;
	ul.appendChild( li );
	//add all the minutes
	for ( var m = 0; m < 60; m++ ) {
		var li = document.createElement( "li" );
		li.id = h + "-" + m;
		ul.appendChild( li );
	}
	//add the trailing hour number
	var li = document.createElement( "li" );
	li.id = h + "-hour2";
	li.className = "hour";
	li.textContent = h;
	ul.appendChild( li );
	//add the ul to the container
	ulContainer.appendChild( ul );
}