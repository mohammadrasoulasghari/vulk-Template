<script setup lang="ts">
export interface CountdownProps {
  date: string
  inverted?: boolean
  bold?: boolean
  thin?: boolean
}

const props = withDefaults(defineProps<CountdownProps>(), {
  inverted: false,
  bold: false,
  thin: false,
})

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const currentSeconds = ref(0)
const currentMinutes = ref(0)
const currentHours = ref(0)
const currentDays = ref(0)

const event = `${props.date} 00:00:00`
const countDown = new Date(event).getTime()

const x = setInterval(() => {
  const now = new Date().getTime()
  const distance = countDown - now

  currentDays.value = Math.floor(distance / day)
  currentHours.value = Math.floor((distance % day) / hour)
  currentMinutes.value = Math.floor((distance % hour) / minute)
  currentSeconds.value = Math.floor((distance % minute) / second)

  //do something later when date is reached
  if (distance < 0) {
    //do something later when date is reached

    clearInterval(x)
  }
  //seconds
}, 0)

const countdownClasses = computed(() => [
  props.inverted && 'is-inverted',
  props.bold && !props.thin && 'is-bold',
  props.thin && !props.bold && 'is-thin',
])
</script>

<template>
  <div
    :id="`countdown-${countDown}`"
    class="countdown"
    :class="countdownClasses"
  >
    <ul>
      <li>
        <span :id="`days-${countDown}`">{{ currentDays }}</span>
        روز
      </li>
      <li>
        <span :id="`hours-${countDown}`">{{ currentHours }}</span>
        ساعت
      </li>
      <li>
        <span :id="`minutes-${countDown}`">{{ currentMinutes }}</span>
        دقیقه
      </li>
      <li>
        <span :id="`seconds-${countDown}`">{{ currentSeconds }}</span>
        ثانیه
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.countdown {
  &.is-inverted {
    li {
      color: var(--white-smoke);
    }
  }

  &.is-bold {
    li {
      span {
        font-weight: 800;
      }
    }
  }

  &.is-thin {
    li {
      span {
        font-weight: 100;
      }
    }
  }

  li {
    display: inline-block;
    font-family: var(--font);
    font-weight: 300;
    font-size: 1.25rem;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
    color: var(--title-color);
  }

  li span {
    display: block;
    font-size: 4.5rem;
  }
}

@media only screen and (width <= 767px) {
  .countdown {
    li span {
      font-size: 2.5rem;
    }
  }
}
</style>
