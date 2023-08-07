<template>
  <div class="wrapper">
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="">
          <img class="logo" src="@/assets/uefa.png" alt="">
        </div>
        <div class="col-12">
          <h1 class="text-dark mt-5 text-center">Uefa champions league clubs</h1>
          <div class="">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label text-dark">Club name</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="name"
                  v-model="state.clubs.name"
                >
              </div>
              <div class="mb-3">
                <label for="league" class="form-label text-dark">League</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="league"
                  v-model="state.clubs.league"
                >
              </div>
              <div class="d-flex gap-5 align-items-center justify-content-center">
                <button v-on:click="submitHandler" type="submit" class="btn btn-primary w-50">Add</button>
                <router-link to="/clubs" class="btn btn-primary w-50">View clubs</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { addClub } from '../graphql/mutations'
import { getClubs } from '../graphql/queries'
// 2:10:15
export default {
  setup(props) {
    const router = useRouter()
    const state = reactive({
      clubs: {
        name: null,
        league: null
      },
      clubList: [],
      update: false,
      isLoading: false
    });
 
    // submit club
    const submitHandler = async (e) => {
      e.preventDefault()
      // add club
      const newClub = await addClub(state)
      // get all the clubs
      const getAllClubs = await getClubs(state)
      state.clubList = getAllClubs
      // route to clubs after submitting
      router.push('/clubs')
    }
    
    return {
      state,
      submitHandler
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: rgba(200, 200, 200, 0.5);
  width: 100%;
  height: 100vh;
}
.logo {
  width: 200px;
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>