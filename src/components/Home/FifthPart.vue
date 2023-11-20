<script setup>
import { onMounted, ref } from "vue";

const message = ref(
  "The results achieved by this agency were impressive. Their fitness-focused content resonated with our audience, fostering engagement and brand loyalty beyond our expectations."
);
const messages = [
  "The results achieved by this agency were impressive. Their fitness-focused content resonated with our audience, fostering engagement and brand loyalty beyond our expectations.",
  "This agency's commitment to our cause was evident in their meticulous strategies. They effectively conveyed our mission, driving increased donations and volunteer involvement.",
  "Our brand's recognition soared thanks to our strategic partnership. Their tailored approach amplified our reach, resulting in heightened engagement and increased website traffic.",
  "Our real estate agency's growth was accelerated by this agency's digital expertise. Their skill in showcasing properties attracted a broader audience, leading to more successful deals.",
];
const rater = ref("Joan Wallace");
const raters = ["Amanda Reed", "Joan Wallace", "Bryan Knight", "Billy Vasquez"];

let activeCurrent = ref(null);

function activeMessage() {
  const images = document.querySelectorAll(".image");
  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      if (index > 0) {
        images[0].classList.remove("border_light");
      }
      if (activeCurrent.value) {
        activeCurrent.value.classList.add("remove-border_light");
        console.log(activeCurrent.value);
      }

      message.value = messages[index];
      rater.value = raters[index];
      image.classList.remove("remove-border_light");
      image.classList.add("border_light");
      activeCurrent.value = image;
      console.log(activeCurrent.value);
    });
  });
}

onMounted(() => {
  activeMessage();
});
</script>

<template>
  <body>
    <main class="container space_small-components">
      <div
        v-motion
        :initial="{
          opacity: 0,
          x: -100,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
        }"
        class="main"
      >
        <div class="background_img">
          <img src="@/assets/fifth-part/post-03.webp" alt="" />
          <div class="follow_img">
            <img class="img" src="@/assets/part-four/follow-01.png" alt="" />
          </div>
          <img src="@/assets/heart.png" alt="" class="accessory_icon icon1" />
          <img
            src="@/assets/logo-brand/instagram.png"
            alt=""
            class="accessory_icon i40 icon2"
          />
          <img
            src="@/assets/logo-brand/facebook.png"
            alt=""
            class="accessory_icon i50 icon3"
          />
          <img
            src="@/assets/logo-brand/youtube.png"
            alt=""
            class="accessory_icon i40 icon4"
          />
          <img src="@/assets/smile.png" alt="" class="accessory_icon i40 icon5" />
          <img
            src="@/assets/fifth-part/decoration-02.png"
            alt=""
            class="accessory_icon i80 icon6"
          />
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
            x: 200,
          }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
          }"
          class="reviews"
        >
          <img class="i80 icon7" src="@/assets/fifth-part/decoration-01.png" alt="" />
          <img class="i60" src="@/assets/fifth-part/Decoration-01.svg" alt="" />
          <p>{{ message }}</p>
          <div class="rates">
            <div class="images">
              <img
                class="image i70 border_light"
                src="@/assets/fifth-part/review-01.jpg"
                alt=""
              />
              <img class="image i70" src="@/assets/fifth-part/review-02.jpg" alt="" />
              <img class="image i70" src="@/assets/fifth-part/review-03.jpg" alt="" />
              <img class="image i70" src="@/assets/fifth-part/review-04.jpg" alt="" />
            </div>
            <div class="rate">
              <p>{{ rater }}</p>
              <img src="@/assets/fifth-part/star-ratting.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div
          v-motion
          :initial="{
            opacity: 0,
            rotateY: 180,
          }"
          :visibleOnce="{
            opacity: 1,
            rotateY: 360,
          }"
          class="item"
        >
          <div class="template">
            <img class="" src="@/assets/fifth-part/followers.svg" alt="" />
          </div>
          <div class="text_info">
            <h1>50K</h1>
            <p>Followers</p>
          </div>
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
            rotateY: 180,
          }"
          :visibleOnce="{
            opacity: 1,
            rotateY: 360,
          }"
          class="item"
        >
          <div class="template">
            <img class="" src="@/assets/fifth-part/team.svg" alt="" />
          </div>
          <div class="text_info">
            <h1>75+</h1>
            <p>Marketing Experts</p>
          </div>
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
            rotateY: 180,
          }"
          :visibleOnce="{
            opacity: 1,
            rotateY: 360,
          }"
          class="item"
        >
          <div class="template">
            <img class="" src="@/assets/fifth-part/brand.svg" alt="" />
          </div>
          <div class="text_info">
            <h1>1K</h1>
            <p>Brands Joined</p>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<style scoped>
body {
    background-color: rgb(46, 55, 79);
}
main {
    padding: 0 2rem;
}
.accessory_icon {
  position: absolute;
}

.main,
.reviews {
  transition: linear 0.3s;
}

.item {
  transition: linear 0.2s;
}

