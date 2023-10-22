<script>
import windowScrollPosition from '@/assets/window-scroll-position'
export default {
    mixins: [windowScrollPosition('position')],
    data() {
        return {

        }
    }
}

</script>

<template>
    <section class="space-components">
        <div v-motion :initial="{
            opacity: 0,
            x: -100,
        }" :visibleOnce="{
    opacity: 1,
    x: 0,
}" class="info">
            <div class="sub-title">
                <img src="@/assets/smile.png" alt="">
                <p class="hl-text">About Us</p>
            </div>
            <h1 class="title">Empowering brands for digital success</h1>
            <p class="media-text">We are a leading social media agency dedicated to helping businesses of all sizes maximize
                their online impact and achieve their digital goals.</p>
            <p class="media-text">We believe in collaborative partnerships, working closely with our clients to understand
                their objectives, target audience, and industry landscape, to develop effective strategies that drive
                success.</p>
            <div class="goal">
                <div class="item">
                    <img src="@/assets/part-four/target.svg" alt="">
                    <p class="text-name big-title">Target oriented work</p>
                    <p class="text media-text">Our target-oriented approach ensures that every action we take is aligned
                        with achieving your specific goals.</p>
                </div>
                <div class="item">
                    <img src="@/assets/part-four/project.svg" alt="">
                    <p class="text-name big-title">Project success guarantee</p>
                    <p class="text media-text">We stand behind our work with a project success guarantee, ensuring that our
                        clients achieve their desired outcomes.</p>
                </div>
            </div>
        </div>
        <div v-motion :initial="{
            opacity: 0,
            x: 100
        }" :visibleOnce="{
    opacity: 1,
    x: 0
}" class="media_img">
            <kinesis-container event="scroll" class="info_img">
                <div class="main_img">
                    <img class="img_sub-main1" src="@/assets/part-four/about-01.jpg" alt="">
                    <img class="i80 logo2" src="@/assets/logo-brand/youtube.png" alt="">
                    <img class="img_sub-main2" src="@/assets/part-four/about-02.jpg" alt="">
                    <img class="i80 logo1" src="@/assets/logo-brand/linkedin.png" alt="">
                </div>
                <kinesis-element :originY="100" :maxY="100" :strength="-100" cycle class="div-more1">
                    <img class="img_more1" src="@/assets/part-four/follow-01.png" alt="">
                </kinesis-element>
                <kinesis-element :originY="0" :strength="100" cycle class="div-more2">
                    <img class="img_more2" src="@/assets/part-four/follow-02.png" alt="">
                </kinesis-element>
            </kinesis-container>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    text-align: left;
}

.info,
.media_img {
    transition: .3s linear;
}

.media_img {
    position: relative;
    flex: 1;
}

.info_img {
    height: 100%;
}

.main_img {
    display: flex;
}



.main_img .img_sub-main1 {
    animation: animate 5s ease-in-out infinite;
    transition: all 1s ease-in-out;
    height: 22rem;
}

.logo1 {
    z-index: 3;
    position: absolute;
    top: 0rem;
    right: 8rem;
    animation: itemMove1 25s linear infinite;
}

.logo2 {
    position: absolute;
    bottom: 12rem;
    left: 6rem;
    animation: itemMove2 25s linear infinite;
    z-index: 3;
}

@keyframes itemMove1 {

    0%,
    100% {
        transform: translate(20px, -60px)
    }

    50% {
        transform: translate(120px, 90px);
    }
}

@keyframes itemMove2 {

    0%,
    100% {
        transform: translate(40px, 0)
    }

    50% {
        transform: translate(-40px, 40px);
    }
}

.main_img .img_sub-main2 {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 24rem;
    border-radius: 2rem;
    border: .5rem solid white;
}

.img_more1 {
    height: 4rem;
    position: relative;
    z-index: 4;
    top: -25rem;
    left: 23rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.div-more1 {
    position: absolute;
}

.div-more1::before {
    position: absolute;
    content: "";
    z-index: 5;
    top: -26rem;
    left: 32rem;
    background: url("@/assets/heart.png") no-repeat;
    background-size: 80%;
    height: 40px;
    width: 40px;
}


.img_more2 {
    position: absolute;
    height: 4rem;
    top: -14rem;
    left: 10rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 4;
}

.div-more2 {
    position: absolute;
    bottom: 0;
}

.div-more2::before {
    position: absolute;
    content: "";
    z-index: 5;
    top: -15rem;
    left: 18.8rem;
    background: url("@/assets/like.png") no-repeat;
    background-size: 80%;
    height: 40px;
    width: 40px;
}

@keyframes animate {
    0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
}

.info {
    flex: 1;
}

.sub-title {
    display: flex;
    align-items: center;
}

.sub-title img {
    height: 20px;
}

.sub-title p {
    font-weight: 600;
    margin-bottom: 0;
    margin-left: .3rem;
}

.title {
    font-family: 'Montserrat';
    max-width: 600px;
    font-weight: 700;
    font-size: 3.75rem;
    margin-top: 1rem;
}

.goal {
    display: flex;
    margin-top: 2.5rem;
}

.item {
    flex: 1;
}

.item:first-child {
    margin-right: 1.8rem;
}

.item img {
    background-color: rgb(44, 62, 80);
    padding: .6rem;
    border-radius: 10px;
    margin-bottom: 20px;
}

.text-name {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
}

@media only screen and (max-width: 1200px) {
    .logo1 {
        top: 4rem;
        right: 10rem;
    }
}

@media only screen and (max-width: 1100px) {
    .title {
        font-size: 3rem;
    }

    .img_more1 {
        left: 16rem;
    }

    .div-more1::before {
        left: 25rem;
    }

    .img_more2 {
        left: 0;
    }

    .div-more2::before {
        left: 8.8rem;
    }

    .text-name {
        font-size: 18px;
    }
}

@media only screen and (max-width: 972px) {
    section {
        align-items: center;
        flex-direction: column;
    }

    .goal {
        flex-direction: column;
    }

    .logo1,
    .logo2 {
        height: 60px;
        width: 60px;
    }

    .logo1 {
        top: 24rem;
    right: 10rem;
    }

    .logo2 {
        bottom: 17rem;
    }

    .main_img .img_sub-main1 {
        border: 4px solid white;
        position: absolute;
    }

    .div-more1 {
        right: 13rem;
    }

    .div-more2 {
        right: 50%;
    bottom: -4rem;
    }
    .main_img .img_sub-main2 {
        position: relative;
    }
    .main_img .img_sub-main1 {
        position: relative;
        top: 14rem;
        right: -4rem;
        z-index: 0;
        margin-bottom: 10rem;
    }
    @media only screen and (max-width: 720px) {
        .main_img .img_sub-main2 {
            height: 18rem;
        }
        .main_img .img_sub-main1 {
            height: 16rem;
        }
    }
}</style>