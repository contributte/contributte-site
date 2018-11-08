<template>
  <div class="sidebar sidebar-right">
    <ul class="sidebar-links">
      <li>
        <div class="sidebar-group first">
          <p class="sidebar-heading"><span>Nette Framework</span></p>
          <ul class="sidebar-group-items">
            <li><a href="/guide/" class="sidebar-link">Nette Framework</a></li>
            <li><a href="https://doc.nette.org/en" class="sidebar-link">Documentation</a></li>
            <li><a href="https://latte.nette.org/en" class="sidebar-link">Latte</a></li>
            <li><a href="https://tracy.nette.org/en" class="sidebar-link">Tracy</a></li>
            <li><a href="https://tester.nette.org/en" class="sidebar-link">Tester</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="sidebar-group">
          <p class="sidebar-heading"><span>Componette</span></p>
          <ul class="sidebar-group-items">
            <li><a href="https://componette.com" class="sidebar-link">Latest packages</a></li>
            <li><a href="https://componette.com/search/tracy" class="sidebar-link">Tracy</a></li>
            <li><a href="https://componette.com/search/forms" class="sidebar-link">Forms</a></li>
            <li><a href="https://componette.com/search/latte" class="sidebar-link">Latte</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="sidebar-group">
          <p class="sidebar-heading"><span>Hotlinks</span></p>
          <ul class="sidebar-group-items">
            <li><a href="https://f3l1x.io" class="sidebar-link">@f3l1x</a></li>
            <li><a href="https://github.com/contributte" class="sidebar-link">Contributte</a></li>
            <li><a href="https://github.com/nettrine" class="sidebar-link">Nettrine</a></li>
            <li><a href="https://github.com/apitte" class="sidebar-link">Apitte</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {}

</script>

<style>
  .sidebar.sidebar-right {
    right: 0;
    left: unset;
    border-left: 1px solid #eaecef;
    border-right: 0;
  }

  @media (max-width: 1024px) {
    .sidebar.sidebar-right {
      display: none;
    }
  }
</style>
