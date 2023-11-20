<template>
    <div class="charts">
      <analytic-dashboard :analytic="analytic" />
      <TemplateDetails />
      <RatingAndReviews />
      <Similar :similar="similar" />
    </div>
  </template>
  
  <script>
  import AnalyticDashboard from "@/components/AnalyticDashboard.vue";
  import Similar from "@/components/Similar.vue";
  import TemplateDetails from "@/components/TemplateDetails";
  import RatingAndReviews from "@/components/RatingAndReviews";
  
  export default {
    components: {
      AnalyticDashboard,
      Similar,
      TemplateDetails,
      RatingAndReviews,
    },
    data() {
      return {
        analytic: {
          title: "Carrycar - Rental Service",
          left: {
            smollText: "Carry Car - this is a great template for those who want to open their startup related to carsharing business. Using the admin dashboard, you can easily complete all the basic setti",
              buttonGroup: [
                {main: true, name: "INTERMEDIATE"},
                {main: false, name: "RESPONSIVE"},
                {main: false, name: "PROFESSIONAL SERVICES"}
              ],
              dateInfo: ["Published January 2023", "Updated April 2023"],
              images: [
                {type: 'img', url: 'rental_slide_1.png'}
              ]
          },
          right: {
            head: {
              title: "$59",
              for: "Standard license",
              forIcon: true,
              license: "$139 Developer license",
            },
            typePopular: {
              start: "-",
              install: "2"
            },
            typeDetail: {
              img: "box_2.png",
              title: "Appassion",
              date: "Joined 2018",
              template: "18 Templates"
            }
          }
        },
        similar: {
          title: "Similar Professional Services templates",
          cards: [
          {
            title: "Rently - Car Rental",
            by: "Zeroqode",
            buttons: [
              "PROFESSIONAL SERVICES",
              "RESPONSIVE"
            ],
            price: "$99",
            img: "rental_similar_card_1.jpg"
          },
          {
            title: "Estimation Forms Builder",
            by: "Zeroqode",
            buttons: [
              "PROFESSIONAL SERVICES",
              "RESPONSIVE"
            ],
            price: "$149",
            img: "rental_similar_card_2.jpg"
          },
          {
            title: "NovaSwap - Crypto Trading",
            by: "NovaBloq",
            buttons: [
              "PROFESSIONAL SERVICES",
            ],
            price: "FREE",
            img: "rental_similar_card_3.jpeg"
          },
              
          ]
        }
      }
    }
  };
  </script>
  