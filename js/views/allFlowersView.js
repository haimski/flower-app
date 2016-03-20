// Namespace our flowerApp
var app = app || {};

// The view for all the flowers
app.allFlowersView = Backbone.View.extend({

    tagName: "section",

    render: function () {
        // go over collection views array and present them
        this.collection.each(this.addFlower, this);
        return this;
    },

    addFlower: function(flower){
      var flowerView = new app.singleFlowerView({model: flower});
      this.$el.append(flowerView.render().el);
    }

});