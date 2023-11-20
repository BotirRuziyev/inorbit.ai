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
          title: "Delyfood - Marketplace",
          left: {
              buttonGroup: [
                {main: false, name: "RESPONSIVE"},
                {main: false, name: "MARKETPLACE"}
              ],
              dateInfo: ["Published August 2022", "Updated April 2023"],
              images: [
                {type: 'img', url: 'marketplace_slide_1.png'}
              ]
          },
          right: {
            head: {
              title: "$25",
              for: "Standard license",
              forIcon: true,
              license: "$50 Developer license",
              licenseIcon: true,
            },
            typePopular: {
              start: "3.0",
              install: "6"
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
          title: "Similar Marketplace templates",
          cards: [
          {
            title: "Bidster - Auctions Like Flippa",
            by: "Zeroqode",
            buttons: [
              "MARKETPLACE",
              "RESPONSIVE"
            ],
            price: "$249",
            img: "marketplace_similar_card_1.png"
          },
          {
            title: "Restaurant Food Delivery",
            by: "Rapid Dev",
            buttons: [
              "MARKETPLACE",
              "RESPONSIVE"
            ],
            price: "$69",
            img: "marketplace_similar_card_2.png"
          },
          {
            title: "Marketplace Canvas Kit Stripe",
            by: "No-Code Venture",
            buttons: [
              "MARKETPLACE",
              "RERPOSIVE"
            ],
            price: "$59",
            img: "marketplace_similar_card_3.png"
          },
              
          ]
        }
      }
    }
  };
  </script>
  