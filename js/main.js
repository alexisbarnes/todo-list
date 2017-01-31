// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  methods: {
    addItem() {
      // alert('adding content.');
      this.titles.push(this.newTitle);
      this.contents.push(this.newContent);

      this.newTitle = 'Todo Item Title',
      this.newContent = 'Todo item content'
    }

  },
  data: {
    newTitle: '',
    newContent: '',
    titles: ['Title'],
    contents: ['Content']
  },
  mounted() {
    // alert('ready');
  }
});
