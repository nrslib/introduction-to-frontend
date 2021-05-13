<p>Message: {{message}}</p>
<button @click="executeButtonClick">run</button>

<script>
module.exports = {
  data: function() {
    return {
      message: ''
    }
  },
  methods: {
    executeButtonClick() {
      this.message = 'execute button clicked';
    }
  }
}
</script>
