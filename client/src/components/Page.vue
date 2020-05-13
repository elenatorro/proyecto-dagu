<template>
<div class="C__Page">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageTitle from '@/components/PageTitle.vue'

@Component({
  components: {
    PageTitle
  }
})
export default class Page extends Vue {
}
</script>

<style scoped lang="scss">
.C__Page {
    width: 21cm;
    min-height: 29.7cm;
    padding: 2cm;
    margin: 1cm auto 1cm 0;
    border: 1px #D3D3D3 solid;
    background: white;
    box-shadow: 5px 5px 1px #909090;
}

@media print {
  .C__Page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: none;
    background: transparent;
    page-break-after: always;
  }
}
</style>
