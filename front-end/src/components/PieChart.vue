<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";
import { useUserStore } from "../stores/users";
const store = useUserStore();

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  
  components: {
    VChart
  },
  
  setup() {
    const option = ref({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: store.getStats,
          // data: [
          //   { value: 335, name: "Direct" },
          //   { value: 310, name: "Email" },
          //   { value: 234, name: "Ad Networks" },
          //   { value: 135, name: "Video Ads" },
          //   { value: 1548, name: "Search Engines" }
          // ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
    return { option };
  }
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>

<style>
body {
  margin: 0;
}
</style>