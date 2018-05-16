<template>
  <div class="package">
    <div class="toolbar d-flex">
      <div class="flex-fill">
        <div class="composer d-inline-block">
          <span class="composer-clipboard octicon octicon-desktop-download"
            title="Click &amp; copy"
            :data-composer="'composer require contributte/'+repository.name"
          />
          composer require contributte/{{repository.name}}
        </div>
      </div>
      <div class="flex-fill text-right">
        <a class="btn btn-sm btn-info" :href="'https://github.com/contributte/'+repository.name">
          <span class="octicon octicon-mark-github"></span> Docs
        </a>
        <a class="btn btn-sm btn-dark" :href="'https://github.com/contributte/'+repository.name">
          <span class="octicon octicon-mark-github"></span> Github
        </a>
        <a class="btn btn-sm btn-warning" :href="'https://packagist.org/packages/contributte/'+repository.name">
          <span class="octicon octicon-desktop-download"></span> Packagist
        </a>
      </div>
    </div>
    <div class="readme">
      <div v-html="readme"></div>
    </div>
  </div>
</template>

<script>
  import ClipboardJS from 'clipboard';

  export default {
    head() {
      return {
        title: `Package: contributte / ${this.repository.name}`,
        meta: [
          {hid: 'description', name: 'description', content: this.repository.description}
        ]
      }
    },
    mounted() {
      const clipboard = new ClipboardJS(this.$el.querySelector('span.composer-clipboard'), {
        text: function (trigger) {
          return trigger.getAttribute('data-composer');
        }
      });
      clipboard.on('success', function (e) {
        e.trigger.setAttribute('title', 'Copied!');
      });
    },
  }
</script>

<style lang="scss">
  .toolbar {
    background: #cdcdcd;
    padding: 10px;

    .composer {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 5px 10px;
    }

    .btn {
      margin-left: 2px;
    }

    .composer-clipboard {
      cursor: pointer;
    }
  }

  .readme {
    padding: 20px;
  }

  table {
    padding: 0;
    tr {
      border-top: 1px solid #cccccc;
      background-color: white;
      margin: 0;
      padding: 0;
      th :first-child, td :first-child {
        margin-top: 0;
      }
      th :last-child, td :last-child {
        margin-bottom: 0;
      }
      th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
      td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
      }
    }
    tr:nth-child(2n) {
      background-color: #f8f8f8;
    }
  }

  pre {
    code {
      display: block;
      overflow-x: auto;
      background: #cdcdcd;
      color: #000;
      border-radius: 5px;
    }
    code, code.hljs {
      padding: 1em;
    }
  }
</style>
