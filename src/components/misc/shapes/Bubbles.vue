<script setup lang="ts"></script>

<template>
  <div class="bubbles">
    <div class="bubble bubble-sm" />
    <div class="bubble bubble-sm1" />
    <div class="bubble bubble-sm2" />
    <div class="bubble bubble-sm3" />
    <div class="bubble bubble-sm4" />
    <div class="bubble bubble-sm5" />
    <div class="bubble bubble-sm6" />
    <div class="bubble bubble-md" />
    <div class="bubble bubble-md1" />
  </div>
</template>

<style scoped lang="scss">
.bubble {
  background: var(--primary);
  border-radius: 50%;
  position: absolute;
  top: 0;
}

.bubble-sm {
  height: 3%;
  width: 3.5%;
  inset-inline-start: 25%;
  animation: bubbles-rise 3s infinite;
}

.bubble-sm1 {
  height: 3.5%;
  width: 4%;
  inset-inline-start: 35%;
  animation: bubbles-rise 2.2s infinite;
  animation-delay: 0.25s;
}

.bubble-sm2 {
  height: 5%;
  width: 5.5%;
  inset-inline-start: 55%;
  animation: bubbles-rise 2.5s infinite;
  animation-delay: 0.15s;
}

.bubble-sm3 {
  height: 4%;
  width: 4.5%;
  inset-inline-start: 50%;
  animation: bubbles-rise 1.75s infinite;
}

.bubble-sm4 {
  height: 3%;
  width: 3.5%;
  inset-inline-start: 65%;
  animation: bubbles-rise 2.5s infinite;
  animation-delay: 0.1s;
}

.bubble-sm5 {
  height: 5.5%;
  width: 6%;
  inset-inline-start: 45%;
  animation: bubbles-rise 2s infinite;
  animation-delay: 0.1s;
}

.bubble-sm6 {
  height: 3%;
  width: 3.5%;
  inset-inline-start: 40%;
  animation: bubbles-rise 3s infinite;
  animation-delay: 0.2s;
}

.bubble-md {
  height: 7%;
  width: 8%;
  inset-inline-start: 15%;
  animation: bubbles-rise 3.5s infinite;
  animation-delay: 0.2s;
}

.bubble-md1 {
  height: 7%;
  width: 8%;
  inset-inline-start: 60%;
  animation: bubbles-rise 2s infinite;
  animation-delay: 0.25s;
}

@keyframes bubbles-rise {
  100% {
    transform: translateY(-75px) scale(0.5);
    opacity: 0;
    animation-timing-function: ease-in;
  }
}
</style>
