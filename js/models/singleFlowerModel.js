// Namespace our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({

    defaults: {
        color: "pink",
        img: "images/placeholder.jpg",
        state: "oregon"
    }

    /*stage 1 examples
    initialize: function() {
        //console.log("A model instance named " + this.get("name") +  " has been created and it costs " + this.get("price"));

        // triggers any change in the model
        this.on('change', function(){
            console.log("Something in our model has changed");
        });

        // triggers change in the price
        this.on('change:price', function(){
            console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars");
        });

        // triggers change in the originCountry
        this.on('change:originCountry', function(){
           console.log(this.get("name") + " origni country is "+ this.get("originCountry"));
        });
    }*/

});