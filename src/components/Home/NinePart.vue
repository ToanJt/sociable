<template>
    <section class="space-components">
        <img class="i50 decoration" src="@/assets/nine-part/decoration-01.png" alt="">
        <img class="i60 emoji" src="@/assets/nine-part/emoji-01.png" alt="">
        <div v-motion :initial="{
            opacity: 0,
            y: 100
        }" :visibleOnce="{
    opacity: 1,
    y: 0
}" class="title">
            <div class="sub-title">
                <img class="i20" src="@/assets/smile.png" alt="">
                <p class="hl-text">Blog & news</p>
            </div>
            <h1 class="big-title">Lastest blog</h1>
        </div>
        <div v-motion :initial="{
            y: 100,
            opacity: 0
        }" :visibleOnce="{
    y: 0,
    opacity: 1
}" class="blogs">
            <div class="main_blog">
                <div class="image">
                    <img class="blog_img" src="@/assets/nine-part/blog-01.jpg" alt="">
                </div>
                <p class="blog_text">How to create stunning graphics for social media</p>
                <div class="info">
                    <div class="date">
                        <img src="@/assets/nine-part/date.svg" alt="">
                        <p>September 2, 2023</p>
                    </div>
                    <div class="category">
                        <img src="@/assets/nine-part/category.svg" alt="">
                        <p>Content Strategy</p>
                    </div>
                </div>
            </div>
            <div v-motion :initial="{
                y: 100,
                opacity: 0
            }" :visibleOnce="{
    y: 0,
    opacity: 1
}" class="sub_blog">
                <div class="blog">
                    <div class="image_box">
                        <img class="blog_img" src="@/assets/nine-part/blog-02.jpg" alt="">
                    </div>
                    <div class="blog_info">
                        <p class="blog_text">Tips for professionals and entrepreneurs</p>
                        <div class="info">
                            <div class="date">
                                <img src="@/assets/nine-part/date.svg" alt="">
                                <p>September 3, 2023</p>
                            </div>
                            <div class="category">
                                <img src="@/assets/nine-part/category.svg" alt="">
                                <p>Social</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog">
                    <div class="image_box">
                        <img class="blog_img" src="@/assets/nine-part/blog-03.jpg" alt="">
                    </div>
                    <div class="blog_info">
                        <p class="blog_text">How to optimize your campaigns for success</p>
                        <div class="info">
                            <div class="date">
                                <img src="@/assets/nine-part/date.svg" alt="">
                                <p>September 3, 2023</p>
                            </div>
                            <div class="category">
                                <img src="@/assets/nine-part/category.svg" alt="">
                                <p>Advertising</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog">
                    <div class="image_box">
                        <img class="blog_img" src="@/assets/nine-part/blog-04.jpg" alt="">
                    </div>
                    <div class="blog_info">
                        <p class="blog_text">A guide to captivating your audience</p>
                        <div class="info">
                            <div class="date">
                                <img src="@/assets/nine-part/date.svg" alt="">
                                <p>September 5, 2023</p>
                            </div>
                            <div class="category">
                                <img src="@/assets/nine-part/category.svg" alt="">
                                <p>Promotion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    position: relative;
}

.blogs {
    transition: linear .5s;
}

.sub_blog {
    transition: linear .2s;
}

.emoji {
    position: absolute;
    bottom: 8rem;
    right: 0;
    animation: move2 25s linear infinite;
}

@keyframes move2 {

    0%,
    100% {
        transform: translate(-40px, 60px)
    }

    50% {
        transform: translate(10px, -20px);
    }
}

.blogs {
    display: flex;
}

.image {
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
}

.image:hover>.blog_img {
    cursor: pointer;
    transform: scale3d(1.1, 1.1, 1);
    border-radius: 10px;
    transition: linear .3s;
}

.main_blog:hover>p {
    color: rgb(89, 86, 233);
    scale: (1.1, 1.1, 1);
}

.blogs .main_blog {
    flex: 1;
    position: relative;
}

.decoration {
    position: absolute;
    flex: 1;
    top: 8rem;
    left: 4rem;
    z-index: 9;
    animation: move1 25s linear infinite;
}

@keyframes move1 {

    0%,
    100% {
        transform: translate(10px, -20px)
    }

    50% {
        transform: translate(-40px, 60px);
    }
}

.main_blog .info {
    display: flex;
    justify-content: space-between;
}

.main_blog>p {
    margin-top: 1rem;
    margin-bottom: .8rem;
}

.info div {
    display: flex;
    align-items: center;
}

.info div p {
    margin-bottom: 0;
    margin-left: .5rem;
}

.blog_img {
    border-radius: 10px;
    transition: linear .3s;
}

.blog_text {
    font-size: 24px;
    font-weight: 600;
    font-family: 'Montserrat';
    text-align: left;
}

.blogs .sub_blog {
    flex: 1;
}

.sub_blog .blog {
    display: flex;
    margin-left: 2rem;
    margin-bottom: 2rem;
}

.blog:hover .blog_text {
    color: rgb(89, 86, 233)
}

.image_box {
    max-width: 207.28px;
    max-height: 9.25rem;
    overflow: hidden;
    border-radius: 10px;
}

.blog_img {
    height: 100%;
    transform: scale3d(1, 1, 1);
}

.blog:hover .blog_img {
    transform: scale3d(1.1, 1.1, 1);
}

.blog>img {
    height: 9.25rem;
}

.blog .blog_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.blog .blog_info>p,
.blog .blog_info .info {
    margin-left: 1rem;
}

.blog .blog_info .info {
    display: flex;
}

.blog_info .info .date {
    margin-right: 3rem;
}


.sub-title {
    display: flex;
    align-items: center;
    justify-content: start;
}

.sub-title p {
    font-weight: 700;
    margin-bottom: 0;
    margin-left: .3rem;
}

.title {
    max-width: 600;
    display: flex;
    flex-direction: column;
    align-items: start;
    transition: linear .3s;
}

.title h1 {
    text-align: left;
    margin-top: 1rem;
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 4rem;
    max-width: 900px;
    color: #2c3e50;
}

@media only screen and (max-width: 1200px) {
    .sub_blog .blog {
        margin: 0;
        margin-bottom: 1rem;
    }

    .image_box {
        max-height: 6rem;
        max-width: 180px;
    }

    .image_box img {
        height: 100%;
    }

    .blog .blog_info {
        margin-left: -1rem;
    }

    .blog .blog_info .blog_text {
        font-size: 20px;
        margin-left: 1rem;
        margin-bottom: .5rem;
    }

    .blog_info .info {
        font-size: 12px;
        text-align: left;
    }

    .blog_info .info .date {
        margin-right: 1rem;
    }

    .date img {
        width: 18px;
    }

    .category img {
        width: 18px;
    }
}

@media only screen and (max-width: 1200px) {
    .blogs {
        flex-direction: column;
    }

    .blogs .main_blog {
        margin-bottom: 4rem;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .info div {
        margin-right: 6rem;
    }
    .image_box {
        max-height: 11rem;
    max-width: 273px;
    margin-right: 2rem;
    }
    .image_box img {
        width: 273px;
        height: 11rem;
    }
    .blog .blog_info {
        justify-content: start;
    }
    .date img {
        width: 18px;
    }

    .category img {
        width: 18px;
    }
    .info div p {
        font-size: 16px;
    }
    .emoji {
        right: 8rem;
    }
}

@media only screen and (max-width: 972px) {
    .title h1 {
        font-size: 3rem;
    }
    
}</style>