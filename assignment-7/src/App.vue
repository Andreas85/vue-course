<template>
  <h2>My Course Goal</h2>
  <h3 v-if="courseGoal.isVisible">{{ courseGoal.text }}</h3>
  <button @click="toggleCourseGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>

import { reactive } from 'vue';

export default {
  setup() {

    const courseGoal = reactive({
      text: 'Finish the course and master Vue',
      isVisible: true
    });

    function toggleCourseGoal() {
      courseGoal.isVisible = !courseGoal.isVisible;
    }
    
    return { courseGoal: courseGoal, toggleCourseGoal: toggleCourseGoal };
/*
    // Ref object
    const courseGoal = ref({
      text: 'Finish the course and master Vue',
      isVisible: true
    });

    function toggleCourseGoal() {
      courseGoal.value.isVisible = !courseGoal.value.isVisible;
    }

    return { courseGoal: courseGoal, toggleCourseGoal: toggleCourseGoal };
*/
/*
    // Separate refs
    const courseGoal = ref('Finish the course and master Vue');
    const courseGoalIsVisible = ref(true);

    function toggleCourseGoal() {
      courseGoalIsVisible.value = !courseGoalIsVisible.value;
    }

    return { courseGoal: courseGoal, toggleCourseGoal: toggleCourseGoal, courseGoalIsVisible: courseGoalIsVisible };
*/
  }  
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>