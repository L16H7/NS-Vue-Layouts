<template>
  <Page>
    <TabView
      :selectedIndex="selectedIndex"
      @selectedIndexChange="indexChange"
      androidTabsPosition="bottom"
    >
      <TabViewItem title="Tab 1">
        <Layouts />
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <Label text="Content for Tab 2" />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script >
import Layouts from '@/components/Layouts';

export default {
  components: {
    Layouts,
  },
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    indexChange: function(args) {
        let newIndex = args.value
        console.log('Current tab index: ' + newIndex)
    },
  },
}
</script>

<style scoped>
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
</style>
