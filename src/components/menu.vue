<script setup lang="ts"></script>

<template>
     <div class="containerMenu">
          <h1 class="titleMenu">User Dashboard</h1>

          <ul class="menu">
               <li class="itemMenu">
                    <RouterLink to="/" style="all: unset">Home</RouterLink>
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
     gap: 12px;
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

@media (max-width: 768px) {
     .containerMenu {
          padding: 12px 14px;
     }

     .titleMenu {
          font-size: 20px;
     }

     .itemMenu {
          margin: 0;
     }
}

@media (max-width: 480px) {
     .containerMenu {
          flex-direction: column;
          align-items: flex-start;
     }

     .titleMenu {
          font-size: 18px;
     }
}
</style>
