<script>
  import PackageBase from "@/components/PackageBase";
  import readme from 'raw-loader!<%= $readme %>';
  import {getRepository} from "@/model/repositories";
  import {markdownCache} from "@/model/markdownit";

  export default {
    extends: PackageBase,
    data: () => ({
      repository: getRepository("<%= $repository.name %>"),
      readme: readme,
    }),
  }
</script>
