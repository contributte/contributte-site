<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg justify-content-between c-navbar-blue">
        <nuxt-link to="/" class="navbar-brand">
          <img src="https://avatars0.githubusercontent.com/u/22681157?v=4&size=30">
          &nbsp;
          Contributte
        </nuxt-link>
        <div>
          <ul class="navbar-nav">
            <nuxt-link tag="li" class="nav-item" :to="{path: '/packages'}" activeClass="active">
              <a class="nav-link">All packages</a>
            </nuxt-link>
            <nuxt-link tag="li" class="nav-item" :to="{path: '/team'}" activeClass="active">
              <a class="nav-link">About us</a>
            </nuxt-link>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main">
      <div class="container d-flex">
        <div id="sidebar">
          <sidebar/>
        </div>
        <div
          id="content"
          class="flex-grow-1"
          :class="{'content--p0': /packages\/.+/.test($route.path)}"
        >
          <nuxt/>
        </div>
      </div>
    </main>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>&copy; Made by Contributte folks. Powered by <a href="https://nuxtjs.org">Nuxt.js</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import Sidebar from './../components/Sidebar';

  export default {
    components: {
      Sidebar
    }
  }
</script>
