<template>
  <div>
    <br>
    <button type="button" v-on:click="refresh">Refresh</button>
    <h1>{{ sentence }}</h1>
  </div>
</template>

<script>
const axios = require('axios')
const instance = axios.create({
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

export default {
  name: 'evil',
  data () {
    return {
      sentence: "Wait for it..."
    }
  },
  methods: {
    refresh: function () {
      instance
        .get(process.env.VUE_APP_INSULT+"/generate_insult.php?lang=en&type=json")
        .then(
          response => (this.sentence = response.data.insult)
        )
    }
  },
  mounted () {
    this.refresh()
  }
} 
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

button:hover {background-color: #3e8e41}

button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>

