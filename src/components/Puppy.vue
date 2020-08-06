<template>
  <div>
    <br>
    <h3>Had enough?</h3>
    <h3>Here are some puppies!</h3>
    <br>
    <img alt="pic" v-bind:src="picurl" width="30%" height="30%">
    <br>
    <button type="button" v-on:click="newpic" width="5%" height="5%">Random Puppy</button>
  </div>
</template>

<script>
var axios = require('axios')

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

export default {
  name: 'puppy',
  data () {
    return {
      picurl: ""
    }
  },
  methods: {
    newpic: function () {
      axios
        .get(process.env.VUE_APP_PUPPY+"/woof.json")
        .then(
          response => (
            this.picurl = response.data.url
            )
        )
      console.log(this.picurl)
      console.log(checkURL(this.picurl))
    }
  },
  mounted () {
    this.newpic()
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
  border-radius: 4px;
  background-color: #3e8e41;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>

