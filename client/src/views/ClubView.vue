<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="w100 bg-white p-3 mt-5">
      <div class="d-flex justify-content-center">
        <router-link to="/" class="btn btn-primary w-50">Add club</router-link>
      </div>
      <ul>
        <li class="w100 gap-2">
          <div class="d-flex gap-5">
            <p>Club name</p>
            <p>League</p>
          </div>
          <button type="submit" class="btn btn-danger w25">Delete</button>
          <button type="submit" class="btn btn-primary w25">Update</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.w100 {
  width: 100%;
}

.w25 {
  width: 15%;
}
</style>
