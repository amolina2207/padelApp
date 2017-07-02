var gulp   = require( 'gulp' ),
    server = require( 'gulp-develop-server' );
 
// run server 
gulp.task( 'server:start', function() {
    server.listen( { path: './www/index.html' } );
});
 
// restart server if app.js changed 
gulp.task( 'server:restart', function() {
    gulp.watch( [ './www/index.html' ], server.restart );
});