.icon1 {
  top: -1rem;
  right: -1rem;
  height: 40px;
  animation: zoom 1s linear infinite;
}

.icon2 {
  top: 8rem;
  right: -1rem;
}

.icon3 {
  left: -1.6rem;
  top: 12rem;
}

.icon4 {
  bottom: -1rem;
  right: 1rem;
}

.icon5 {
  bottom: 2rem;
  left: -1rem;
  animation: move 15s linear infinite;
}

.icon6 {
  left: -8rem;
  bottom: 1rem;
}

.icon7 {
  position: absolute;
  right: -6rem;
  bottom: 50%;
}

@keyframes zoom {
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.5, 1.5);
  }
}

@keyframes move {
  0%,
  100% {
    transform: translate(10px, 10px);
  }

  50% {
    transform: translate(-20px, 40px);
  }
}

.border_light {
  border: 3px solid rgb(89, 86, 233) !important;
  box-shadow: rgba(89, 86, 233, 0.25) 0px 46px 47px, rgb(89, 86, 233, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  z-index: 5;
}

.remove-border_light {
  border: 3px solid white !important;
  box-shadow: none;
  z-index: 0;
}

main {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  justify-content: center;
  position: relative;
  gap: 6.25rem;
  padding: 70px;
}

.background_img {
  position: relative;
}

.background_img > img:first-child {
  height: 35rem;
  border-radius: 10px;
  align-self: start;
}

.background_img .follow_img {
  position: absolute;
  left: -6rem;
  top: 5rem;
}

.follow_img > .img {
  height: 4rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

.follow_img::before {
  position: absolute;
  content: "";
  z-index: 5;
  top: -1rem;
  right: -0.5rem;
  background: url("@/assets/heart.png") no-repeat;
  background-size: 80%;
  height: 40px;
  width: 40px;
}

.reviews {
  display: flex;
  align-self: center;
  flex-direction: column;
}

.rates {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 1rem;
}

.rates .rate {
  align-self: center;
}

.rates .rate > p {
  font-size: 1rem;
  margin-bottom: 0;
  margin-top: 0;
}

.rates .rate > img {
  margin-top: -1rem;
}

.reviews p {
  color: white;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 36px;
  max-width: 43rem;
  margin-top: 1.25rem;
}

.reviews .images {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
}

.images .image {
  border-radius: 50%;
  border: 3px solid white;
}

.image:nth-child(2) {
  position: absolute;
  left: 3.5rem;
}

.image:nth-child(3) {
  position: absolute;
  left: 7rem;
}

.image:nth-child(4) {
  position: absolute;
  left: 10.5rem;
}

.about .item {
  display: flex;
}

.footer {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 8rem;
  margin-bottom: 3rem;
}

.footer .item {
  display: flex;
  gap: 20px;
}

.item .template {
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
}

.item .text_info {
  color: white;
  text-align: left;
}

.text_info h1 {
  font-family: "Montserrat";
  color: rgb(89, 86, 233);
  font-size: 2.5rem;
  margin: 0;
}

.text_info p {
  font-size: 1.25rem;
  font-family: "Montserrat";
}

@media only screen and (max-width: 1340px) {
  .icon7 {
    right: 0rem;
    bottom: 100%;
  }
}
@media only screen and (max-width: 1100px) {
  .item .template {
    height: 60px;
    width: 60px;
  }
  .text_info h1 {
    font-size: 2rem;
  }
  .text_info p {
    font-size: 1rem;
  }
  .background_img > img:first-child {
    height: 28rem;
  }
  .reviews p {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 972px) {
  .icon7 {
    width: 60px;
  }
  .reviews p {
    font-size: 1rem;
  }
  .images .image {
    width: 66px;
  }
  .rates .rate > p {
    font-size: 0.8rem;
  }
  .rates .rate > img {
    height: 0.8rem;
  }
  .background_img > img:first-child {
    height: 22rem;
  }
  .item .template {
    height: 50px;
    width: 50px;
  }
  .text_info h1 {
    font-size: 1.6rem;
  }
  .text_info p {
    font-size: 0.8rem;
  }
}

@media only screen and (max-width: 820px) {
    .main {
        padding: 70px 0;
    }
  .rates {
    flex-direction: column;
  }
  .rates .rate {
    align-self: start;
  }
  .footer {
    gap: 4rem;
  }
  .follow_img > .img {
    height: 2rem;
  }
  .background_img .follow_img {
    left: -2rem;
  }
  .follow_img::before {
    height: 26px;
    width: 26px;
  }
  .footer {
    justify-content: start;
  }
  .footer .item {
    gap: 6px;
  }
}

@media only screen and (max-width: 640px) {
  .main {
    flex-direction: column;
  }
  .follow_img > .img {
    height: 4rem;
  }
  .follow_img::before {
    height: 40px;
    width: 40px;
  }
  .background_img > img:first-child {
    height: 100%;
    width: 100%;
  }
  .reviews p {
    font-size: 1.4rem;
  }
  .footer {
    justify-content: start;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
