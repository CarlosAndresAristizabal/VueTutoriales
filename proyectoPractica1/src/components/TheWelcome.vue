<script lang = "ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import CardIcon from './icons/IconCard.vue'
import CardPostIcon from './icons/IconPostCard.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name      : 'TheWelcome',
  components: {
    WelcomeItem,
    DocumentationIcon,
    ToolingIcon,
    EcosystemIcon,
    CommunityIcon,
    SupportIcon,
    CardIcon,
    CardPostIcon,
  },
})
</script>

<template>
  <div class = "welcome">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Counter Compositions</template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Counter Option</template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Post Card</template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Users API´S</template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>List Teachers</template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <CardIcon />
      </template>
      <template #heading>Post Container</template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <CardPostIcon />
      </template>
      <template #heading>Post Card</template>
    </WelcomeItem>
  </div>
</template>

<style scoped>
.welcome {
  position  : relative;
  margin    : 0 auto;
  gap       : 1rem;
  padding   : 1rem;
  background: var(--color-bg);
}
</style>
