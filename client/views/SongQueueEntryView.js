// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // on click, call enqueue to get copy of songmodel
  tagName: "tr",

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> <button class="dequeue">Remove</button></td>'),

  events: {
    'click .dequeue': function() {
      
      console.log("bye")
      this.model.dequeue();
      // this.render()
    }

  },

  render: function(){
    console.log("uauau");
    return this.$el.html(this.template(this.model.attributes));
  }
});
