<script setup>

</script>

<template>
    <main class="container">
        <section v-motion :initial="{
            opacity: 0,
            scale: 0.6,
            y: -50,
        }" :visibleOnce="{
    opacity: 1,
    scale: 1,
    y: 0,
}" class="slide_global-network space-components">
            <p>Be a part of our global network of innovators</p>
            <div class="slide">
                <div class="slide-decoration-left"></div>
                <div class="globaln_img">
                    <img src="@/assets/global-network/client-01.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-02.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-03.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-04.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-05.svg" alt="" srcset="">

                    <img src="@/assets/global-network/client-01.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-02.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-03.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-04.svg" alt="" srcset="">
                    <img src="@/assets/global-network/client-05.svg" alt="" srcset="">
                </div>
                <div class="slide-decoration-right"></div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.slide_global-network {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1.5s;
    padding: 0 2rem;
}

.slide_global-network p {
    font-size: 1.4rem;
    margin-bottom: 50px;
}

.slide {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 4rem;
    overflow: hidden;
    position: relative;
}

.slide-decoration-left,
.slide-decoration-right {
    z-index: 1;
    width: 100px;
    height: 50px;
    background-image: linear-gradient(to right, #fff 23%, rgba(255, 255, 255, 0));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.slide-decoration-right {
    background-image: linear-gradient(270deg, #fff 23%, rgba(255, 255, 255, 0));
    left: auto;
}

.globaln_img {
    display: flex;
    width: calc(161.33px * 10);
    animation: scroll 40s linear infinite;
    will-change: transform;
}

.slide_global-network img {
    margin-left: 6rem;
    height: 2.5rem;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-258px * 5))
    }
}

@media only screen and (max-width: 1340px) {
    .slide {
        max-width: 62rem;
    }
}

@media only screen and (max-width: 972px) {
    .slide {
        max-width: 52rem;
    }
    .slide_global-network img {
        height: 2rem;
    }

    .title h1 {
        font-size: 3rem;
    }
}

@media only screen and (max-width: 820px) {
    .slide {
        max-width: 100%;
    }
    
}

@media only screen and (max-width: 640px) {
    .slide {
        max-width: 100%;
    }
    .slide_global-network img {
        height: 1.5rem;
        margin-left: 2rem;
    } 
    .space-components {
        margin-bottom: 5rem;
    }
}</style>