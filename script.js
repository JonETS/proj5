//GLOBAL VARIABLES
var curQuest = 0;//current question
var curScore = 0;//current score
//must stores the polygons to be accessed by the code later on (if I were to later edit the map, I would also need to store a var for the map)
var polygonPolice = new google.maps.Polygon();//Police Services
var polygonOrange = new google.maps.Polygon(); //Orange Grove
var polygonArbor = new google.maps.Polygon(); //Arbor Court
var polygonMaple = new google.maps.Polygon(); //Maple Hall
var polygonMatador = new google.maps.Polygon(); //Matador Statue

//run code
createMap();//create map
updateResults(false);//display high score
nextQuestion();//update to first question



/*
    This creates the map and removes the POI's, labels, and controls.
*/
function createMap() {
    //map style must before map create
    const mapStyle = [
    {
        //removes all pois and labels
        featureType: "all",
        elementType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
    }];
    // create map
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 34.238964946054246, lng: -118.52953605328356 }, // Example: New York City
        zoom: 17,
        disableDefaultUI: true,//disables UI's
        gestureHandling: "none", //disables drag/zoom 
        styles: mapStyle
    });
    //create Polygons
    createPolygonPolice(map);//Police Services
    createPolygonOrange(map);//Orange Grove
    createPolygonArbor(map);//Arbor Court
    createPolygonMaple(map);//Maple Hall
    createPolygonMatador(map);//Matador Statue

    //set up doubleclick
    map.addListener('dblclick', onMapClick);

}
/*
    This handles the double click event on the map.
    Passes the coords of the location clicked to be checked.
*/
function onMapClick(e){
    //get coords
    const coords = e.latLng; //coords of click
    console.log("Clicked "+coords)//debug
    checkAnswer(coords);//check with question
}

function createPolygonPolice(map){
    //The coords start at the very most top left corner of the building and goes counter-clockwise 
    const policeCoords =  [
    { lat: 34.23889632111859, lng: -118.53354968416944 },
    { lat: 34.23880266183148, lng: -118.53354999043452 },
    { lat: 34.23880044207313, lng: -118.5335654296669 },
    { lat: 34.23876825557067, lng: -118.53358691033802},
    { lat: 34.23871775603337, lng: -118.5335801976283},
    { lat: 34.23870454027367, lng: -118.53357412250816},
    { lat: 34.238698557575105, lng: -118.53360880681817},
    { lat: 34.23863867880629, lng: -118.53359405236002},
    { lat: 34.23864422313852, lng: -118.53354643569963},
    { lat: 34.23857715726503, lng: -118.53354442803912},
    { lat: 34.23857882030552, lng: -118.53324200900596},
    { lat: 34.238590461588025, lng: -118.53324335011033},
    { lat: 34.23859378766848, lng: -118.53307504151317},
    { lat: 34.23872405904845, lng: -118.53307504151317},
    { lat: 34.238724472843444, lng: -118.53296785456982},
    { lat: 34.238859319537326, lng: -118.53296986832837},
    { lat: 34.2388587646131, lng: -118.53307458377299},
    { lat: 34.238882071427334, lng: -118.53307324126727},
    { lat: 34.23888595589577, lng: -118.53318466924041},
    { lat: 34.23889871914784, lng: -118.53318332673472}
    
    ];
    // Construct the polygon.
    polygonPolice = new google.maps.Polygon({
    paths: policeCoords,
    strokeColor: "rgb(128, 0, 0)",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "rgb(255, 0, 0)",
    fillOpacity: 0.35,
    clickable: false //not interactable
    });
    polygonPolice.setVisible(false);//hide polygog, preserves data
    polygonPolice.setMap(map);//put on map
}

