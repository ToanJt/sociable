<template>
  <body class="">
    <main class="container space-components">
      <section class="">
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
          }"
          class="title"
        >
          <div class="sub-title">
            <img class="i20" src="@/assets/smile.png" alt="" />
            <p class="">Our case study</p>
          </div>
          <h1 class="big-title">Building on the success</h1>
        </div>
        <div class="cases">
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
            }"
            class="test"
          >
            <img src="@/assets/seven-part/case-01.jpg" alt="" />
            <div class="box">
              <p>Social media workshops</p>
              <button>
                View More
                <span>
                  <img src="@/assets/right-arrow.png" alt="" />
                </span>
              </button>
            </div>
          </div>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 200,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
            }"
            class="test"
          >
            <img src="@/assets/seven-part/case-02.jpg" alt="" />
            <div class="box">
              <p>Social media workshops</p>
              <button>
                View More
                <span>
                  <img src="@/assets/right-arrow.png" alt="" />
                </span>
              </button>
            </div>
          </div>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 300,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
            }"
            class="test"
          >
            <img src="@/assets/seven-part/case-03.jpg" alt="" />
            <div class="box">
              <p>Social media workshops</p>
              <button>
                View More
                <span>
                  <img src="@/assets/right-arrow.png" alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<style scoped>
body {
    background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 22%,
    rgba(246, 246, 246, 1) 36%,
    rgba(255, 255, 255, 1) 36%,
    rgba(46, 55, 79, 1) 36%
  );
}
.container {

}
.box {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  left: 10%;
  right: 10%;
  border-radius: 10px;
  bottom: -12rem;
  transition: linear 0.5s;
}

.box p {
  font-size: 24px;
  line-height: 28.8px;
  font-family: "Montserrat";
  font-weight: 700;
  color: #2e374f;
  margin-bottom: 1rem;
}

.box button {
  display: flex;
  border: none;
  align-items: center;
  color: rgb(89, 86, 233);
  background-color: white;
  align-self: center;
  margin-bottom: 0.5rem;
}

.box button img {
  margin-left: 0.2rem;
  height: 20px;
  margin-bottom: 0;
}

main {
  padding: 0 2rem;
  padding-top: 100px;
}

.sub-title {
  display: flex;
  align-items: center;
  justify-content: start;
}

.sub-title p {
  font-weight: 700;
  margin-bottom: 0;
  margin-left: 0.3rem;
  color: white;
}

.title {
  max-width: 600;
  display: flex;
  flex-direction: column;
  align-items: start;
  transition: linear 0.3s;
}

.title h1 {
  text-align: left;
  margin-top: 1rem;
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 3rem;
  max-width: 900px;
  color: white;
}

.cases {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 2rem;
}

.cases .test {
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  transition: linear 0.3s;
}

.cases img {
  height: 100%;
  width: 100%;
  transform: scale3d(1, 1, 1);
  transition: transform 0.3s linear;
  border-radius: 10px;
}

.test:hover img {
  transform: scale3d(1.1, 1.1, 1);
  transition: transform 0.3s linear;
}

.test:hover .box {
  bottom: 2rem;
  opacity: 1;
  transition: linear 0.5s;
}

@media only screen and (max-width: 972px) {
  .title h1 {
    font-size: 3rem;
  }
}
@media only screen and (max-width: 820px) {
  .box p {
    font-size: 20px;
  }
  .box button {
    font-size: 16px;
  }
  .box button img {
    height: 16px;
  }
}

@media only screen and (max-width: 720px) {
  .box p {
    font-size: 18px;
  }
  .box button {
    font-size: 14px;
  }
  .box button img {
    height: 14px;
  }
  .box {
    padding: 12px;
  }
}

@media only screen and (max-width: 640px) {
  .cases {
    grid-template-columns: 1fr;
  }
  main {
    background: rgb(46, 55, 79) !important;
    padding-bottom: 6rem;
  }
}

@media only screen and (max-width: 460px) {
    .title {
        align-items: center;
    }
  .title h1 {
    font-size: 2rem;
    text-align: center;
  }
}
</style>
