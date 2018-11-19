<template>
  <div class="message-alert">
    <transition-group name="alert-fade">
      <div class="alert border-0 text-center"
        :class="`alert-${item.status}`"
        v-for="(item, index) in messages"
        :key="index"
      >{{ item.message }}</div>
    </transition-group>
    <!-- <div class="alert border-0"
      :class="`alert-${item.status}`"
      v-for="(item, index) in messages" :key="index"
    >{{ item.message }}</div> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('alert', ['messages'])
  },
  methods: {
    ...mapMutations('alert', ['removeMessage'])
  }
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 66px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
}
.alert {
  opacity: 0.8;
  font-size: 1.1rem;
}

.alert-fade-enter-active, .alert-fade-leave-active {
  transition: all .5s;
}
.alert-fade-enter-to, .alert-fade-leave {
  transform: translateY(0)
}
.alert-fade-enter, .alert-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%)
}

</style>