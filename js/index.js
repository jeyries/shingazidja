

(function(){
    
    console.log('init');
    
    if (!window.cordova)
        return;

    console.log('cordova specific init');
        
    // open http links in external browser
    
    var onClick = function() {
        var href = $( this ).attr("href");
        console.log( "open link in external browser : " + href );
        window.open( href, '_system');
        return false;
    };
    
    $( "a" ).each(function( index ) {
        var href = $( this ).attr("href");
        if ( href.match(/^http/) ){
            console.log( "found external link : " + href );
            $( this ).click(onClick);
        }   
    });
    
   
})();


