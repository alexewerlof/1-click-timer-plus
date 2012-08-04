for ( var h = 0; h < 24; h++ ) {
	var ul = document.createElement( "ul" );
	for ( var m = 0; m < 60; m++ ) {
		var li = document.createElement( "li" );
		ul.appendChild( li );
	}
	ulContainer.appendChild( ul );
}