<template>
  <select
    class="language-switcher"
    :value="i18nState.locale"
    aria-label="Language"
    @change="changeLocale"
  >
    <option v-for="option in locales" :key="option" :value="option">
      {{ getLocaleLabel(option) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { i18nState, setLocale, getLocaleLabel, type Locale } from "@/i18n";

const locales: Locale[] = ["zh-CN", "en"];

function changeLocale(event: Event) {
  setLocale((event.target as HTMLSelectElement).value as Locale);
}
</script>

<style scoped>
.language-switcher {
  margin-left: 1em;
  padding: 0.35em 0.55em;
  border: 1px solid #d9e2f2;
  border-radius: 0.35em;
  color: var(--nav-default-color);
  background: #fff;
  cursor: pointer;
}
</style>
