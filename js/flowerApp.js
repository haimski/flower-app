var redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
});

var rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
});

var heirloomRoses = new  app.singleFlower({
    name: "Heirloom roses",
    price: 19.95,
    img: "images/heirloomPinkRoses.jpg",
    link: "heirloomRose"
});

var wildRoses = new app.singleFlower({
   name: "Wild Roses",
   price: 40.01
});

var tentalizingTulips = new app.singleFlower({
    name: "Tentalizing Tulips",
    price: 25.95,
    color: "yellow"
});
var fluerDeLis = new app.singleFlower({
    name: "Fleur-de-lis",
    price: 29.95,
    color: "red"
});

// instantiation of the collection model data
var flowerGroup = new app.FlowersCollection([ redRoses, rainbowRoses, heirloomRoses ]);

// creating the collection view with the model collection data
var flowerGroupView = new app.allFlowersView({ collection: flowerGroup });
// render function calls the addFlower method in the view and prints it into the #allFlowers
$("#allFlowers").html(flowerGroupView.render().el);

/* this is for the data testing stage

var europeanFlower = new app.FlowersCollection([ tentalizingTulips, fluerDeLis ]);
wildRoses.set('price', 39.95);  // change the price (can be triggered)
flowerGroup.add(wildRoses);  // add model instance to a collection (must be created as a model instance)
flowerGroup.remove(wildRoses); // remove model instance from a collection
tentalizingTulips.set('originCountry', 'Holland'); // setting a new data attribute

console.log(europeanFlower.toJSON());*/
console.log(flowerGroup.toJSON());



/*
console.log(heirloomRoses.toJSON());
console.log(rainbowRoses.toJSON());
console.log(redRoses.toJSON());*/


var flowerRouter = new app.Router();

Backbone.history.start();