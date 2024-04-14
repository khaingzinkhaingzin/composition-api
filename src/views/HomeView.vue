<template>
  <div class="home">
    <h1>Person One</h1>
    <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="changeOne">change one</button>

    <h1>Person Two</h1>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="changeTwo">change two</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    let personOne = ref({name: "Kyaw", age: 27});
    let changeOne = () => {
      personOne.value.name = "CKyaw";
    };

    let personTwo = reactive({name: "Kyaw 2", age: 27});
    let changeTwo = () => {
      personTwo.name = "CKyaw 2";
    };
    // reactive not point to value but can not use in 'string, boolean, number, (primitive value)
    // reactive("string");

    return {personOne, changeOne, personTwo, changeTwo};
  }
}
</script>
