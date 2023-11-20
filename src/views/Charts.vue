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
        title: "Analytics Dashboard - Flexbox",
        left: {
          smollText: "A beautiful one-page Analytics Dashboards Template build using the new flexbox responsive engine.",
            buttonGroup: [
              {main: true, name: "INTERMEDIATE"},
              {main: false, name: "RESPONSIVE"},
              {main: false, name: "DASHBOARD"}
            ],
            dateInfo: ["Published May 2021", "Updated this week", "Last installed this week"],
            images: [
              {type: 'img', url: 'analytic_1.jpg'}
            ]
        },
        right: {
          head: {
            title: "Free",
            for: "For everyone"
          },
          typePopular: {
            start: "3.7",
            install: "3.8K"
          },
          typeDetail: {
            img: "box_1.png",
            title: "TeachBlocks",
            date: "Joined 2017",
            template: "6 Templates"
          }
        }
      },
      similar: {
        title: "Similar Dashboard templates",
        cards: [
        {
          title: "Money Manager",
          by: "Dot Studios",
          buttons: [
            "DASHBOARD"
          ],
          price: "$35",
          img: "flexbox_similar_card_1.jpg"
        },
        {
          title: "Professional Dashboard",
          by: "Dot Studios",
          buttons: [
            "DASHBOARD"
          ],
          price: "$59",
          img: "flexbox_similar_card_2.jpg"
        },
        {
          title: "Startup Dashboard",
          by: "Zeroqode",
          buttons: [
            "DASHBOARD",
            "RERPOSIVE"
          ],
          price: "$39",
          img: "flexbox_similar_card_3.jpg"
        },
            
        ]
      }
    }
  }
};
</script>
