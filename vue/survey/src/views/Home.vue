<template>
      <!--Section: Jumbotron-->
      <section class="card blue-gradient wow fadeIn" id="intro">

        <!-- Content -->
        <div class="card-body text-white text-center py-5 px-5 my-5">

          <h1 class="mb-4">
            <strong>JISOU 설문 시스템</strong>
          </h1>
          <p>
            <strong>Best & free guide of responsive web design</strong>
          </p>
          <p class="mb-4">
            <strong>재미나게 만들어서 재미나게 살아봅시다 켜켜켜켜:)</strong>
          </p>

            <div v-if="surveys.length">
                <div v-for="(survey,index) in surveys" v-bind:key="index">
                    <router-link :to="'/survey/'+survey.id" href="#" class="btn btn-outline-white btn-lg">
                        {{survey.title}}
                        <i class="fas fa-send ml-2"></i>
                    </router-link>
                </div>
            </div>
            <div v-else class="text-warning">오픈된 설문이 없습니다.</div>

        </div>
        <!-- Content -->
      </section>
      <!--Section: Jumbotron-->
</template>

<script>
export default {
    name: 'home',
    created(){
        let url  = this.ApiURL + "surveys"
        this.$http.get(url)
        .then( ret=>{
            if( ret.status != 200){
                alert("Error on get surveys !!!!!")
                return
            }
            this.surveys = ret.data
        })
    },
    data(){
        return {
            surveys:[]
        }
    }
}
</script>
