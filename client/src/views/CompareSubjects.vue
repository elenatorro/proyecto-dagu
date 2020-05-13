<template>
  <div class="V__CompareSubjects">
    <PageContainer>
      <Page>
        <PageTitle title="Asignaturas" subtitle="Grado A vs Grado B"/>
      </Page>
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'
import Page from '@/components/Page.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'CompareSubjects',
  components: {
    PageContainer,
    Page,
    PageTitle
  }
}
</script>
<style scoped lang="scss">
.V__CompareSubjects {
  width: 100%;
  height: 100%;
}
</style>
