<template>
  <div class="component-container">
    <active-user :username="username" :age="age"></active-user>
  </div>
  <div class="component-container">
    <user-data @username-input="updateUsername" @age-input="updateAge"></user-data>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: 'testuser',
      age: 0
    };
  },
  methods: {
    updateUsername(username) {
      this.username = username;
    },
    updateAge(age) {
      this.age = parseInt(age);
    }
  }
}

</script>

<style>

.component-container {
  width: 30%;
  float: left;
}

</style>
