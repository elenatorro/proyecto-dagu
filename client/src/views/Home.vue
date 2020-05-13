<template>
  <div class="V__Home">
    <PageContainer>
      <Page>
        <PageTitle title="DAGU" subtitle="Datos Abiertos de Grados Universitarios"/>
      </Page>
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from '@/components/PageContainer.vue'
import Page from '@/components/Page.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'Home',
  components: {
    PageContainer,
    Page,
    PageTitle
  }
}
</script>
<style scoped lang="scss">
.V__Home {
  width: 100%;
  height: 100%;
}
</style>
