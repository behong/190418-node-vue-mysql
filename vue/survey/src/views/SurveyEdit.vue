<template>
    <section>
        <!-- Material form login -->
        <div class="card">

        <h5 class="card-header info-color white-text text-center py-4">
            <strong>{{survey.title}}</strong>
            <a @click.prevent="toggleSurveyEditing()" href="#" class="pull-right"> <i class="fa-edit"></i></a>
        </h5>

        <!--Card content-->
        <div v-if="isEditing" class="card-body px-lg-5 pt-0">

            <!-- Form -->
            <form class="text-center" style="color: #757575;">

            <!-- Email -->
            <div class="md-form">
                <input type="text" id="title" v-model="survey.title" class="form-control">
                <label for="title">설문 제목</label>
            </div>

            <!-- Password -->
            <div class="md-form">
                <input type="password" id="materialLoginFormPassword" class="form-control">
                <label for="materialLoginFormPassword">Password</label>
            </div>            

            <div class="d-flex justify-content-around">
                <button @click.prevent="toggleSurveyEditing()" class="btn btn-outline-info btn-block my-4 waves-effect z-depth-0" type="submit">취소</button>
                <button class="ml-2 btn btn-outline-danger btn-block my-4 waves-effect z-depth-0" type="submit">삭제</button>
                <button class="ml-2 btn btn-outline-info btn-block my-4 waves-effect z-depth-0" type="submit">저장</button>
            </div>

            </form>
            <!-- Form -->

        </div>

        </div>
        <!-- Material form login -->
    </section>
</template>


<script>
export default {
    created(){
        let id =  this.$route.params.id;
        
        let url  = this.ApiURL + 'surveys/' + id
        this.$http.get(url)
        .then( ret=>{
            this.survey = ret.data
        })
    },
    data(){
        return{
            survey:{},
            isEditing : false
        }
    },
    methods:{
        toggleSurveyEditing(){
            this.isEditing = !this.isEditing
        }
    }
}
</script>
