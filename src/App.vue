<template>
  <div class="myForm">
    <form>
      <div class="row justify-content-center" style="margin-bottom: 20px">
        <div class="col-sm-4 col-lg-3">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
                 role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                 :style="{width: progressBar}"
                 :class="progressBar === '100%' ? 'bg-success' : null"
            ></div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" style="margin-bottom: 20px">
        <template v-for="(it, index) of questions">
          <app-input v-if="current === index"
                     @app-next="current++"
                     @app-valid="appValidCheck($event, index)" :question="it" :index="index">
          </app-input>
        </template>
      </div>
    </form>
  </div>
</template>

<script>
  import AppInput from './components/AppInput'
  const questions = getQuests();
  const questionsLength = questions.length;

  export default {
    data: function (){
      return {
        questions,
        fields: new Array(questionsLength).fill({
          valid: false
        }),
        current: 0
      }
    },
    computed: {
      progressBar: function(){
        let amount = 0;
        this.fields.forEach((it) => {
          if(it.valid) amount++;
        });
        return amount / questionsLength * 100 + '%';
      }
    },
    methods: {
      appValidCheck(e, index){
        this.$set(this.fields, index, {valid: e})
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

