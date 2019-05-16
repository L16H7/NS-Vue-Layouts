<template>
  <Page>
    <TabView
      :selectedIndex="selectedIndex"
      @selectedIndexChange="indexChange"
      androidTabsPosition="bottom"
    >
      <TabViewItem title="Flex">
        <FlexLayouts />
      </TabViewItem>
      <TabViewItem title="Layout">
        <Layouts />
      </TabViewItem>
      <TabViewItem title="Loop">
        <LoopContentLayout />
      </TabViewItem>
      <TabViewItem title="Helpers">
        <Helpers />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script >
import Layouts from '@/components/Layouts';
import LoopContentLayout from '@/components/LoopContentLayout';
import FlexLayouts from '@/components/FlexLayouts';
import Helpers from '@/components/Helpers';

export default {
  components: {
    Layouts,
    LoopContentLayout,
    FlexLayouts,
    Helpers,
  },
  methods: {
    indexChange: function(args) {
        let newIndex = args.value
        console.log('Current tab index: ' + newIndex)
    },
  },
}
</script>

<style>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.title {
    text-align: left;
    padding-left: 16;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}

.drawer-header {
    padding: 50 16 16 16;
    margin-bottom: 16;
    background-color: #53ba82;
    color: #ffffff;
    font-size: 24;
}

.drawer-item {
    padding: 8 16;
    color: #333333;
    font-size: 16;
}
.border {
  border-width: 1;
  border-color: black;
  margin: 4;
}
</style>
