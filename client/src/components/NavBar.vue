<template>
  <nav class="C_NavBar">
    <ul class="C_NavBar__List">
      <li class="C_NavBar__ListItem"
        v-for="(page, index) in pages"
        :key="index"
        :page="page">
        <router-link
            :to="page.route"
            active-class="active-page"
            exact>
            {{page.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  private pages = [{
    name: 'General',
    route: '/'
  }, {
    name: 'Grado',
    route: 'grado'
  }, {
    name: 'Asignaturas',
    route: 'asignaturas'
  }, {
    name: 'Comparador de Grados',
    route: 'comparador-grados'
  }, {
    name: 'Comparador de Asignaturas',
    route: 'comparador-asignaturas'
  }]
}
</script>
<style lang="scss" scoped>
.C_NavBar {
  margin: 1cm 0 1cm auto;
  text-align: right;
  padding-top: 2cm;
  box-sizing: border-box;
  min-width: 10cm;
}

.C_NavBar__List {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  padding-right: 4em;
}

.C_NavBar__ListItem {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  padding: 2em;

  a {
    text-decoration: none;
    color: inherit;

    &:visited,
    &:focus {
      color: inherit;
    }

    &.active-page {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}

@media print {
  .C_NavBar {
    display: none;
  }
}
</style>
