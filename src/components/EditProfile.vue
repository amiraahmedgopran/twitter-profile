<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="editProfile"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editProfileLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="ml-3">Edit profile</h4>
            <button class="save">Save</button>
          </div>
          <div class="modal-body">
            <div class="cover-pic small d-flex align-items-center justify-content-center">
              <div class="camera-icon">
                <svg viewBox="0 0 24 24">
                  <g>
                    <path
                      d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"
                    />
                    <path
                      d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"
                    />
                  </g>
                </svg>
                <input type="file" class="change-photo" />
              </div>
            </div>
            <div
              class="profile-pic small d-flex align-items-center justify-content-center"
              style=" background-image: url(https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png);"
            >
              <div class="camera-icon">
                <svg viewBox="0 0 24 24">
                  <g>
                    <path
                      d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z"
                    />
                    <path
                      d="M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z"
                    />
                  </g>
                </svg>
                <input type="file" class="change-photo" />
              </div>
            </div>

            <div class="container mt-5">
              <div class="change-info">
                <label :for="name">Name</label>
                <input value="Amira" v-model="text" :id="name" :name="name" />
              </div>
              <div class="pull-right">
                <span>{{ namecharactersRemaining }}</span>/50
              </div>

              <div class="change-info">
                <label>Bio</label>
                <textarea placeholder="Add Your bio"></textarea>
              </div>
              <div class="pull-right">
                <span>0</span>/50
              </div>

              <div class="change-info">
                <label>Website</label>
                <input type="text" placeholder="Add Your website" />
              </div>
              <div class="pull-right">
                <span>0</span>/50
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
   props: {
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    },
    data: function() {
      return {
        text: '',
        maxCharacters: 50,
      }
    },
    computed: {
      namecharactersRemaining: function () {
        return this.text.length;
      }
    }
};
</script>