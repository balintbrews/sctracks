var clientId = 'e59d1966f5f19e4c3177aef214ed2b19'
var hostname = 'soundcloud.com';
var apiHostname = 'api.soundcloud.com';
var args = process.argv.slice(2);

if (args[0] == undefined) {
  // @todo Provide a more standard Unix error message and usage information.
  console.log('Please specify a SoundCloud username!');
  process.exit(1);
}

// Do an API request to resolve the username to a user ID.
var http = require('http');

// Callback if there is a problem with the HTTP request.
var httpRequestErrorCallback = function(e) {
  console.log('An error occured while performing HTTP request: ' + e.message);
  process.exit(1);
}

var resolveRequestOptions = {
  hostname : apiHostname,
  path : '/resolve.json?client_id=' + clientId + '&url=http://' + hostname + '/' + args[0]
}

http.get(resolveRequestOptions, function(resolveResponse) {
  var resolveResponseBody = '';
  resolveResponse.on('data', function (chunk) {
    resolveResponseBody += chunk;
  });
  resolveResponse.on('end', function () {
    // Do an API request to retrieve tracks of the user.
    var userId = parseUserId(JSON.parse(resolveResponseBody).location);
    var usersRequestOptions = {
      hostname : apiHostname,
      path : '/users/' + userId + '/tracks.json?client_id=' + clientId
    }
    http.get(usersRequestOptions, function(usersResponse) {
      var usersResponseBody = '';
      usersResponse.on('data', function (chunk) {
        usersResponseBody += chunk;
      });
      usersResponse.on('end', function () {
        var parsedBody = JSON.parse(usersResponseBody);
        parsedBody.forEach(function (item) {
          console.log('==> ' + item.created_at.substr(0, 10) + ' | "' + item.title + '"');
          console.log(item.permalink_url + '\n');
        });
      });
    }).on('error', httpRequestErrorCallback);
  });
}).on('error', httpRequestErrorCallback);

// Parse the user ID from the resolved user URI.
var parseUserId = function (url) {
  var regex = /http:\/\/api.soundcloud.com\/users\/([0-9]*)\.json.*/;
  var result = url.match(regex);
  return result[1];
}

