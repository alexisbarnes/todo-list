// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  methods: {
    addItem() {
      // alert('adding content.');
      if (this.editingItem) {
        //update items content
        this.editingItem.title = this.newTitle;
        this.editingItem.content = this.newContent;

      } else {
      this.items.push({
        title: this.newTitle,
        content: this.newContent
      });
    }

      this.cancelItem();
    },
    cancelItem() {
      this.editingItem = null;
      this.newTitle = '',
      this.newContent = ''
    },
    removeItem(i) {
      this.items.splice(i, 1);

    },

    //create a temp placeholder, which can be referenced later to update the item and populate the input fields with the current items values
    editTask(i) {
      // this.title = this.items.title && this.items.title.trim();
      this.editingItem = i
      this.newTitle = i.title
      this.newContent = i.content

    }


  },
  data: {
    newTitle: '',
    newContent: '',
    editingItem: null,
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
