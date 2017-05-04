module.exports = {
    links: function(string, restriction) {
        /*while(string.includes("href")) {*/
        var links = new Array();
        var start = 0;
        if(string == undefined) {
            return;
        } else {
            string = string.replace(/'/g, '"');
            while(start < string.length) {
                var i = string.indexOf("href", start);
                if(i == -1) {
                    break;
                }
                var i2 = string.indexOf('"', i);
                var i3 = string.indexOf('"', i2 + 1);
                var link = string.substring(i2 + 1, i3);
                //console.log(link);
                if(link.includes("http://") || link.includes("https://")) {
                    if(restriction == false) {
                        links.push(link);
                    } else if(link.includes(restriction)) {
                        links.push(link);
                    }
                }
                start = i3 + 1;
            }
            return links;
        }
    },
    bodytext: function(string) {
        string = string.replace(/<style>.*style>/g, '');
        string = string.replace(/<script>.*script>/g, '');
        string = string.replace(/\s+/g, " ");
        var start = 0;
        while(true) {
            var i = string.indexOf("<", start);
            if(i == -1) {
                break;
            }
            var i2 = string.indexOf(">", i) 
            if(i2 == -1) {
                break;
            }
            string = string.substring(0, i) + string.substring(i2 + 1);
        }
        return string;
    }
}