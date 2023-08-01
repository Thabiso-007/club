<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="row">
      <div class="col-12">
        <h1 class="text-white mt-5 text-center">Uefa champions league clubs</h1>
        <div class="">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Club name</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
              <label for="league" class="form-label">League</label>
              <input type="text" class="form-control" id="league">
            </div>
            <div class="d-flex gap-5 align-items-center justify-content-center">
              <button type="submit" class="btn btn-primary w-50">Submit</button>
              <router-link to="/clubs" class="btn btn-primary w-50">View clubs</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  
}
</script>

<style scoped>
.link {

}
</style>