<template>
    <!-- 어드민 인증 페이지 -->
    <section class="container mt-5 pt-5">
        <div v-if="!EventBus.isAdmin">
            <div class="md-form w-75">
                <i class="fa fa-key prefix"></i>
                <input type="password" id="adminKey" v-model="adminKey" class="form-control">
                <label for="adminKey">Admin Key</label>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    beforCreate(){
        if(this.EventBus.isAdmin){
            this.$router.replace('/surveylist')
        }
    },
    created(){
        this.$watch('adminKey',this._.debounce(this.checkAdminKey,300))
    },
    data(){
        return{
            adminKey: String,
        }
    },
    methods:{
        checkAdminKey(){
            console.log('어드민 체크 debounce....')
            this.$http.post(this.ApiURL + 'adminkey',{key: this.adminKey})
                        .then( ret =>{
                            if ( ret.status === 200){
                                console.log("admin Pass !!" , ret)
                                this.EventBus.isAdmin = true
                                this.$router.push('surveylist')
                            }
                        })
        }
    }
}
</script>
