function loadPhotos (place) {
    var photos = {
        "Glasgow" : ["ChristmasEve;George Square, Christmas Eve of 2018;24 December 2018",
                     "SouthernCambuslang;Glasgow during sunset;###",
                     "Flags;FLAGS;###",
                     "commieBlocks;Suspiciously socialist blocks during winter;###",
                     "WindTurbine;Salamanca vibes for some reason;###",
                     "Bothwell;Bothwell.;###",
                     "Sunset;Sunset;###"],
        "Edinburgh" : ["Balmoral;The Balmoral with all its might.;15 December 2020",
                       "CaltonHill;Calton Hill as it is seen from Princes Street;15 December 2020",
                       "Canal;The Canal;###",
                       "Grassmarket;Grassmarket on a sunny day.;26 May 2021",
                       "GermanSausage;Bavarian Sausage Stand;###",
                       "PrincesStGarden;View from the entrance of the Princes St Gardens;26 June 2021"
                      ]
    };
    
    document.write("<ul class=\"photos\">");
    
    for (var photoID in photos[place]) {
        var vals = parsePhotoDescription(photos[place][photoID]);
        var fileName = vals[0];
        var descr = vals[1];
        var date = vals[2];
        var div = createDiv(place, fileName, descr, date);
        document.write(div);
    }
    
    document.write("</ul>");
}

function parsePhotoDescription (raw) {
    var photoInfo = raw.split(";");
    return photoInfo;
}

function createDiv (place, fileName, descr, date) {
    if (date == "###") date = "#DATE TO BE ADDED#";
    var div = ("<div class=\"photo\"> \
                    <img src=\"Photos/" + place + "/" + fileName + ".jpg\"> \
                    <p class=\"descr\">" + descr + "</p> \
                    <p class=\"date\">" + date + "</p><br><hr> \
                </div>");
    return div;
}

function loadHeader (title) {
    var header = "<h1 id=\"main\">" + title + "</h1> \
                 <hr style=\"width: 40%\">";
    document.write(header)
}