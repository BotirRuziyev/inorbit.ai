<template>
  <section
    class="sign_up d-flex align-items-center justify-content-center"
    :class="modal ? 'sign_up_active' : ''"
  >
    <div class="sign_up_in">
      <div class="close text-end" @click="$emit('close')">
        <img
          height="18"
          src="https://pixlok.com/wp-content/uploads/2021/07/Close-Free-Icon-9w8s.png"
          alt=""
        />
      </div>
      <div class="sign_up_in_wrapper">
        <div class="text">SIGN UP</div>
        <div class="title">No credit card or coding skills required.</div>
        <div
          class="google_login d-flex align-items-center justify-content-center"
          style="background: none rgb(240, 240, 240)"
        >
          <div class="google_img">
            <img height="18" src="/images/Google.svg" />
          </div>
          <div class="google_login_text">Log in with Google</div>
        </div>
        <form action="">
          <div class="form_control">
            <label for="email">Email</label>
            <input type="email" placeholder="example@gmail.com" value="" />
          </div>
          <div class="form_control">
            <label for="password">Password</label>
            <input type="password" placeholder="**********" value="" />
          </div>
          <div class="bubble_element">
            By signing up, you agree to our
            <font color="#0D1FA1"
              ><a href="https://bubble.io/terms" target="_blank">Terms</a></font
            >
            and
            <font color="#0D1FA1"
              ><a href="https://bubble.io/privacy" target="_blank"
                >Privacy Policy</a
              ></font
            >.
          </div>
          <div class="btn_wrapper">
            <button
              class="sign_up_btn"
              id="sign-up-email-btn"
              style="background-color: rgb(13, 31, 161)"
            >
              <div>Start building</div>
            </button>
            <button class="login_btn">Log in</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    modal: {
      type: Array,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
