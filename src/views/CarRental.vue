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
          title: "Rently - Car Rental",
          left: {
            smollText: "Rently is a no-code template for car rental. It gives users a completely hassle-free car hire facility.",
              buttonGroup: [
                {main: true, name: "INTERMEDIATE"},
                {main: false, name: "RESPONSIVE"},
                {main: false, name: "PROFESSIONAL SERVICES"}
              ],
              dateInfo: ["Published July 2019", "Updated this month"],
              images: [
                {type: 'img', url: 'car_rental_slide_1.jpg'},
                {type: 'mp4', url: 'car_rental_2.mp4'}
              ]
          },
          right: {
            head: {
              title: "$99",
              for: "Standard license",
              forIcon: true,
              license: "$198 Developer license",
            },
            typePopular: {
              start: "5.0",
              install: "64"
            },
            typeDetail: {
              img: "box_3.png",
              title: "Zeroqode",
              date: "Joined 2016",
              template: "166 Templates"
            }
          }
        },
        similar: {
          title: "Similar Professional Services templates",
          cards: [
          {
            title: "Estimation Forms Builder",
            by: "Zeroqode",
            buttons: [
              "PROFESSIONAL SERVICES",
              "RESPONSIVE"
            ],
            price: "$149",
            img: "car_rental_similar_card_1.jpg"
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
          {
            title: "Al Paraphraser like Quillbot",
            by: "Chakor",
            buttons: [
              "PROFESSIONAL SERVICES",
              "RESPONSIVE"
            ],
            price: "FREE",
            img: "car_rental_similar_card_3.jpg"
          },
              
          ]
        }
      }
    }
  };
  </script>
  