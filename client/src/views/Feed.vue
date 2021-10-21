<template>
  <div class="section">
      <h1 class="title">
          Feed Page

      </h1>

      <div class="columns">
       <div class="column is-one-third is-offset-one-third">
         <div class="posts" v-for="p in posts" :key="p.src">

         </div>
       </div>
      </div>
  </div>
</template>

<script>
import session from "../services/posts"
import { GetWall} from "../services/posts"

export default {
  data: ()=> ({
      posts: GetWall(session.user.handle)
  })
}
</script>

<style>

</style>