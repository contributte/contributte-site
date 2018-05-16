<template>
  <section class="container homepage">
    <h1>Contributte</h1>
    <div class="card">
      <img class="card-img-top" src="/misc/welcome.jpg" alt="Contributte for ALL">
      <div class="card-body">
        <p class="card-text">Hi! You're seeing <strong>development</strong> version of our website. Please be patient.</p>
        <nuxt-link to="/packages" class="btn btn-primary">Take a look to all packages.</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style>
  .homepage {
    margin-bottom: 20px;
  }
</style>
