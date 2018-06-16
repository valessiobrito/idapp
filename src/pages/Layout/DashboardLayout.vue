<template>
  <div class="wrapper">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/perfil">
        <md-icon>person</md-icon>
        <p>Perfil</p>
      </sidebar-link>
      <sidebar-link to="/documentos">
        <md-icon>library_books</md-icon>
        <p>Documentos</p>
      </sidebar-link>
      <sidebar-link to="/enderecos">
        <md-icon>location_on</md-icon>
        <p>Endereços</p>
      </sidebar-link>
      <sidebar-link to="/aprovacoes">
        <md-icon>offline_pin</md-icon>
        <p>Aprovações</p>
      </sidebar-link>
<!--      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
 -->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
