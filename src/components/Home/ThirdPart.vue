<template>
    <section class="space-components">
        <div v-motion :initial="{
            opacity: 0,
            y: 50,
        }" :visibleOnce="{
    opacity: 1,
    y: 0,
}" class="sub-title">
            <img src="@/assets/smile.png" alt="">
            <p class="hl-text">Our Feature</p>
        </div>
        <h1 v-motion :initial="{
            opacity: 0,
            scale: 0.6,
            y: 50,
        }" :visibleOnce="{
    opacity: 1,
    scale: 1,
    y: 0,
}" class="title">Unlock greater social media success</h1>
        <div class="goal">
            <div v-motion :initial="{
                opacity: 0,
                y: 50,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
}" class="item">
                <img src="@/assets/third-part/feature-04.png" alt="">
                <div class="content">
                    <p>Goals & objective</p>
                    <p class="media-text">We aim to boost interaction with our audience on Instagram by 25% within the next
                        three months.</p>
                </div>
            </div>
            <div v-motion :initial="{
                opacity: 0,
                y: 50,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
}" class="item">
                <img src="@/assets/third-part/feature-02.png" alt="">
                <div class="content">
                    <p>Strategy</p>
                    <p class="media-text">A comprehensive guide to developing an effective social media strategy, including
                        goal setting, and target audience identification.</p>
                </div>
            </div>
            <div v-motion :initial="{
                opacity: 0,
                y: 50,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
}" class="item">
                <img src="@/assets/third-part/feature-03.png" alt="">
                <div class="content">
                    <p>Efficiency</p>
                    <p class="media-text">Enhancing processes, reducing waste, and optimizing time to achieve higher
                        productivity and effectiveness in various tasks, systems, and operations.</p>
                </div>
            </div>
            <div v-motion :initial="{
                opacity: 0,
                y: 50,
            }" :visibleOnce="{
    opacity: 1,
    y: 0,
}" class="item">
                <img src="@/assets/third-part/feature-01.png" alt="">
                <div class="content">
                    <p>Creative thinking</p>
                    <p class="media-text">Discuss the importance of creative thinking in social media marketing, how it can
                        help businesses stand out, and techniques.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    text-align: left;
}

.sub-title {
    display: flex;
    align-items: center;
    transition: all .5s;
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
    max-width: 900px;
    font-weight: 700;
    font-size: 3.75rem;
    margin-top: 1rem;
    transition: all 1s;
}

.goal {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 40px;
    margin-top: 4rem;
}

.item {
    display: flex;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    border: 1px solid #cccccc75;
}

.item:nth-child(1),
.item:nth-child(2) {
    transition: all .5s;
}

.item:nth-child(3),
.item:nth-child(4) {
    transition: all .5s;
}

.item img {
    height: 124px;
    margin: 30px;
}

.item .content {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
}

.content p:first-child {
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
}

.content p:last-child {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 1rem;
}

@media only screen and (max-width: 1100px) {
    .title {
        font-size: 3rem;
    }
    .content p:first-child {
        font-size: 18px;
    }
    .content p:last-child {
        font-size: .9rem;
    }
}
@media only screen and (max-width: 972px) {
    .item img {
        margin: 20px;
        height: 100px;
    }
    .content p:first-child {
        font-size: 16px;
    }
    .content p:last-child {
        font-size: .9rem;
    }
}
@media only screen and (max-width: 820px) {
    .goal {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
@media only screen and (max-width: 720px) {
    .title {
        font-size: 40px;
    }
}
</style>