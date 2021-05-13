<template>
  <div>
    <h1>Hello, world!</h1>
    <section>
      <h2>Next</h2>
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
      await axios.get('http://118.27.26.228/my-data.php')
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
