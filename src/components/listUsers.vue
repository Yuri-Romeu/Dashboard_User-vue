<script setup lang="ts"></script>

<template>
     <div class="containerListUsers">
          <ul class="listUsers">
               <li class="Users">
                    <div class="infoUser">
                         <img
                              src="https://randomuser.me/api/portraits/women/27.jpg"
                              class="imageUser"
                         />
                         <div>
                              <h1 class="nameUser">John Doe</h1>
                              <p class="emailUser">jdoe@me.com</p>
                         </div>
                    </div>

                    <button class="button">View Details</button>
               </li>
          </ul>
     </div>
</template>

<style scoped>
.containerListUsers {
     margin-top: 10px;
}

.listUsers {
     list-style: none;
}

.Users {
     margin: 14px 0;
     width: 40%;
     padding: 10px 12px;
     border-radius: 2px;
     border: 1px solid var(--color-quinary);
     display: flex;
     align-items: center;
     justify-content: space-between;
}

.imageUser {
     width: 40px;
     height: 40px;
     border-radius: 50%;
     object-fit: cover;
     border: 1px solid var(--color-quinary);
}

.infoUser {
     display: flex;
     gap: 30px;
}

.nameUser {
     font-size: 16px;
     font-weight: bold;
     color: var(--color-secondary);
}

.emailUser {
     font-size: 14px;
     font-weight: 500;
     color: var(--color-secondary);
}

.button {
     padding: 12px 16px;
     background-color: var(--color-tertiary);
     color: var(--color-primary);
     font-family: var(--font-primary);
     font-size: 12px;
     border-radius: 4px;
     border: none;
     font-weight: 600;
     cursor: pointer;
}
</style>
