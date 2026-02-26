<script setup lang="ts">
defineProps<{
     name: string;
     email: string;
     imagem: string;
     street: string;
     country: string;
     state: string;
     gender: string;
     phone: string;
     username: string;
     password: string;
}>();
</script>

<template>
     <div class="containerUserDetail">
          <div class="profile">
               <img :src="imagem" alt="" class="profileImage" />

               <div class="profileInfo">
                    <h1>{{ name }}</h1>
                    <p>{{ email }}</p>
               </div>
          </div>

          <ul class="userDetails">
               <li>
                    <span class="label">Street:</span>
                    <span class="value">{{ street }}</span>
               </li>

               <li>
                    <span class="label">country:</span>
                    <span class="value">{{ country }}</span>
               </li>

               <li>
                    <span class="label">State:</span>
                    <span class="value">{{ state }}</span>
               </li>

               <li>
                    <span class="label">Gender:</span>
                    <span class="value">{{ gender }}</span>
               </li>

               <li>
                    <span class="label">Phone:</span>
                    <span class="value">{{ phone }}</span>
               </li>

               <li>
                    <span class="label">Username:</span>
                    <span class="value">{{ username }}</span>
               </li>

               <li>
                    <span class="label">Password:</span>
                    <span class="value">{{ password }}</span>
               </li>
          </ul>
     </div>
</template>

<style scoped>
.containerUserDetail {
     background-color: #fff;
     border: 1px solid var(--color-quinary);
     border-radius: 2px;
     width: 100%;
     max-width: 720px;
     margin: 10px 0;
}

.profile {
     display: flex;
     align-items: center;
     padding: 16px;
     gap: 10px;
}

.profileImage {
     width: 70px;
     height: 70px;
     border-radius: 50%;
     margin-right: 16px;
}

.profileInfo {
     display: flex;
     flex-direction: column;
}

.profileInfo h1 {
     color: var(--color-secondary);
     font-size: 26px;
     word-break: break-word;
}

.profileInfo p {
     color: var(--color-quaternary);
     font-size: 16px;
     word-break: break-word;
}

.userDetails {
     list-style: none;
     padding: 16px;
}

.userDetails li {
     display: flex;
     flex-wrap: wrap;
     gap: 8px;
     padding: 10px;
     border-top: 1px solid var(--color-quinary);
}

.label {
     font-weight: bold;
     color: var(--color-secondary);
}

.value {
     color: var(--color-quaternary);
     font-weight: 400;
     word-break: break-word;
}

@media (max-width: 480px) {
     .profile {
          padding: 12px;
          align-items: flex-start;
     }

     .profileImage {
          width: 56px;
          height: 56px;
          margin-right: 10px;
     }

     .profileInfo h1 {
          font-size: 20px;
     }

     .profileInfo p {
          font-size: 14px;
     }

     .userDetails {
          padding: 12px;
     }
}
</style>
