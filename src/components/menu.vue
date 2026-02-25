<script setup lang="ts">
import { Router } from 'lucide-vue-next';
</script>

<template>
     <div class="containerMenu">
          <h1 class="titleMenu">User Dashboard</h1>

          <ul class="menu">
               <li class="itemMenu">
                    <RouterLink to="/">Home</RouterLink>
               </li>
          </ul>
     </div>
</template>

<style scoped>
.containerMenu {
     width: 100%;
     padding: 14px 16px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: var(--color-secondary);
}

.titleMenu {
     color: var(--color-primary);
     font-size: 22px;
     font-weight: bold;
}

.menu {
     display: flex;
     align-items: center;
     justify-content: space-between;
     list-style: none;
}

.itemMenu {
     margin: 0 16px;
     color: var(--color-primary);
     cursor: pointer;

     &:hover {
          text-decoration: underline;
     }
}
</style>
