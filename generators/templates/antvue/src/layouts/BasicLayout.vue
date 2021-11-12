<template>
  <pro-layout
    :menus="menus"
    :collapsed="collapsed"
    :layout="layout"
    :theme="theme"
    :contentWidth="contentWidth"
    :auto-hide-header="autoHideHeader"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img src="../assets/logo.svg" />
        <h1>{{ currentTitle }}</h1>
      </div>
    </template>
    <template v-slot:rightContentRender>
      <div
        :class="[
          'ant-pro-global-header-index-right',
          layout === 'topmenu' && `ant-pro-global-header-index-${theme}`
        ]"
      >
        用户信息
      </div>
    </template>
    <template v-slot:footerRender>
      <div>footerRender</div>
    </template>
    <page-header-wrapper>
      <router-view />
    </page-header-wrapper>
  </pro-layout>
</template>

<script>
import ProLayout, { PageHeaderWrapper } from "@ant-design-vue/pro-layout";

export default {
  name: "BasicLayout",
  components: {
    PageHeaderWrapper,
    ProLayout
  },
  data() {
    return {
      menus: [],
      collapsed: false,
      autoHideHeader: false,
      query: {},
      layout: "sidemenu",
      contentWidth: "Fluid",
      theme: "dark",
      isMobile: false
    };
  },
  computed: {
    currentTitle() {
      return document.title;
    }
  },
  created() {
    this.menus = this.$router.options.routes.find(item => item.path === "/").children;
  },
  methods: {
    handleMediaQuery(query) {
      this.query = query;
      if (this.isMobile && !query["screen-xs"]) {
        this.isMobile = false;
        return;
      }
      if (!this.isMobile && query["screen-xs"]) {
        this.isMobile = true;
        this.collapsed = false;
      }
    },
    handleCollapse(collapsed) {
      this.collapsed = collapsed;
    }
  }
};
</script>
