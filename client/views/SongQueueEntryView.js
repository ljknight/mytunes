// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // on click, call enqueue to get copy of songmodel

  initialize: function() {
    // listen for enqueue being called and render the view
    this.model.on('change', this.render, this);
  },

  tagName: "tr",

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> <button class="dequeue">Remove</button></td>'),

  // events: {
  //   'click .enqueue': function() {
      
  //     console.log("bye")
  //     // this.model.enqueue();
  //     // this.render()
  //   }

  // },

  render: function(){
    console.log("render");
    return this.$el.html(this.template(this.model.attributes));
  }
});
