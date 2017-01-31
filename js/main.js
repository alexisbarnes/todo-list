// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  methods: {
    addItem() {
      // alert('adding content.');
      this.items.push({
        title: this.newTitle,
        content: this.newContent
      })

      this.newTitle = '',
      this.newContent = ''
    },
    cancelItem() {
      this.newTitle = '',
      this.newContent = ''
    },
    removeItem(i) {
      this.items.splice(i, 1);
    },
    editTask() {
      // this.title = this.items.title && this.items.title.trim();
    }


  },
  data: {
    newTitle: '',
    newContent: '',
    items: [
      {
      title: 'Todo Item Title',
      content: 'Todo Item Content'
    }
  ]
  },
  mounted() {
    // alert('ready');
  }
});
