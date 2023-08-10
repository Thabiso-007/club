<template>
  <div>
    <div class="">
      <router-link to="/">
        <img class="uefa" src="@/assets/uefa.png" alt="">
      </router-link>
    </div>
    <div class="container d-flex align-items-center justify-content-center">
      <div class="w100 bg-white p-3 mt-5 mb-5">
        <div class="d-flex justify-content-center mb-3">
          <router-link to="/" class="btn btn-primary w-50">Add club</router-link>
        </div>
        <div class="">
          <ul class="w50 align-items-center justify-content-center">
            <li 
              class="gap-2 list"
              v-for="(item, i) in state.clubList"
              v-bind:key="i"
            >
              <div class="wrapper justify-content-between">
                <router-link class="link" :to="{name: 'club-detail', params: { id: item.id }}">
                  <div>
                    <div class="d-flex gap-2">
                      <img alt="Vue logo" class="logo" src="@/icons/europe.svg" width="20" height="20"/>
                      <h2 class="league">{{ item.league }}</h2>
                    </div>
                    <div class="d-flex gap-2">
                      <img alt="Vue logo" class="logo" src="@/icons/club.svg" width="20" height="20"/>
                      <h3 class="club">{{ item.name }}</h3>
                    </div>
                  </div>
                </router-link>
                <div class="btn">
                  <button 
                    type="submit" 
                    class="btn btn-danger"
                    v-on:click="() => deleteClubHandler(e, item.id)"
                  >Delete</button>
                  <button 
                    type="submit" 
                    class="btn btn-primary mt-2"
                    v-on:click="() => updateClubHandler(e, item.id)"
                  >Update</button>
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
        <!-- <div class="">
            <h2>No Clubs</h2>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router';

import { getClubs } from '../graphql/queries'
import { deleteClub } from '../graphql/mutations'

export default {
  setup(props) {
    const route = useRoute()
    const state = reactive({
      clubs: {
        id: route.params.id,
        name: null,
        league: null
      },
      clubList: [],
      update: false,
      isLoading: false
    });

    onMounted(async() => {
      const getAllClubs = await getClubs(state)
      state.clubList = getAllClubs
    })

    const deleteClubHandler = async (e, itemId) => {
      // console.log(itemId)
      const deletedClub = await deleteClub(state, itemId)
      const getAllClubs = await getClubs(state)
      state.clubList = getAllClubs
    }

    return {
      state,
      deleteClubHandler,
    }
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}

.w100 {
  width: 100%;
}

.w15 {
  width: 15%;
}

.list {
  list-style: none;
}

.wrapper {
  width: 100%;
  background-color: rgb(149, 168, 255);
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 20px 0 20px 0;
  justify-content: space-around;
}

.btn {
  display: flex;
  flex-direction: column;
}

.league {
  font-size: 20px;
  font-weight: 700;
}

.club {
  font-size: 16px;
  font-weight: 700;
}

.image-league {
  width: 100px;
}

.uefa {
  width: 100px;
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
