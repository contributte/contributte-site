<template>
  <nav>
    <div class="sidebar-group">
      <h3>Get started</h3>
      <ul class="list-unstyled components">
        <li class="active">
          <nuxt-link to="/guide">How to start</nuxt-link>
        </li>
      </ul>
    </div>
    <sidebar-group group="Nette" :repositories="getRepositories('nette-contrib')"/>
    <sidebar-group group="Symfony" :repositories="getRepositories('symfony')"/>
    <sidebar-group group="Other" :repositories="getRepositories(null)"/>
  </nav>
</template>

<script>
  import {getEnabledRepositories} from "../model/repositories";
  import SidebarGroup from "./SidebarGroup";

  export default {
    components: {SidebarGroup},
    data() {
      return {
        repositories: getEnabledRepositories()
      };
    },
    methods: {
      getRepositories(category) {
        return getEnabledRepositories().filter(r => {
          if (category === null) return r['category'] === undefined;
          return r.category === category;
        });
      }
    }
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
