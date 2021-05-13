<template>
  <div>
    <h1>Hello, world!</h1>
    <section>
      <h2>Exercise</h2>
      <ul>
        <li>Result: {{data}}</li>
        <li>Message: {{message}}</li>
      </ul>
      <button @click="executeButtonClick">run</button>
      <button @click="deleteButtonClick">delete</button>
    </section>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      data: '',
      message: ''
    }
  },
  methods: {
    executeButtonClick() {
      this.message = 'execute button clicked';
      this.data = 'test';
    },
    deleteButtonClick() {
      this.message = 'delete button clicked';
      this.data = '';
    }
  }
}
</script>
