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
      <router-link to="/next">Next</router-link>
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
    async executeButtonClick() {
      this.message = 'execute button clicked';
      const self = this;
      axios.get('http://118.27.26.228/my-data.php')
        .then(function(response) {
          self.data = response.data['date'];
          self.message = 'data received';
        });
    },
    deleteButtonClick() {
      this.message = 'delete button clicked';
      this.data = '';
    }
  }
}
</script>
