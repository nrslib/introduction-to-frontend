<template>
  <div>
    <h1>Hello, world!</h1>
    <section>
      <h2>Exercise</h2>
      <ul>
        <li>Result: <span id="result"></span></li>
        <li>Message: <span id="message"></span></li>
      </ul>
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
