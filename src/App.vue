<template>
  <div class="myForm">
    <form>
      <div class="row justify-content-center" style="margin-bottom: 20px">
        <div class="col-sm-4 col-lg-3">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
          </div>
        </div>
      </div>
      <div v-for="(it, index) of questions" class="row justify-content-center" style="margin-bottom: 20px">
        <app-input :question="it" :index="index"></app-input>
      </div>
    </form>
  </div>
</template>

<script>
  import AppInput from './components/AppInput'

  export default {
    data: function (){
      return {
        questions: getQuests()
      }
    },
    components: {
      AppInput
    }
  }

  function getQuests(){
    return [
      {
        type: 'radio',
        title: 'Какой тег задаёт ссылку?',
        answers: [
          'a',
          'div',
          'span',
          'img'
        ]
      },
      {
        type: 'checkbox',
        title: 'Какие из  этих тегов строчные?',
        answers: [
          'a',
          'div',
          'span',
          'img'
        ]
      }
    ];
  }
</script>

<style>

</style>

