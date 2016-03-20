// Namespace our flowerApp
var app = app || {};

// The view for a single model view, which is one flower
app.singleFlowerView = Backbone.View.extend({

    /* these to properties values set to styling purposes
     * the properties names are provided by the API
     * by default tagName is DIV and any other attribute should be added as a property to show in the HTML */
    tagName: "article",
    className: "flowerListItem",

    // declaring the template
    template: _.template( $("#flowerElement").html()),

    render: function(){
        var flowerTemplate = this.template(this.model.toJSON());
        this.$el.html(flowerTemplate);
        return this;
    },

    events: {
        'mouseover': 'addBgColor',
        'mouseout': 'removeBgColor'
    },

    addBgColor: function() {
        this.$el.css("background","#CC6699");
    },

    removeBgColor: function() {
        this.$el.css("background","#E0E0E0");
    }



});