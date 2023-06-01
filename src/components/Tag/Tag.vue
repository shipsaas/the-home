<template>
  <span class="inline-flex items-center rounded-full" :class="computedClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type BadgeType = 'default' | 'success' | 'warning' | 'error' | 'primary';

type TagProps = {
  type: BadgeType;
};

const props = withDefaults(defineProps<TagProps>(), {
  type: 'default',
});

const computedClasses = computed(() => {
  switch (props.type) {
    case 'default':
      return 'bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10';
    case 'error':
      return 'bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10';
    case 'success':
      return 'bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20';
    case 'warning':
      return 'bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20';
    case 'primary':
      return 'bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10';
    default:
      return '';
  }
});
</script>
