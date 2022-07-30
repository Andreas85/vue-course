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
      return {
        user1: this.classControlInput === 'user1',
        user2: this.classControlInput === 'user2',
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    }
  },
  methods: {
    toggleParagraphVisible() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    }
  }
});

app.mount('#assignment');
