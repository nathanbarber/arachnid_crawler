var request = require("request");
var cleaner = require("./cleaner.js");

var links = new Array();
links.push("http://www.whatever.com");          //Initial link
var restriction = "whatever";                   //Restriction Phrase
                                                //Change those two...
request({
    uri: links[0],
}, function(error, request, response) {
    process(error, request, response);
});

function process(error, response, html) {
    if(links[0] == undefined) {
        return;
    }

    //DO WHAT YOU WILL WITH THE PAGE

    console.log(links[0] + "     " +  links.length);
    var existinglinks = cleaner.links(html, restriction);
    links = links.concat(existinglinks);
    links.splice(0, 1);
    if(links.length > 0) {
        requestblock(links[0]);
    }
}

function requestblock(url) {
    request({
        uri: url
    }, function(error, response, html) {
        process(error, response, html)
    });
}
