$('#default').on('click', function() { ohSnap('A notification with default options')});
$('#red').on('click', function() { ohSnap('Oh Snap! You can\'t access this page!', {'color':'red'})});
$('#green').on('click', function() { ohSnap('Ahh Yeah! Your account was created.', {'color':'green'})});
$('#blue').on('click', function() { ohSnap('We are closed right now. Come back tomorrow.', {'color':'blue'})});
$('#yellow').on('click', function() { ohSnap('A yellow alert for your... yellow needs...', {color:'yellow'})});
$('#silver').on('click', function() { ohSnap('A silver alert for your... silver needs...', {color:'silver'})});
$('#purple').on('click', function() { ohSnap('A purple alert for your... silver needs...', {color:'purple'})});
$('#orange').on('click', function() { ohSnap('A fast one', {'color': 'orange', 'duration':'100'})});