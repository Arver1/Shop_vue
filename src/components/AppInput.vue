<template>
  <div class="col-sm-4 col-lg-3">
    <h2>{{ question.title }}</h2>
    <div v-for="answer of question.answers" class="form-group">
      <input :type="question.type" :id="answer" :name="index" :value="answer" @change="checkValid">
      <label :for="answer"> {{ answer }}</label>
    </div>
    <button class="btn btn-success" :disabled="!valid" @click.prevent="next">Далее</button>
  </div>
</template>

<script>

  export default {
    props: {
      question: {
        type: Object,
        required: true
      },
      index: Number
    },
    data: function(){
      return {
        valid: false
      }
    },
    computed: {
      value: function(){
        if(this.question.type === 'checkbox'){
          const obj = {};
          this.question.answers.forEach((it) =>  obj[it] = false)
          return obj;
        }
        return false
      }
    },
    methods: {
      checkValid: function(e){
        if(this.question.type === 'checkbox'){
          let flag = false;
          this.value[e.target.value] = !this.value[e.target.value];
          for(let it in this.value) {
            if(this.value[it]) flag = true;
          }
          this.valid = flag;
          return this.$emit('app-valid', flag)
        }
        this.valid = true;
        return this.$emit('app-valid', true)
      },
      next: function(){
        this.$emit('app-next')
      }
    }
  }
</script>

<style>

</style>
