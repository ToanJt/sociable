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
    <main class="container">
        <section :initial="true" class="intro space-components">
            <p><img src="@/assets/smile.png" alt="">Your go-to marketing agency</p>
            <div v-motion-slide-bottom class="intro_title">
                <h1 class="big-title">Your path to
                    <span class="hl-text">
                        <span class="effect_shadow">social </span>
                        media</span> excellence
                </h1>
                <img :class="{ 'moved-up': position[1], 'moved-down': position[1] < 50 }"
                    class="icon_socials icon_social-1 i50" src="@/assets/logo-brand/facebook.png" alt="">
                <img :class="{ 'moved-down': position[1], 'moved-up': position[1] < 50 }"
                    class="icon_socials icon_social-2 i40" src="@/assets/logo-brand/whatsup.png" alt="">
                <img :class="{ 'moved-up': position[1], 'moved-down': position[1] < 50 }"
                    class="icon_socials icon_social-3 i50" src="@/assets/logo-brand/twitter.png" alt="">
                <img :class="{ 'moved-down': position[1], 'moved-up': position[1] < 50 }"
                    class="icon_socials icon_social-4 i40" src="@/assets/logo-brand/instagram.png" alt="">
            </div>
            <div v-motion-slide-bottom class="intro_img">
                <img src="@/assets/peoples/intro-01.jpg" alt="">
                <img src="@/assets/peoples/intro-02.webp" alt="">
                <img src="@/assets/peoples/intro-03.jpg" alt="">
            </div>
        </section>
    </main>
</template>

<style scoped>
section {
    padding: 0 5rem;
}

.moved-down {
    transform: translateY(10px);
    transition: transform 2s;
}

.moved-up {
    transform: translateY(-15px);
    transition: transform 2s;
}

.animation {
    transition: transform 2s;
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.intro p>img {
    width: 20px;
    margin-right: 4px;
    margin-bottom: 4px;
}

.intro p {
    font-weight: 600;
    margin-top: 5rem;
}

.intro h1 {
    font-size: 70px;
    font-weight: 700;
    max-width: 67rem;
    line-height: 84px;
    margin-bottom: 70px;
}

.intro_title {
    position: relative;
    height: auto;
    transition: linear .3s;
}

.icon_socials {
    position: absolute;
}

.icon_social-1 {
    top: -3rem;
    left: -6rem;
}

.icon_social-2 {
    bottom: 4.5rem;
    left: 6.5rem;
}

.icon_social-3 {
    right: 15rem;
    bottom: 3rem;
}

.icon_social-4 {
    top: -3rem;
    right: -3rem;
}

.effect_shadow {
    text-shadow: 0px 0px 80px #0d08f6;
}

.intro_img {
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: all 1s;
}

.intro_img img {
    height: 26.5rem;
    border-radius: 10px;
}

.intro_img img:nth-child(2) {
    height: 41rem;
    margin-top: 5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

@media only screen and (max-width: 1340px) {
    .icon_social-1 {
        left: -2rem;
    }

    .intro_img {
        justify-content: space-between;
    }

    .intro_img img {
        height: 24rem;
    }
}

@media only screen and (max-width: 1200px) {
    .intro h1 {
        font-size: 60px;
    }

    .icon_social-1 {
        left: 2rem;
    }

    .icon_social-4 {
        right: 1rem;
    }

    .intro_img img {
        height: 24rem;
    }

    .intro_img img:nth-child(2) {
        height: 36rem;
    }
}

@media only screen and (max-width: 1100px) {
    .intro_title {
        width: auto;
    }

    .intro_img {
        width: 100%;
    }

    .intro_img img {
        height: 20rem;
    }

    .intro_img img:nth-child(2) {
        height: 32rem;
    }

    .icon_social-1 {
        left: 4rem;
    }

    .icon_social-2 {
        left: 12rem;
    }

    .icon_social-4 {
        right: 4rem;
    }
}

@media only screen and (max-width: 972px) {
    .intro_title {
        width: auto;
    }

    .intro h1 {
        font-size: 48px;
    }

    .intro_img {
        width: 100%;
    }

    .intro_img img {
        height: 16rem;
    }

    .intro_img img:nth-child(2) {
        height: 24rem;
    }

    .icon_social-1 {
        height: 40px;
        width: auto;
    }
    .icon_social-2 {
        left: 8rem;
        height: 30px;
        width: auto;
    }
    .icon_social-3 {
        right: 8rem;
        height: 40px;
        width: auto;
    }
    .icon_social-4 {
        height: 30px;
        width: auto;
    }

}

@media only screen and (max-width: 820px) {
    .intro_img {
        width: 100%;
    }

    .intro h1 {
        font-size: 40px;
        line-height: 1.2;
        margin-bottom: 24px;
    }

    .intro p {
        margin-top: 3rem;
    }
    .intro_img img {
        height: 13rem;
    }

    .intro_img img:nth-child(2) {
        height: 18rem;
        margin-top: 2rem;
    }

    .icon_social-1 {
        top: -5rem;
    }

    .icon_social-2 {
        left: 8rem;
        bottom: 0;
    }

    .icon_social-3 {
        right: 6rem;
        bottom: 2rem;
    }
}

@media only screen and (max-width: 720px) {
    .intro_img img {
        height: 12rem;
    }

    .intro_img img:nth-child(2) {
        height: 17rem;
    }

    .icon_social-2 {
        left: 0;
    }
    .icon_social-3 {
        right: 0;
    }
}

@media only screen and (max-width: 640px) {
    section {
        padding: 0 2rem;
    }
    .intro h1 {
        font-size: 36px;
    }

    .intro_img {
        flex-direction: column;
        gap: 2rem;
    }

    .intro .intro_img img {
        width: auto;
        height: auto;
        margin-top: 0;
    }

    .icon_social-1 {
        top: -5rem;
        left: 0;
    }

    .icon_social-2,
    .icon_social-3,
    .icon_social-4 {
        display: none;
    }
}

@media only screen and (max-width: 479px) {
    .intro h1 {
        font-size: 30px;
    }
    .space-components {
        margin-bottom: 5rem;
    }
}
</style>