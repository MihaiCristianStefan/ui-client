<template>
  <div class="flex-col question-container">
    <div class="question-text">How do you find our service?</div>
    <div class="flex-row question-answer">
      <div>
        <input type="radio" value="A" v-model="answer">
      </div>
      <div>A.</div>
      <div>Good</div>
    </div>
    <div class="flex-row question-answer">
      <div>
        <input type="radio" value="B" v-model="answer">
      </div>
      <div>B.</div>
      <div>Fair</div>
    </div>
    <div class="flex-row question-answer">
      <div>
        <input type="radio" value="C" v-model="answer">
      </div>
      <div>C.</div>
      <div>Neutral</div>
    </div>
    <div class="flex-row question-answer">
      <div>
        <input type="radio" value="D" v-model="answer">
      </div>
      <div>D.</div>
      <div>Bad</div>
    </div>
    <div class="flex-row full-width actions">
      <button class="full-width btn-submit" @click="submit()">Submit</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => {
    return {
      answer: '',
    }
  },
  methods: {
    submit() {
      this.axios.post('/quiz/answers', 
        {
          answer: this.answer
        }).then((response) => {
          console.log(this.$router);
          this.$router.push('/statistics')
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>

<style lang="scss">
.question-container {
  width: 400px;
}

.question-text {
  height: 45px;
  line-height: 45px;
  font-weight: bold;
  font-size: 14pt;
}

.question-answer {
  height: 30px;
  line-height: 30px;
  font-size: 12pt;
}

.actions {
  margin-top: 20px;
  height: 45px;
  line-height: 45px;
}

.btn-submit {
  background-color: #03A9F4;
  color: #ffffff;
  font-weight: bold;
  font-size: 12pt;
  border: none;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    background-color: #0288D1;
  }
}

</style>