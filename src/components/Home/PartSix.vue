<template>
    <main class="container">
        <section class="space_small-components">
        <div class="title">
            <div v-motion :initial="{
                opacity: 0,
                y: 100
            }"
            :visibleOnce="{
                opacity: 1,
                y: 0
            }" class="sub-title">
                <img class="i20" src="@/assets/smile.png" alt="">
                <p class="hl-text">Your Success Story Starts Here</p>
            </div>
            <h1 v-motion :initial="{
                opacity: 0,
                y: 200
            }"
            :visibleOnce="{
                opacity: 1,
                y: 0
            }" class="big-title">Next-level social media marketing services</h1>
        </div>
        <div class="services">
            <div  v-motion :initial="{
                opacity: 0,
                y: 100
            }"
            :visibleOnce="{
                opacity: 1,
                y: 0
            }" class="item">
                <img src="@/assets/part-six/service-01.png" alt="">
                <div class="content">
                    <p>Advertising marketing</p>
                    <p>Elevate reach, and drive conversions: Unlock tailored ad strategies for impactful results that
                        captivate your audience.</p>
                </div>
                <button>View More <span>
                        <img src="@/assets/right-arrow.png" alt="">
                    </span>
                </button>
            </div>
            <div v-motion :initial="{
                opacity: 0,
                y: 100
            }"
            :visibleOnce="{
                opacity: 1,
                y: 0
            }" class="item">
                <img src="@/assets/part-six/service-02.png" alt="">
                <div class="content">
                    <p>SEO optimization</p>
                    <p>Elevate your online presence with our SEO services, guiding your brand to higher rankings and
                        increased visibility.</p>
                </div>
                <button>View More <span>
                        <img src="@/assets/right-arrow.png" alt="">
                    </span>
                </button>
            </div>
            <div v-motion :initial="{
                opacity: 0,
                y: 200
            }"
            :visibleOnce="{
                opacity: 1,
                y: 0
            }" class="item">
                <img src="@/assets/part-six/service-03.png" alt="">
                <div class="content">
                    <p>Social media marketing</p>
                    <p>Stay ahead of the competition with innovative and results-oriented social media marketing.</p>
                </div>
                <button>View More <span>
                        <img src="@/assets/right-arrow.png" alt="">
                    </span>
                </button>
            </div>
            <div v-motion :initial="{
                opacity: 0,
                y: 200
            }"
            :visibleOnce="{
                opacity: 1,
                y: 0
            }" class="item">
                <img src="@/assets/part-six/service-04.png" alt="">
                <div class="content">
                    <p>Content marketing</p>
                    <p>A fusion of creativity and strategy that sparks connections and fuels growth.</p>
                </div>
                <button>View More <span>
                        <img src="@/assets/right-arrow.png" alt="">
                    </span>
                </button>
            </div>
        </div>
    </section>
    </main>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
}

.sub-title {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: linear .1s;
}
.sub-title p {
    font-weight: 600;
    margin-bottom: 0;
    margin-left: .3rem;
}


.title {
    max-width: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: linear .3s;
}
.title h1 {
    margin-top: 1rem;
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 3rem;
    max-width: 900px;
}


.services {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2.5rem;
}
.item:hover {
    transform: translateY(10px) !important;
    transition: transform .2s linear;
}
.item {
    padding: 2.5rem;
    background-color: rgb(238, 238, 253);
    border-radius: 12px;
    transition: transform .2s linear;
}

.item img {
    display: flex;
    height: 9.3rem;
    margin-bottom: 30px;
}

.item p {
    text-align: left;

}

.item p:first-child {
    margin-bottom: 10px;
    font-family: 'Montserrat';
    font-size: 30px;
    font-weight: 700;
    color: rgb(89, 86, 233);
}

.item p:last-child {
    margin-bottom: 40px;
}

.item button {
    display: flex;
    border: none;
    background-color: white;
    padding: 20px;
    align-items: center;
    border-radius: 12px;
    color: rgb(89, 86, 233);
}

.item button img {
    margin-left: 0.2rem;
    height: 20px;
    margin-bottom: 0;
}

@media only screen and (max-width: 972px) {
    .title h1 {
        font-size: 3rem;
    }
    .item p:first-child {
        font-size: 26px;
    }
}

@media only screen and (max-width: 720px) {
    .services {
        grid-template-columns: 1fr;
    }
}

@media only screen and (max-width: 460px) {
    .title h1 {
        font-size: 2rem;
    }
    .space-components {
        margin-bottom: 5rem;
    }
}
</style>