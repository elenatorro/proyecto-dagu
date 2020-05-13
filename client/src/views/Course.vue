<template>
  <div class="V__Course">
    <PageContainer>
      <Page>
        <PageTitle title="Grado" subtitle="Grado en A y Grado en B"/>
      </Page>
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'
import Page from '@/components/Page.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'Course',
  components: {
    PageContainer,
    Page,
    PageTitle
  }
}
</script>
<style scoped lang="scss">
.V__Course {
  width: 100%;
  height: 100%;
}
</style>
