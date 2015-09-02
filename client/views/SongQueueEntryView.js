// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // on click, call enqueue to get copy of songmodel
  tagName: "table",

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> <button class="dequeue">Remove from Queue</button></td>'),


  events: {
    'click .play': function() {
      
      console.log("bye")
      // this.model.enqueue();
      // this.render()
    }

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