function createPolygonOrange(map){
    //The coords start at the very most top left corner of area and goes counter-clockwise 
    const oragneCoords =  [
    { lat: 34.237308584237155, lng: -118.5272787019099},
    { lat: 34.23565880702969, lng: -118.52727065528374},
    { lat: 34.23566767688605, lng: -118.52475474350456},
    { lat: 34.236381697258366, lng: -118.52476815454817},
    { lat: 34.23661009380106, lng: -118.52537969813629},
    { lat: 34.23677640157338, lng: -118.52537433371884},
    { lat: 34.23699592732981, lng: -118.52471182816505},
    { lat: 34.237222104783214, lng: -118.52468768828659},
    { lat: 34.237230974474876, lng: -118.52544407114554},
    { lat: 34.23728419260529, lng: -118.52578471165297},
    { lat: 34.23726867065407, lng: -118.52586249570584},
    { lat: 34.23725980096637, lng: -118.52635870431901},
    { lat: 34.23729527971157, lng: -118.52636138652773}
    ];
    // Construct the polygon.
    polygonOrange = new google.maps.Polygon({
    paths: oragneCoords,
    strokeColor: "rgb(128, 0, 0)",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "rgb(255, 0, 0)",
    fillOpacity: 0.35,
    clickable: false //not interactable
    });
    polygonOrange.setVisible(false);//hide polygog, preserves data
    polygonOrange.setMap(map);//put on map
}

function createPolygonArbor(map){
    //The coords start at the very most top left corner of area and goes counter-clockwise 
    const arborCoords =  [
    { lat: 34.241336097045846, lng: -118.53009759608835},
    { lat: 34.24102773592722, lng: -118.53009883413978},
    { lat: 34.24102995324998, lng: -118.52954093472607},
    { lat: 34.24131388985054, lng: -118.52955135826096}
    ];
    // Construct the polygon.
    polygonArbor = new google.maps.Polygon({
    paths: arborCoords,
    strokeColor: "rgb(128, 0, 0)",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "rgb(255, 0, 0)",
    fillOpacity: 0.35,
    clickable: false //not interactable
    });
    polygonArbor.setVisible(false);//hide polygog, preserves data
    polygonArbor.setMap(map);//put on map
}

function createPolygonMaple(map){
    //The coords start at the very most top left corner of building and goes counter-clockwise 
    const mapleCoords =  [
    { lat: 34.23781698331008, lng: -118.5314819823764},
    { lat: 34.23739931542622, lng: -118.53147522363405},
    { lat: 34.237399258184226, lng: -118.53121010795401},
    { lat: 34.237385399318285, lng: -118.53121010795401},
    { lat: 34.23735435545027, lng: -118.531176580345},
    { lat: 34.23733606173697, lng: -118.53114305273601},
    { lat: 34.23733439867195, lng: -118.5310873969051},
    { lat: 34.237351583675796, lng: -118.53104649322209}, 
    { lat: 34.237399258184226, lng: -118.53099553125641},
    { lat: 34.2373998125388, lng: -118.53094121652984},
    { lat: 34.237822478882684, lng: -118.53094684748062}
    ];
    // Construct the polygon.
    polygonMaple = new google.maps.Polygon({
    paths: mapleCoords,
    strokeColor: "rgb(128, 0, 0)",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "rgb(255, 0, 0)",
    fillOpacity: 0.35,
    clickable: false //not interactable
    });
    polygonMaple.setVisible(false);//hide polygog, preserves data
    polygonMaple.setMap(map);//put on map
}

function createPolygonMatador(map){
    //The coords start at the very most top left corner of area and goes counter-clockwise 
    const matadorCoords =  [
    { lat: 34.239918828061164, lng: -118.52790160189448},
    { lat: 34.23982181885501, lng: -118.5279009313423},
    { lat: 34.23982514488679, lng: -118.5277902902326},
    { lat: 34.23991993673716, lng: -118.52779230188918}
    ];
    // Construct the polygon.
    polygonMatador = new google.maps.Polygon({
    paths: matadorCoords,
    strokeColor: "rgb(128, 0, 0)",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "rgb(255, 0, 0)",
    fillOpacity: 0.35,
    clickable: false //not interactable
    });
    polygonMatador.setVisible(false);//hide polygog, preserves data
    polygonMatador.setMap(map);//put on map
}

