<template>
  <div id="details">
    <div class="details_container">
      <div class="details_left">
        <div
          class="details_left_text"
          :class="button ? 'details_left_text_active' : ''"
        >
          <h4 class="title_d">Template details</h4>
          <p class="text_des">
            DalyFood is a template that is great for those who want to open
            their own marketplace for food sales and delivery. In this case, we
            got a universal template with which you can start your own business.
            <br />
            This is a #nocode template that allows the administrator to publish
            food categories and positions, and the user can choose the food that
            she\he likes the most, add it to the cart and arrange food delivery.
          </p>
          <p class="text_des">
            DalyFood template features the following: <br />
            ✅ Responsive design <br />
            ✅ Admin dashboard <br />
            ✅ Create and edit products from admin panel <br />
            ✅ Possibility to add extra options to available products <br />
            ✅ Quick and flexible product search <br />
            ✅ Search across all product categories <br />
            ✅ Sort and filter using multiple criteria <br />
            ✅ The function of viewing order history in admin dashboard
          </p>
          <p class="text_des">
            Main user flow: <br />
            -> Product search; <br />
            -> View product description; <br />
            -> Choice of additional options; <br />
            -> Add product to cart; <br />
            -> Editing a shopping cart; <br />
            -> Order delivery; <br />
          </p>
          <p class="text_des">
            Template features several simple free plugins: <br /><br />

            Multiselect dropdown - let user pick multiple items in the dropdown
            menu <br />
            Rich text editor - enable user to write rich, formatted text in an
            input <br />
            <br />

            Important notes: <br />
            This template is sold "as is" but if there are any critical bugs,
            feel free to reach out. Our team will try to fix them ASAP.
            <br /><br />

            We tried to keep all the workflows and design architecture simple
            for beginner-intermediate users to use and adjust. However, we
            recommend having at least moderate experience with Bubble to be able
            to fully use and edit the app’s backend. <br /><br />

            If you need any assistance to customize this template for your
            personal or business project, feel free to reach out to our team via
            dev@appassion.io. We are always there to help build new products and
            mobile/web applications. <br /><br />

            We hope this template would become a great starting point for your
            project.
          </p>
          <h3>
            *Removing the banner <br />
            1. Open the app in Bubble editor <br />
            2. Go to settings -> SEO/Metatags <br />
            3. Remove the content of "Script in the body"
          </h3>
        </div>
        <button @click="textHide" class="button_hide_wr">
          <span v-if="button" class="hide_button">Hide</span>
          <span v-else class="Read_more_button">Read more</span>
        </button>
      </div>
      <div class="details_right">
        <h4 class="title_d">Resources</h4>
        <router-link class="support_link" to="/">Support contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      button: false,
    };
  },
  methods: {
    textHide() {
      this.button = !this.button;
      let button_hide_wr = document.querySelector(".button_hide_wr");
      button_hide_wr.classList.toggle("button_hide_wr_active");
    },
  },
};
</script>

<style lang="scss" scoped>
#details {
  .details_container {
    .details_right {
      width: 300px;
      position: sticky !important;
      top: 50px;
      .title_d {
        white-space: pre-wrap;
        font-family: "founders", "grotesk", medium;
        font-size: 28px;
        color: #00033d;
        line-height: 1.2;
        padding-bottom: 15px;
        border-bottom: 1px solid rgb(222, 222, 222);
        width: 100%;
      }
      .support_link {
        margin-top: 15px;
        cursor: pointer;
        pointer-events: auto;
        font-family: "Lato", sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #4083a9;
        line-height: 1;
        text-decoration: none;
      }
    }
  }
}
</style>
