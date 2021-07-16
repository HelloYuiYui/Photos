var photos = {
        "Glasgow" : ["ChristmasEve;;Christmas Eve of 2018, gotta be one of my favourite photos even   though I didn't expect it to look that nice when my plan was to just capture the moment and a memory from a nice day.;;24 December 2018",
                     "SouthernCambuslang;;Glasgow during sunset, taken from the road to East Kilbride, during one of my long cycling days.;;###",
                     "GlasgowHorizon;;Glasgow during sunset pt 2.;;###",
                     "commieBlocks;;Southeastern Glasgow, always loved looking at those blocks for some reason. Important to note it was a snowy occasion which isn't that common in Scotland.;;###",
                     "GlasgowCathedral;;The Glasgow Cathedral, still didn't get the chance to see it's interior but I bet many nice things to see.;;###",
                     "GeorgeSquare;;George Square in a sunny day.;;###",
                     "Spring;;Flowers at George Square.;;###",
                     "FlowersW;;Pretty flowers! edited by a fellow friend >=]];;###",
                     "Bothwell;;Bothwell from the overpass that I took the flags photo.;;###",
                     "Sunset;;Sunset;;###",
                     "WindTurbine;;A park in southeastern Glasgow again, weird how it always gave me Salamanca vibes even though I have never been to Salamanca :d;;###",
                     "Lidl;;This was the first market, and Lidl I went to, shortly after arriving to Glasgow in February of 2017, although the photo is from around 2021's winter.;;###",
                     "House;;A pretty house.;;###",
                     "Flags;;Flags from a small pro-Scottish Independence group that waved flags and slogans on an overpass looking over a highway. They got mixed reactions ranging from many middle fingers to people greeting and honking in sympathy. On the way from Hamilton to Bothwell.;;###"],
        "Edinburgh" : ["Edinburgh;;Edinburgh seen from the Pentlands.;;###",
                       "Balmoral;;The Balmoral with all its might.;;15 December 2020",
                       "CaltonHill;;Calton Hill as it is seen from Princes Street. Took that route on my way to Appleton Tower every Monday during my first semester, also love Calton Hill, gotta be one of my favourite spots in Edinburgh.;;15 December 2020",
                       "Canal;;The canal, was walking right beside the canal with some friends, got to meet Mr. Cat that day in a church yard too!;;###",
                       "Grassmarket;;Grassmarket on a sunny day.;;26 May 2021",
                       "GermanSausage;;Bavarian sausage stand on Prince's Street. I like the Bavarian flags.;;###",
                       "PrincesStGarden;;View from the entrance of the Princes St Gardens.;;26 June 2021"],
        "Trossachs" : ["theCastle;;The castle view from the path to Ben A'an.;;###",
                       "lochKatrineFirst;;Loch Katrine in a misty weather, bloomed flowers on Ben A'an creating a very calming environment. Loved the vibe of that place.;;###",
                       "lochKatrine;;From my second visit to Ben A'an, this time a more clear and sunny weather.;;###",
                       "lochVenachar;;Another nearby loch, Loch Venachar, photo from a small café right beside the loch.;;###",
                       "mountains;;Faraway mountains seen from the top of Ben A'an.;;##",
                       "branches;;Branches of a tree near Loch Venachar;;###"],
        "Millport" : ["northernLargs;;Northern parts of Largs, a town located at western coast of Scotland just across lies the isle of Great Cumbrae.;;###", 
                      "northernLargs2;;I walked the entire coast of Largs multiple times with my uncle years ago, fun times.;;###",
                      "millport;;Town of Millport on the isle of Great Cumbrae, very small and cozy but to be honest also very boring and dull.;;###",
                      "flowers;;Pretty flowers in the garden of the Garrison House in Millport, one reserved for the military, now serves as a restaurant and a tourist attraction.;;###",
                      "tree;;Tree goes brr haha;;###",
                      "scottishFlag;;As a fellow flag nerd I cannot overcome the urges to take photos of any waving piece of cloth, therefore I took photos of all the flags waving from the&nbsp;top of a&nbsp;nearby café.;;###",
                      "italianFlag;;Forza Italia! (Euro 2020 ref :w );;###",
                      "britishFlag;;British flag;;###"],
        "Inverness" : ["coos;;Coos near Loch Insh on our way to Loch Ness.;;###",
                       "lochInsh;;Loch Insh, another smaller loch on our way to Inverness, nearby lies a very chill town and a church.;;###",
                       "culloden;;Culloden battlefield, tourist swarming around where once two armies stood against each other and caused much suffering to each other T-T;;###",
                       "nairnViaduct;;Nairn Viaduct, a train-bridge. We were lucky to see a train pass over it. Might have ran into some random private properties on the search for nice views of the viaduct.;;###",
                       "invernessCastle;;Inverness castle, unfortunate it was closed due to COVID-19 when we were there.;;###",
                       "invernessChurch;;Hey! a pretty church ahead, must take photos!;;###",
                       "lochNess;;Mighty Loch Ness! finally! unfortunate news though, no sign of the Nessie apart from the souvenirs you can find in Inverness ://;;###",
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
                    <a href=\"https://www.enesia.co.uk\"><h1 id=\"main\">" + title + "</h1></a> \
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