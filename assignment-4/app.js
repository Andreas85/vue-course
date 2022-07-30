const app = Vue.createApp({
  data() {
    return {
      classControlInput: '',
      paragraphIsVisible: true,
      inlineStyleInput: ''
    }
  },
  computed: {
    paragraphClass() {
      let classes = [];
      if (this.classControlInput == 'user1') {
        classes.push('user1');
      } else if (this.classControlInput == 'user2') {
        classes.push('user2');
      }

      classes.push(this.paragraphIsVisible ? 'visible' : 'hidden');
      return classes;
    }
  },
  methods: {
    toggleParagraphVisible() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    }
  }
});

app.mount('#assignment');
