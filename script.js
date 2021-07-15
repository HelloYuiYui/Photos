var photos = {
        "Glasgow" : ["ChristmasEve;;George Square, Christmas Eve of 2018;;24 December 2018",
                     "SouthernCambuslang;;Glasgow during sunset;;###",
                     "Flags;;FLAGS;;###",
                     "commieBlocks;;Suspiciously socialist blocks during winter;;###",
                     "WindTurbine;;Salamanca vibes for some reason;;###",
                     "Bothwell;;Bothwell.;;###",
                     "Sunset;;Sunset;;###"],
        "Edinburgh" : ["Balmoral;;The Balmoral with all its might.;;15 December 2020",
                       "CaltonHill;;Calton Hill as it is seen from Princes Street.;;15 December 2020",
                       "Canal;;The Canal;;###",
                       "Grassmarket;;Grassmarket on a sunny day.;;26 May 2021",
                       "GermanSausage;;Bavarian Sausage Stand;;###",
                       "PrincesStGarden;;View from the entrance of the Princes St Gardens;;26 June 2021"],
        "Trossachs" : ["theCastle;;The castle view from the path to Ben A'an.;;###",
                       "lochKatrineFirst;;Loch Katrine in a misty weather, bloomed flowers on Ben A'an creating a very calming environment.;;###",
                       "lochKatrine;;From my second visit to Ben A'an, this time a more clear and sunny weather.;;###",
                       "lochVenachar;;Another nearby loch, Loch Venachar, photo from a small café.;;###",
                       "mountains;;Faraway mountains seen from the top of Ben A'an.;;##",
                       "branches;;Branches of a tree near Loch Venachar;;###"],
        "Millport" : ["northernLargs;;Northern parts of Largs, a town located at western coast of Scotland just across lies the isle of Great Cumbrae.;;###",
                      "northernLargs2;;I walked the entire coast of Largs multiple times with my uncle years ago, fun times.;;###",
                      "millport;;Town of Millport on the isle of Great Cumbrae, very small and cozy but to be fair also very boring and dull.;;###",
                      "flowers;;Pretty flowers in the garden of the Garrison House in Millport, one reserved for the military, now serves as a restaurant and a tourist attraction.;;###",
                      "tree;;Tree goes brr haha;;###",
                      "scottishFlag;;As a fellow flag nerd I cannot overcome the urges to take photos of any waving piece of cloth, therefore I took photos of all the flags waving from the&nbsp;top of a&nbsp;nearby café.;;###",
                      "italianFlag;;Forza&nbsp;Italia! (Euro 2020 ref :w );;###",
                      "britishFlag;;British&nbsp;flag;;###"],
        "Inverness" : ["coos;;Coos near Loch Insh on our way to Loch Ness.;;###",
                       "lochInsh;;Loch Insh, another smaller loch on our way to Inverness, nearby lies a very chill town.;;###",
                       "culloden;;Culloden battlefield, tourist swarming around where once two armies stood against each other and endured much suffering.;;###",
                       "nairnViaduct;;Nairn Viaduct, a train-bridge. We were lucky to see a train pass by. Might have barged into some random private properties on the search for nice views of the viaduct.;;###",
                       "invernessCastle;;Inverness castle, unfortunate it was closed due to COVID-19 when we were there.;;###",
                       "invernessChurch;;Hey! a pretty church ahead, must take photos!;;###",
                       "lochNess;;Mighty Loch Ness! finally! unfortunate news though, no sign of the Nessie apart from the souvenirs you can find around ://;;###",
                       "urquhartCastle;;An old castle, once used by the Jacobites, then destroyed by the British so Jacobites couldn't use it again.;;###",
                       "fortAugustus;;Fort Augustus, a small-ish town at the southern tip of Loch Ness where we ended our trip properly since it got too dark to take photos afterwards.;;###"]
    };

function loadPhotos (place) {
    
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
    var photoInfo = raw.split(";;");
    return photoInfo;
}

function createDiv (place, fileName, descr, date) {
    if (date == "###") date = "#DATE TO BE ADDED#";
    var div = ("<div class=\"photo\"> \
                    <img src=\"Photos/" + place + "/" + fileName + ".jpg\"> \
                    <p class=\"descr\">" + descr + "</p> \
                    <p class=\"date\"></p><br><hr> \
                </div>");
    return div;
}

function loadHeader (title) {
    var header = "<header> \
                    <a href=\"www.enesia.co.uk\"><h1 id=\"main\">" + title + "</h1></a> \
                    <hr style=\"width: 40%\"> \
                  </header>";
    document.write(header)
}

function getFooter() {
    var footer = "<footer> \
                    <span>Enes&nbsp;Aydogan<br>Glasgow 2021</span> \
                </footer>";
    document.write(footer)
}

function initialise (place) {
    if (place == "Inverness") {
        loadHeader("Inverness & Loch&nbsp;Ness");
    } else if (place == "Millport") {
        loadHeader("Great&nbsp;Cumbrae Island");
    } else if (place == "Trossachs") {
        loadHeader("Trossachs & Ben&nbsp;A'an");
    } else {
        loadHeader(place);
    }
    loadPhotos(place);
    getFooter();
}