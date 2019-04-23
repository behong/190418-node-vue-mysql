<template>
  <!--Main Navigation-->
  <header>

    <!-- Navbar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container">

        <!-- Brand -->
        <router-link to="/" class="navbar-brand waves-effect" href="#" >
          <strong class="blue-text">설문(Survey)</strong>
        </router-link>

        <!-- Collapse -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <!-- Left -->
          <ul class="navbar-nav mr-auto">
            <router-link to="/" tag ="li" class="nav-item">
                <a class="nav-link waves-effect" href="#">Home <span class="sr-only">(current)</span></a>
            </router-link>
            <router-link to="/adm" tag ="li" class="nav-item">
                <a class="nav-link waves-effect" href="#">Admin</a>
            </router-link>
          </ul>

          <!-- Right -->
          <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
              <a href="https://github.com/behong/" class="nav-link border border-light rounded waves-effect"
                target="_blank">
                <i class="fab fa-github mr-2"></i>JISOU GitHub
              </a>
            </li>
          </ul>

        </div>

      </div>
    </nav>
    <!-- Navbar -->

  </header>    
</template>


<script>
export default {
    created(){

    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
