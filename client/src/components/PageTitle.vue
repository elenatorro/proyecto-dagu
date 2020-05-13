<template>
<div class="C__PageTitle">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PageTitle extends Vue {
  @Prop({ default: 'Page Title' }) public title!: string;
  @Prop({ default: 'Page Subtitle' }) public subtitle!: string;
}
</script>
