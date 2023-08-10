<template>
    <div>
        <div class="">
            <router-link to="/">
                <img class="uefa" src="@/assets/uefa.png" alt="">
            </router-link>
        </div>
        <div class="container d-flex align-items-center justify-content-center">
          <div class="w100 bg-white p-3 mt-5 mb-5">
            <div class="col-12">
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
                    <button 
                        v-on:click="() => updateClubHandler(e, state.clubs.id)" 
                        type="submit" 
                        class="btn btn-primary text-align-center w-50"
                    >Update</button>
                    <router-link to="/clubs" class="btn btn-primary w-50">View clubs</router-link>
                  </div>
                </form>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { getClubs } from '../graphql/queries'
import { addClub } from '@/graphql/mutations'

export default {
  setup(props) {
    const router = useRouter()
    const state = reactive({
      clubs: {
        id: null,
        name: null,
        league: null
      },
      clubList: [],
      update: false,
      isLoading: false
    });

    const updateClubHandler = async (e, id) => {
        e.preventDefault()
       const selectedClub = state.clubList.filter((club, i) => club.id === id)[0]
       state.clubs.name = selectedClub.name
       state.clubs.league = selectedClub.league
       state.update = true
       router.push('/clubs')
       getClubs(state)

       if (state.update) {
        // efef
       } else {
        const newClub = await addClub(state)
       }
    }
    // 2:23:09
    return {
      state,
      updateClubHandler
    }
  }
}
</script>

<style scoped>
.w100 {
    width: 80%;
  }
.uefa {
    width: 100px;
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>