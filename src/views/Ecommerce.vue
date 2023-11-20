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
          title: "Ez Ecommerce CRM",
          left: {
            smollText: "Meet Ez Ecommerce CRM - free CRM template by EazyCode build on bubble io.",
              buttonGroup: [
                {main: true, name: "BEGINNER"},
                {main: false, name: "RESPONSIVE"},
                {main: false, name: "PROFESSIONAL SERVICES"}
              ],
              dateInfo: ["Published January 2020", "Updated today", "Last installed today"],
              images: [
                {type: 'img', url: 'ecommerce_slide_1.png'}, 
                {type: 'img', url: "ecommerce_slide_2.png"}, 
                {type: 'img', url: "ecommerce_slide_3.png"}, 
                {type: 'img', url: "ecommerce_slide_4.png"}, 
                {type: 'img', url: "ecommerce_slide_5.png"}, 
                {type: 'img', url: "ecommerce_slide_6.png"}, 
                {type: 'img', url: "ecommerce_slide_7.png"}, 
                {type: 'img', url: "ecommerce_slide_8.png"}
              ]
          },
          right: {
            head: {
              title: "Free",
              for: "For everyone",
            },
            typePopular: {
              start: "5.0",
              install: "3.3K"
            },
            typeDetail: {
              img: "box_4.png",
              title: "EazyCode",
              date: "Joined 2018",
              template: "68 Templates"
            }
          }
        },
        similar: {
          title: "Similar CRM templates",
          cards: [
          {
            title: "CRM & Sales Pipeline/Funnel",
            by: "Zeroqode",
            buttons: [
              "CRM",
              "RESPONSIVE"
            ],
            price: "$149",
            img: "ecommerce_similar_card_1.jpg"
          },
          {
            title: "RepairCRM Ticket Tracking...",
            by: "No-Code Venture",
            buttons: [
              "CRM",
            ],
            price: "$99",
            img: "ecommerce_similar_card_2.png"
          },
          {
            title: "Crm & Sales Pipeline Lite",
            by: "Zeroqode",
            buttons: [
              "CRM",
              "RESPONSIVE"
            ],
            price: "FREE",
            img: "ecommerce_similar_card_1.jpg"
          },
              
          ]
        }
      }
    }
  };
  </script>
  