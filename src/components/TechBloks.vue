<template>
  <section class="tech_bloks_container">
    <div class="tech_bloks" :class="visible ? 'tech_bloks_active' : ''">
      <div
        class="tech_bloks_in d-flex align-items-center justify-content-between"
      >
        <div class="tech_bloks_left">
          <div class="tech_bloks_text d-flex align-items-center">
            <div class="left_title">Analytics Dashboard - Flexbox</div>
            <div class="text">by TechBlocks</div>
          </div>
          <div class="d-flex align-items-center">
            <button
              @click="modal = true"
              class="click_element"
              style="background: none rgb(13, 31, 161)"
            >
              <div>Get template</div>
            </button>
            <button class="preview" style="">
              <div class="d-flex align-items-center justify-content-center">
                Preview <img width="22" src="/images/open_new.png" alt="" />
              </div>
            </button>
          </div>
        </div>
        <div
          class="tech_bloks_right"
          style="background-color: rgb(242, 245, 249)"
        >
          <div class="right_title">Free</div>
          <div class="text">For everyone</div>
        </div>
      </div>
    </div>
    <a href="#" class="build">
      <div>
        <img
          alt="Bubble"
          src="https://meta.cdn.bubble.io/f1585607370503x914556455591480200/banner-icon.svg"
          style="
            width: 15px !important;
            margin-top: 7px !important;
            margin-left: 6px !important;
            float: left;
          "
        />
      </div>
      <div
        style="
          color: white;
          font-size: 12px;
          font-family: Arial, sans-serif;
          margin-top: 9px;
          float: left;
          margin-left: 8px;
          width: 95px;
          font-weight: bold;
        "
      >
        Built on Bubble
      </div>
    </a>
    <SignUp @close="modalExit" :modal="modal" />
  </section>
</template>

<script>
import SignUp from "@/components/SignUp";
export default {
  data() {
    return {
      visible: false,
      modal: false,
    };
  },
  components: {
    SignUp,
  },
  methods: {
    modalExit() {
      this.modal = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    });
  },
};
</script>
