<template>
  <div class="home">
    <top-header></top-header>

    <div class="row">
      <div class="key-background col-12 d-flex align-items-center justify-content-center pt-3 shadow-sm">
        <div class="mr-2">
          <h1 class="font-weight-bold text-light text-shadow">Luke King</h1>
          <p class="text-light text-shadow">Full Stack Software Developer</p>
        </div>
        <div class="d-sm-none">
          <img class="rounded-circle drop-shadow img-big" src="@/assets/headShot.jpg" alt="Luke King Image" />
        </div>
      </div>
      <div class="col col-sm-10 offset-sm-1">

        <card id="about-me">
          <h3 class="text-left">About Me</h3>
          <div class="ml-2">
            <p>My name is Luke King and I'm a full stack software developer. In software there is always
              something changing and new better ways to get things done. It an exciting field to be in and always new
              things to learn.</p>
            <p>I have spent a lot of my life in small business. I was always looking for technology that could improve
              efficiency and bring more consistency into the operation. These same problem solving skills have been
              useful
              to me in software development in the way I approach a new task, breaking it down into its basic components
              and finding the solution. Finding new solutions to problems and learning new ways to do things is what I
              enjoy most in life.
            </p>
          </div>
        </card>
        <card>
          <h3 class="mt-2">Tech I have experience with</h3>
          <ul class="list-unstyled d-flex flex-wrap justify-content-around white-card mt-3">
            <li v-for="skill in skills">{{skill}}</li>
          </ul>
        </card>
        <card id="projects">
          <h3>Projects</h3>
          <div class="row">
            <div class="col col-sm-4">
              <card></card>
            </div>
          </div>
        </card>
      </div>
    </div>
    <bottom id="contact"></bottom>
  </div>
</template>


<script>
  import TopHeader from '@/components/TopHeader.vue'
  import Card from '@/components/Card.vue'
  import Bottom from '@/components/Bottom.vue'
  export default {
    name: 'home',
    data() {
      return {
        skills: ['JavaScript', 'Vue JS', 'C# and .NET', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'MySQL',
          'Dapper', 'Bootstrap 4', 'jQuery', 'Html 5 and CSS 3', 'Scrum', 'Git'
        ]
      }
    },
    computed: {},
    methods: {},
    components: {
      TopHeader,
      Card,
      Bottom
    }
  }
</script>


<style scoped>
  .key-background {
    height: 40vh;
    background-image: linear-gradient(rgba(255, 255, 255, 0.349),
      rgba(255, 255, 255, 0.109)),
      url("../assets/devboard.png");
    background-repeat: no-repeat;
    background-size: auto 160%;
    background-position: center;
  }

  .img-big {
    max-height: 130px;
    width: auto;
  }

  li {
    flex-basis: 45%;
  }
</style>