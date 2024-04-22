<template>
  <div id="lines-background" class="full">
    <v-timeline class="timeline" align="start">
      <!-- <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
        class="timelineItem"
      > -->
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :icon="item.icon"
        fill-dot
        class="timelineItem"
      >
        <v-card class="Cardbackground">
          <!-- <v-card-title :class="['text-h6', 'textColor', `bg-${item.color}`]"> -->
          <v-card-title :class="['text-h6', 'textColor']">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="bg-white text--primary">
            <p>
              {{ item.desc }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Rhode Island Hosptial',
        desc: 'Machin Learning Engineer',
        color: '',
        icon: 'fa-solid fa-user-tie',
        bg: 'red',
      },
      {
        title: 'Brown University - Asaad Lab',
        desc: 'Researcher at Asaad Lab on Machine Learning',
        color: '',
        icon: 'fa-solid fa-pen-to-square',
        bg: '',
      },
      {
        title: 'Brown University - Data 1030',
        desc: 'Head Teaching Assistant for Hands on Data Science',
        color: '',
        icon: 'fa-solid fa-book-open',
        bg: '',
      },
      {
        title: 'Brown University',
        desc: 'Masters in Data Science',
        color: '',
        icon: 'fa-solid fa-school',
        bg: '',
      },
      {
        title: 'Walt Disney',
        desc: 'Data Engineer Intern',
        color: '',
        icon: 'fa-solid fa-user-tie',
        bg: '',
      },
      {
        title: 'Australian Applied Eng Systems',
        desc: 'Software Developer',
        color: '',
        icon: 'fa-solid fa-user-tie',
        bg: '',
      },
      {
        title: 'Best Roadways',
        desc: 'Web Developer',
        color: '',
        icon: 'fa-solid fa-user-tie',
        bg: '',
      },
      {
        title: 'SRM University',
        desc: 'Bachelors in Computer Science',
        color: '',
        icon: 'fa-solid fa-school',
        bg: '',
      },
    ],
  }),
};
</script>

<style scoped>
.textColor {
  background-color: white !important;
}
.Cardbackground {
  background-color: transparent !important;
  border: none;
}
.timeline {
  background-color: rgba(128, 128, 128, 0.275) !important;
  border-radius: 1rem;
  padding: 1rem;
}
.timelineItem {
  font-size: 0.8em;
}
#lines-background {
  background-image: url('./bg2.svg');
  background-repeat: repeat;
  animation: moveBackground 20s ease-in-out infinite;
}

@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