/*
    This checks if the coords clicked are correct
*/
function checkAnswer(coords){
    let isCorrect = false;
    
    switch(curQuest){ //checks current question and assigns range of coords to check
        case 1:
            isCorrect = google.maps.geometry.poly.containsLocation(coords, polygonPolice);
            break;
        case 2:
            isCorrect = google.maps.geometry.poly.containsLocation(coords, polygonOrange);
            break;
        case 3:
            isCorrect = google.maps.geometry.poly.containsLocation(coords, polygonArbor);
            break;
        case 4:
            isCorrect =  google.maps.geometry.poly.containsLocation(coords, polygonMaple);
            break;
        case 5:
            isCorrect = google.maps.geometry.poly.containsLocation(coords, polygonMatador);
            break;
        default:
            console.error("ERROR: Outside of Question Range."); //SHOULD NOT OCCUR
            break;
    }
    if(curQuest <= 5 && curQuest >= 1){ //at most 5 questions
        console.log('Correct Answer:'+ isCorrect);//debug
        updatePage(isCorrect);
        updateResults(isCorrect);
    }
    if(curQuest < 5){//at most 5 questions
        nextQuestion();
    }
}

/*
    This updates the page to the next question.
*/
function nextQuestion(){
    curQuest++;//update counter
    //make next question visible
    let questID = "question" + curQuest;
    let thisQuestion = document.getElementById(questID);
    thisQuestion.classList.toggle('visible');
}

/*
 This updates the score.
*/
function updateResults(isCorrect){
    if(isCorrect==true){
        curScore++;
    }
    else{
        //DO NOTHING
    }
    //check if greater than high score
    if(curScore > localStorage.getItem('HIGHSCORE')){
        localStorage.setItem('HIGHSCORE', curScore);//store new high score
    }
    else{
        //DONT REPLACE SCORE
    }
    //check if HIGHSCORE exists
    if(localStorage.getItem('HIGHSCORE') == null){
        localStorage.setItem('HIGHSCORE', 0);
    }
    else{
        //USE STORED SCORE
    }
    document.getElementById('score').textContent = localStorage.getItem('HIGHSCORE');//update display
}
/*
    updates the page.
*/
function updatePage(isCorrect){
    var answerID = 'answer' + curQuest; //used for <p> of question
    updateAnswerParagraph(isCorrect, answerID)//update answer <p>
    updatePolygon(isCorrect);//update polygon

    
}

// updates the paragraph message
function updateAnswerParagraph(isCorrect, answerID){
    let answerParagraph = document.getElementById(answerID);
    if(isCorrect == true){//correct
       answerParagraph.classList.toggle('correct');//apply correct style
       answerParagraph.textContent = "Correct!!!";//set correct message
    }
    else{//incorrect
        //keep incorrect style
        answerParagraph.textContent = "Incorrect!!!"; //set incorrect message
    }
    answerParagraph.classList.toggle('visible');//make visible
}
// updates the polygon on map
function updatePolygon(isCorrect){
    let thisPolygon = new google.maps.Polygon();
    switch(curQuest){
        case 1:
            thisPolygon = polygonPolice;
            break;
        case 2:
            thisPolygon = polygonOrange;
            break;
        case 3:
            thisPolygon = polygonArbor;
            break;
        case 4:
            thisPolygon = polygonMaple;
            break;
        case 5:
            thisPolygon = polygonMatador;
            break;
        default:
            console.error("ERROR: NO QUESTION, NO POLYGONS");
            thisPolygon = 0;
            break;
    }
    if(thisPolygon != 0){
        applyToPolygon(isCorrect, thisPolygon);
    }
}

//applies the styles to polygon
function applyToPolygon(isCorrect, thisPolygon){
    if(isCorrect == true){//correct
        thisPolygon.setOptions({
            fillColor: "rgb(0, 255, 0)",
            strokeColor: "rgb(0, 128, 0)"
        });
    }
    else{//incorrect
        //DO NOTHING, KEEP DEFAULT INCORRECT STYLE
    }
    thisPolygon.setVisible(true);//make polygon visible
}