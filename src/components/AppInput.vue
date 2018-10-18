<template>
  <div class="col-sm-4 col-lg-3">
    <h2>{{ question.title }}</h2>
    <div v-for="answer of question.answers" class="form-group">
      <input :type="question.type" :id="answer" :name="index">
      <label :for="answer"> {{ answer }}</label>
    </div>
    <button class="btn btn-success">Далее</button>
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

      }
    }
  }
</script>

<style>

</style>
