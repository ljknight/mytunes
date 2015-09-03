// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> <button class="play">Play</button><button class="queue">Add to Queue</button></td>'),

  events: {
    'click .play': function() { //if you're not referring to a function in the current view, wrap into anonymous function
      this.model.play();
    }, 
    'click .queue': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    console.log("uauauauauauau")
    return this.$el.html(this.template(this.model.attributes));
  }

});
