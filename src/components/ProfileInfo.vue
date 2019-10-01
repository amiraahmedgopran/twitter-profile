<template>
  <div class="profile-info">
    <div class="profile-info-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-1 col-2">
            <svg viewBox="0 0 24 24" class="back">
              <g>
                <path
                  d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
                />
              </g>
            </svg>
          </div>
          <div class="col-md-10 col-8">Amira</div>
        </div>
      </div>
    </div>
    <div class="cover-pic"></div>
    <div
      class="profile-pic"
      style=" background-image: url(https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png);"
    ></div>
    <div class="d-flex justify-content-end">
      <button class="edit-profile" data-toggle="modal" data-target="#editProfile">Edit Profile</button>
      <EditProfile />
    </div>
    <div class="profile-details">
      <h3>Amira</h3>
      <p>@amira1234</p>
      <p>
        <svg viewBox="0 0 24 24" class="calinder">
          <g>
            <path
              d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
            />
            <circle cx="7.032" cy="8.75" r="1.285" />
            <circle cx="7.032" cy="13.156" r="1.285" />
            <circle cx="16.968" cy="8.75" r="1.285" />
            <circle cx="16.968" cy="13.156" r="1.285" />
            <circle cx="12" cy="8.75" r="1.285" />
            <circle cx="12" cy="13.156" r="1.285" />
            <circle cx="7.032" cy="17.486" r="1.285" />
            <circle cx="12" cy="17.486" r="1.285" />
          </g>
        </svg>
        Joined November 2018
      </p>
      <p>
        <a href="#">50 Following</a>
        <a href="#" class="ml-3">100 Follower</a>
      </p>
    </div>
    <div class="profile-header">
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 p-0 text-center">
                <router-link to="/">Home</router-link>
            </div>
            <div class="col-md-3 p-0 text-center">
                <router-link to="/TweetsReplies">Tweets & Replies</router-link>
            </div>
            <div class="col-md-3 p-0 text-center">
                <router-link to="/Media">Media</router-link>
            </div>
            <div class="col-md-3 p-0 text-center">
                <router-link to="/links">links</router-link>
            </div>
        </div>
    </div>
    </div>
    
    <div class="">
        <router-view></router-view>
    </div>
    
  </div>
</template>
<script>
import EditProfile from "@/components/EditProfile.vue";
export default {
  name: "ProfileInfo",
  components: {
    EditProfile
  }
};
</script>

