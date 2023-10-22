<template>
    <main>
        <section class="container">
            <div class="footer_socials">
                <div class="footer_background">
                    <img class="happy_social" src="../assets/peoples/64f8073778e4e8562287354f_insta-post.webp" alt="">
                    <img class="decoration i50" src="@/assets/decoration-01.png" alt="">
                    <img class="decoration i50" src="@/assets/logo-brand/whatsup.png" alt="">
                    <img class="decoration i50" src="@/assets/logo-brand/linkedin.png" alt="">
                </div>
                <div class="footer_main">
                    <img class="light_social" src="@/assets/logo-brand/light-socialize.svg" alt="">
                    <p>Stay updated on our latest news, offers, and industry insights by following us on social media. 
                        Join our community and be part of the conversation.
                    </p>
                    <div class="socials">
                        <img src="@/assets/logo-brand/facebook.png" alt="">
                        <img src="@/assets/logo-brand/instagram.png" alt="">
                        <img src="@/assets/logo-brand/linkedin.png" alt="">
                        <img src="@/assets/logo-brand/twitter.png" alt="">
                    </div>
                    <div class="pages_info">
                        <div class="footer-col1">
                            <h1>Pages</h1>
                            <div class="pages">
                                <div class="column-1">
                                    <a href="">Home</a>
                                    <a href="">Home 2</a>
                                    <a href="">About Us</a>
                                    <a href="">Case Study</a>
                                    <a href="">Services</a>
                                </div>
                                <div class="column-2">
                                    <a href="">Service Details</a>
                                    <a href="">Blog</a>
                                    <a href="">Careers</a>
                                    <a href="">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-col2">
                            <h1>Utility Pages</h1>
                            <div class="utility_pages">
                                <div class="column-1">
                                    <a href="">Style Guide</a>
                                    <a href="">Instructions</a>
                                    <a href="">Licenses</a>
                                    <a href="">Changelog</a>
                                    <a href="">Coming Soon</a>
                                </div>
                                <div class="column-2">
                                    <a href="">Link In Bio</a>
                                    <a href="">Error 404</a>
                                    <a href="">Password Protected</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="more_footer d-flex flex-wrap justify-content-between align-items-center my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                <span class="">Designed by <a href="">Toanle</a></span>
                </div>

                <div class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <span>Powered by <a href="">Toanle</a></span>
                </div>
            </footer>
        </section>
    </main>
</template>

<style scoped >
main {
    background-color: #2e374f;
}

.footer_background {
    position: relative;
}
.footer_background .decoration {
    position: absolute;
}
.decoration:nth-child(2) {
    top: -2rem;
    left: 0rem;
    animation: move1 25s linear infinite;
}
.decoration:nth-child(3) {
    top: 6rem;
    right: -.5rem;
    animation: move2 25s linear infinite;
}
.decoration:nth-child(4) {
    bottom: 4rem;
    left: 40%;
    animation: move1 25s linear infinite;
}
@keyframes move1 {
0%,
100% {
    transform: translate(10px, -20px)
}
50% {
    transform: translate(-40px, 40px);
}
}
@keyframes move2 {
0%,
100% {
    transform: translate(-20px, 60px)
}
50% {
    transform: translate(10px, -20px);
}
}

.footer_socials {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-top: 3.75rem;
}

.footer_main {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 3.75rem;
}
.footer_main p {
    color: white;
    text-align: start;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
}

.happy_social {
    width: 16rem;
    border-radius: 10px;
}

.light_social {
    float: left;
}

.socials img {
    width: 30px;
    margin-right: 1.25rem;
    margin-bottom: 2.5rem;
}

.footer-col2 {
    margin-left: 3rem;
}

.pages_info {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
}
.pages_info h1 {
    text-align: left;
    color: white;
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

.pages_info a {
    text-decoration: none;
    margin-bottom: 1rem;
    color: white;
    text-align: left;
}

.pages,
.utility_pages {
    display: grid;
    justify-content: end;
}
.pages{
    grid-template-columns: 1fr 1fr;
}
.utility_pages {
    grid-template-columns: 1fr .6fr;
}
.column-1,
.column-2 {
    display: flex;
    flex-direction: column;
    margin-right: auto;
}

.more_footer {
    border-top: 1px #a5a5a533 solid !important;
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    margin-bottom: 0 !important;
}
.more_footer span {
    margin-left: 0;
    color: white;
}

@media only screen and (max-width: 1340px) {
    .footer_main p {
        font-size: 14px;
    }
    .pages_info a {
        font-size: 14px;
    }
}

@media only screen and (max-width: 1200px) {
    .utility_pages,
    .pages {
        grid-template-columns: 1fr 1fr;
    }
}
@media only screen and (max-width: 1100px) {
    .pages_info {
        grid-template-columns: none;
    }
    .footer-col2 {
        margin-left: 0;
        margin-top: 2rem;
    }
    .footer_background {
        top: 20%;
    }
    .decoration:nth-child(4) {
        top: 48%;
    }
}

@media only screen and (max-width: 640px) {
    .footer_socials {
        grid-template-columns: 1fr;
    }
    .footer_background {
        top: 0;
    }
    .happy_social {
        width: 24rem;
    }
    .decoration:nth-child(2) {
        top: 0;
        left: 3rem;
    }
    .decoration:nth-child(3) {
        top: 6rem;
        right: 3rem;
    }
    .decoration:nth-child(4) {
        left: 6rem;
        top: 54%;
    }
    .footer_main {
        margin-top: 3rem;
        margin-left: 0;
    }
    .pages_info {
        grid-template-columns: 1fr;
    }
}
</style>