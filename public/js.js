var LIST = [
    {
        title:"openingFrame",
        class:"f1",
        chrs:[
            "simmon_little_dude",
            "gimmus",
            "gingundus"
        ]
    },
    {
        title:"setup",
        class:"f2",
        chrs:[
            "simmon_little_dude",
        ]
    },
    {
        title:"zoom",
        class:"f3",
        chrs:[
            "simmon_little_dude",
        ]
    },
     {
        title:"suspense",
        class:"f4",
        chrs:[    ]
    }
];

var dance = function(x, dunno){
    var copyCat = cat.cloneNode(true);
    for(var c = 0; c < dunno[i].chrs.length; c++ ){
        var copyCat = document.cloneNode(true);
        copyCat.innerHTML = dunno[i].title;
        copyCat.classList.add( dunno[i].class);
        copyCat.classList.add( "cat" );    for(var c = 0; c < dunno[i].chrs.length; c++ ){
        var chrHTML = document.cloneNode(true);
        chrHTML.innerHTML = dunno[i].title;
        chrHTML.classList.add( dunno[i].chrs);
        chrHTML.classList.add( "chr" );

        copyCat.append(chrHTML)

        document.body.append( copyCat );
    }
}

dance( "copyCat", LIST );

var inHtml = function(x){
    document.querySelector("div#innerHTMLFUN").innerHTML = x;
}
inHtml("EYAAAXXXX!");


var draw = function(x){
    var duck = document.querySelector("duck");
    var stuffToShow = "";
    for(
        var count = 0;
        count < x.length;
        count++
    ){
        alert("!!!!!FRAME!!!!!!!");
        var nextList = x[count];
        for(var i = 0; i < nextList.length; i++ ){
            alert( nextList[i]);
            duck.innerHTML = stuffToShow += nextList[i];
        }
    }
}
// draw(LIST);
