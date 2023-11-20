<template>
  <div id="ratingAndReviews">
    <div class="rating_container">
      <div class="rating_wr">
        <h2 class="rating_title">Rating and reviews</h2>
        <select
          class="form-select form-select-lg"
          aria-label=".form-select-lg example"
          v-model="sortText"
        >
          <option disabled selected hidden>Most recent first</option>
          <option value="text1">Most recent first</option>
          <option value="text2">Best rated first</option>
          <option value="text3">Worst rated first</option>
        </select>
      </div>
      <div class="title_card">
        <h5>Average rating <span>(1)</span></h5>
        <ul class="star_wr">
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </div>

      <div id="cards_filter_wrapper">
        <div
          class="description_card_wr description_card_wr1"
          v-for="item in newArray"
          :key="item.id"
        >
          <div class="description_card">
            <ul class="star_wr">
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
            </ul>
            <div class="text_bottom_wr">
              <p class="text">
                {{ item.hello }}

                <span>{{ item.span2 }}</span>

                <span
                  >If you have any other questions related to our products,
                  please let us know by sending us an e-mail to:
                  support@zeroqode.com. Our Support Team is always ready to
                  help.</span
                >

                <span>Look forward to hearing from you!</span>
                <span>Thanks again</span>
                <span>Levon</span>
                <span
                  >February 14th, 2022
                  <router-link class="link_zero" to="/"
                    ><b>•</b> Zeroqode</router-link
                  ></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          category: "text1",
          hello: "Hello",
          span2:
            "Thank you for such feedback! We are glad that our template is the best match for your needs and you are happy with it.🙂",
          span3:
            "If you have any other questions related to our products, please let us know by sending us an e-mail to: support@zeroqode.com. Our Support Team is always ready to help.",
          span4: "Look forward to hearing from you!",
          span5: "Thanks again",
          span6: "Levon",
          span7: "February 14th, 2022",
        },
        {
          id: 2,
          category: "text2",
          hello: "Hello 2",
          span2:
            "Thank you for such feedback! We are glad that our template is the best match for your needs and you are happy with it.🙂",
          span3:
            "If you have any other questions related to our products, please let us know by sending us an e-mail to: support@zeroqode.com. Our Support Team is always ready to help.",
          span4: "Look forward to hearing from you!",
          span5: "Thanks again",
          span6: "Levon",
          span7: "February 14th, 2022",
        },
        {
          id: 3,
          category: "text3",
          hello: "Hello 3",
          span2:
            "Thank you for such feedback! We are glad that our template is the best match for your needs and you are happy with it.🙂",
          span3:
            "If you have any other questions related to our products, please let us know by sending us an e-mail to: support@zeroqode.com. Our Support Team is always ready to help.",
          span4: "Look forward to hearing from you!",
          span5: "Thanks again",
          span6: "Levon",
          span7: "February 14th, 2022",
        },
      ],
      newArray: [
        {
          id: 1,
          category: "text1",
          hello: "Hello",
          span2:
            "Thank you for such feedback! We are glad that our template is the best match for your needs and you are happy with it.🙂",
          span3:
            "If you have any other questions related to our products, please let us know by sending us an e-mail to: support@zeroqode.com. Our Support Team is always ready to help.",
          span4: "Look forward to hearing from you!",
          span5: "Thanks again",
          span6: "Levon",
          span7: "February 14th, 2022",
        },
      ],
      sortText: "Most recent first",
    };
  },
  watch: {
    sortText() {
      this.newArray = this.items.filter((a) => a.category === this.sortText);
    },
  },
};
</script>

<style lang="scss" scoped>
#ratingAndReviews {
  background-color: rgb(242, 245, 249);
  .rating_wr {
    display: flex;
    justify-content: space-between;
    .rating_title {
      font-family: "founders grotesk", medium, sans-serif;
      font-size: 28px;
      color: #00033d;
      line-height: 1.2;
    }
    select {
      max-width: 250px;
      box-shadow: none;
      align-self: center;
      display: flex;
      align-items: center;
      min-width: 250px;
      max-width: 250px;
      order: 1;
      min-height: 50px;
      width: 250px;
      flex-grow: 1;
      //   height: 50px;
      margin: 0px;
      z-index: 3;
      display: block;
      border: 3px solid rgb(228, 234, 241);
      background-color: rgb(255, 255, 255);
      color: rgb(26, 34, 41);
      font-family: "Founders Grotesk Regular";
      font-size: 16px;
      border-radius: 5px;
      letter-spacing: 0.5px;
      padding: 0px 5px 0px 5px;
      opacity: 1;
      transition: border-color 200ms ease 0s;
      //   background: #90dfff;
      option {
        &:optional {
          background: #90dfff;
        }
      }
    }
    &::selection {
      background: #90dfff;
    }
  }
  .title_card {
    padding: 25px;
    background: #fff;
    margin-top: 30px;
    .star_wr {
      position: relative;
      list-style-type: none;
      width: 100%;
      display: flex;
      gap: 5px;
      margin-top: 15px;
      li {
        width: 40px !important;
        height: 40px !important;
        line-height: 40px !important;
        font-size: 40px !important;
        display: flex;
        span {
          display: block;
          position: relative;
          &::before {
            position: absolute;
            content: "\2605";
            display: block;
            z-index: 1;
            left: -35px;
            color: rgba(245, 202, 0, 1);
          }
        }
        &:last-child {
          span {
            &::before {
              color: rgba(228, 234, 241, 1);
            }
          }
        }
        &:nth-child(4) {
          span {
            &::before {
              color: rgba(228, 234, 241, 1);
            }
          }
        }
      }
    }
  }
  .description_card {
    background: #fff;
    padding: 25px;
    margin-top: 30px;
    .star_wr {
      position: relative;
      list-style-type: none;
      width: 100%;
      display: flex;
      gap: 2px;
      li {
        width: 20px;
        height: 20px;
        line-height: 1px;
        font-size: 20px;
        display: flex;
        span {
          display: block;
          position: relative;
          &::before {
            position: absolute;
            content: "\2605";
            display: block;
            z-index: 1;
            left: -35px;
            color: rgba(245, 202, 0, 1);
          }
        }
        &:last-child {
          span {
            &::before {
              color: rgba(228, 234, 241, 1);
            }
          }
        }
        &:nth-child(4) {
          span {
            &::before {
              color: rgba(228, 234, 241, 1);
            }
          }
        }
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 3px;
      margin: 0;
      span {
        display: block;
        font-family: "founders grotesk regular", sans-serif;
        font-size: 14px;
        color: #1a2229;
        line-height: 1.4;
        &:last-child {
          margin-top: 10px;
          font-family: "founders grotesk regular";
          font-size: 14px;
          color: #6e7792;
          line-height: 1.4;
          .link_zero {
            margin-top: 10px;
            font-family: "founders grotesk regular";
            font-size: 14px;
            color: rgb(13, 31, 161);
            cursor: pointer;
            line-height: 1.4;
            text-decoration: none;
            b {
              margin: 0 3px;
              display: inline-block;
            }
          }
        }
        &:nth-child(1) {
          margin-top: 10px;
        }
        &:nth-child(2) {
          margin-top: 10px;
        }
        &:nth-child(3) {
          margin-top: 10px;
        }
      }
    }
  }
  .rating_container {
    max-width: 1130px;
    margin: 0 auto;
    padding: 50px 0 65px 0;
  }
}
</style>
