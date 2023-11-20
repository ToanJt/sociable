<template>
    <main class="container">
        <section class="space-components">
        <div v-motion :initial="{
            x: -200,
            opacity: 0
        }" 
        :visibleOnce="{
            x: 0,
            opacity: 1
        }" class="background">
            <kinesis-container event="scroll" class="image">
                <img class="main_img" src="@/assets/part-eight/service-01.jpg" alt="">
                <img class="decoration1" src="@/assets/part-eight/bell.png" alt="">
                <kinesis-element type="rotate" axis="y" :strength="-10">
                    <img class="decoration2" src="@/assets/part-eight/fb-like.png" alt="">
                </kinesis-element>
                <kinesis-element axis="y" :strength="-100">
                    <img class="decoration3" src="@/assets/part-eight/decoration-02.svg" alt="">
                </kinesis-element>
            </kinesis-container>
        </div>
        <div v-motion :initial="{
            x: 200,
            opacity: 0
        }" 
        :visibleOnce="{
            x: 0,
            opacity: 1
        }" class="socials">
            <div class="social">
                <img src="@/assets/logo-brand/facebook.png" alt="">
                <p>Facebook marketing</p>
            </div>
            <div class="social">
                <img src="@/assets/logo-brand/instagram.png" alt="">
                <p>Instagram marketing</p>
            </div>
            <div class="social">
                <img src="@/assets/logo-brand/linkedin.png" alt="">
                <p>LinkedIn marketing</p>
            </div>
            <div class="social">
                <img src="@/assets/logo-brand/twitter.png" alt="">
                <p>Twitter marketing</p>
            </div>
            <div class="social">
                <img src="@/assets/logo-brand/youtube.png" alt="">
                <p>Youtube marketing</p>
            </div>
            <div class="test">
                <img src="@/assets/logo-brand/whatsup.png" alt="" class="decoration4">
            </div>
        </div>
    </section>
    </main>
</template>

<style scoped>
.container {
    
}
section {
    display: flex;
    padding: 1rem 2rem;
    overflow: hidden;
}
.background,
.socials {
    transition: linear .5s;
}

.background {
    flex: 1;
}
.background .image {
    position: relative;
}
.background .image .decoration1 {
    position: absolute;
    top: -1rem;
    right: 40%;
    height: 50px;
    transform: rotate(20deg);
}
.background .image .decoration2 {
    position: absolute;
    bottom: 8rem;
    right: 4rem;
    width: 80px;
    height: 80px;
    transform: rotate(20deg);
}
.background .image .decoration3 {
    position: absolute;
    bottom: 8rem;
    left: 2rem;
    transform: rotate(-10deg);
}
.background .image .main_img {
    border-radius: 50%;
    height: 423px;
    margin-right: 70px;
}

.socials {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    position: relative;
}
.test {
    position: absolute;
    right: 0;
    bottom: 3rem;
    transform: rotate(20deg);
}
.socials .social {
    width: 232px;
    background-color: rgb(238, 238, 253);
    border-radius: 10px;
    transition: linear .2s;
}
.social img {
    margin-top: 30px;
}
.social p {
    margin-bottom: 0;
    padding: 30px 20px;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 700;
}
.social:hover {
    transition: linear .2s;
    box-shadow: 0 24px 55px -19px rgba(89, 86, 233, .4);
}

@media only screen and (max-width: 1200px) {
    .socials .social {
        width: 240px;
    }
}
@media only screen and (max-width: 1100px) {
    section {
        flex-direction: column;
    }
    .background .image .decoration3 {
        left: 10rem;
    }
    .background .image .decoration2 {
        right: 18rem;
    }
    .background .image .main_img {
        margin-bottom: 4rem;
    }
}
@media only screen and (max-width: 820px) {
    .background .image .decoration3 {
        left: 5%;
        bottom: 14rem;
    }
    .background .image .decoration2 {
        right: 20%;
        bottom: 14rem;
    }
}

@media only screen and (max-width: 564px) {
    .socials .social {
        width: 100%;
    }
    .background .image .main_img {
        margin-right: 0;
        height: 100%;
        width: 100%;
    }
    .background .image .decoration2 {
        height: 3rem;
        width: 3rem;
        right: 10%;
    }
    .background .image .decoration3 {
        height: 2.5rem;
        bottom: 8rem;
    }
    .test {
        display: none;
    }
}
</style>