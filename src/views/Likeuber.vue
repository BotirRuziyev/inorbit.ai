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
          title: "Taxi/Ridesharing likeUber Lite",
          left: {
            smollText: "Ridely Lite is a no-code on-demand taxi template similar to Uber. It can be used as a ride-sharing app for any taxi company or can bring several into one app.",
              buttonGroup: [
                {main: true, name: "INTERMEDIATE"},
                {main: false, name: "RESPONSIVE"},
                {main: false, name: "ON-DEMAND SERVICES"}
              ],
              dateInfo: ["Published June 2022", "Updated today", "Last installed today"],
              images: [
                {type: "img", url: 'likeuber_slide_1.jpeg'},
                {type: "mp4", url: 'likeuber_slide_2.mp4'}
              ]
          },
          right: {
            head: {
              title: "Free",
              for: "For everyone",
            },
            typePopular: {
              start: "3.8",
              install: "1.1K"
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
          title: "Similar On-demand Services templates",
          cards: [
          {
            title: "PetSitter Marketlace",
            by: "Boston85719",
            buttons: [
              "ON-DEMAND SERVICES",
              "RESPONSIVE"
            ],
            price: "$349",
            img: "likeuber_similar_card_1.png"
          },
          {
            title: "Truck Driver Marketplace",
            by: "Boston85719",
            buttons: [
              "ON-DEMAND SERVICES",
              "RESPONSIVE"
            ],
            price: "$349",
            img: "likeuber_similar_card_2.png"
          },
          {
            title: "Top Shelf Calendar",
            by: "Top Shelf Templates",
            buttons: [
              "ON-DEMAND SERVICES",
            ],
            price: "$299",
            img: "likeuber_similar_card_3.png"
          },
              
          ]
        }
      }
    }
  };
  </script>
  