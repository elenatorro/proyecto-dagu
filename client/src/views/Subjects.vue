<template>
  <div class="V__Subjects">
    <PageContainer>
      <Page>
        <PageTitle title="Asignaturas" subtitle="Grado A"/>
      </Page>
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'
import Page from '@/components/Page.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'Subjects',
  components: {
    PageContainer,
    Page,
    PageTitle
  }
}
</script>
<style scoped lang="scss">
.V__Subjects {
  width: 100%;
  height: 100%;
}
</style>
