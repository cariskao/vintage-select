<template>
  <Button
    :class="btnClass"
  >
    <v-icon class="loading" v-if="isLoading" name="spinner" pulse/>
    <!-- vue awesome的插槽 -->
    <span :class="showLoading">
      <slot/> {{btnLabel}}
    </span>
  </Button>
</template>

<script>
export default {
  props: {
    colorStyle: {
      type: String
    },
    btnLabel: {
      type: String
    },
    isLoading: {
      type: Boolean
    }
  },
  computed: {
    btnClass(){
      return {
        btn: true,
        [`btn-${this.colorStyle}`]: !this.isLoading,
        'btn-secondary': this.isLoading,
        disabled: this.isLoading
      }
    },
    showLoading(){
      return {
        transparent: this.isLoading
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.transparent {
  opacity: 0;
}
.loading {
  position: absolute;
  top: auto;
  left: auto;
}
</style>
