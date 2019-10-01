<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-2">
        <Sidebar />
      </div>
      <div class="col-lg-6 col-md-8 col-10">
        <ProfileInfo />
      </div>
      <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import ProfileInfo from '@/components/ProfileInfo.vue';

export default {
  name: 'Profile',
  components: {
    Sidebar,
    ProfileInfo
  }
}
</script>

