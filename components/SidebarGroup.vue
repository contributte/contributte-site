<template>
  <div class="sidebar-group">
    <h3>{{group}}</h3>
    <ul class="list-unstyled components">
      <li
        v-for="(repository) of repositories"
        :key="repository.name"
      >
        <nuxt-link :to="{name: 'packages-'+repository.name}" activeClass="active">{{ repository.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: [
      "group",
      "repositories"
    ]
  }
</script>

<style lang="scss">
  .sidebar-group {
    margin-bottom: 20px;

    ul {
      padding-left: 8px;
      li {
        a {
          border: none;
          color: #717171;
          display: block;
          font-size: 14px;
          padding: 4px 0;
          transition: color .3s;
        }

        a.active {
          color: #3765af;
        }
      }
    }
  }
</style>
