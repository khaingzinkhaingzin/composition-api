<template>
  <div class="home">
    <h1>Hello {{ name }}. I'm {{ age }} years old.</h1>
    <input type="text" v-model="name">
    <button @click="handleClick">Click</button>
    <button @click="age++">increase age</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    let name = ref("KTZ"); // reactive value
    let age = ref(27);

    let handleClick = () => {
      name.value = "PTR";
    };
    return {name, age, handleClick};
  }
}
</script>
