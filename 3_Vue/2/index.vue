<template>
  <div>
    <h1>Hello, world!</h1>
    <section>
      <h2>Data</h2>
      <p id="result"></p>
      <button @click="executeButtonClick">run</button>
      <button @click="deleteButtonClick">delete</button>
    </section>
  </div>
</template>

<script>
module.exports = {
  methods: {
    executeButtonClick() {
      alert('execute button clicked');
    },
    deleteButtonClick() {
      alert('delete button clicked');
    }
  }
}
</script>
