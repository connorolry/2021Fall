<template>
  <div class="buttons" v-if="!name">
      <a class="button is-primary">
       <strong>Sign up</strong>
     </a>
       <a class="button is-light" @click="login">
            Log in
        </a>
    </div> 
    <div v-else>
                      Hello{{name}}
    </div>
</template>

<script>
import Session from "../services/session"
export default {
    data: ()=>({ 
        name: null,
        Session
    }),
    method: {
        login() {
            this.name = 'Bob';
        }
    },
    computed:{
        name(){
            return this.Session.user.FirstName + ' ' + this.Session.user.Lastname
        }
    }
}
</script>

<style>

</style>