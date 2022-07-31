<template>
  <label for="username">Username</label><input type="text" @input="$emit('username-input', username)" v-model="username"><br>
  <label for="age">Age</label><input type="text" @input="$emit('age-input', age)" v-model="age"><br>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      age: 0
    };
  },
  emits: ['username-input', 'age-input'],
}

</script>


<style>

</style>
