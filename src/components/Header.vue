<script>
export default {
    data() {
        return {
            active: false,
        }
    },
    methods: {
        activeBar() {
            this.active = !this.active;
            if (this.active) {
                document.querySelector('.bar').style.display = "none";
                document.querySelector('.close').style.display = "block";
                document.querySelector('.header_taskbar').style.display = "inline";
            } else {
                document.querySelector('.bar').style.display = "block";
                document.querySelector('.close').style.display = "none";
                document.querySelector('.header_taskbar').style.display = "none";
            }
        }
    }
}
</script>

<template>
    <section class="container">
        <header>
            <img src="../assets/logo-brand/socialize.svg" alt="Sociable">
        </header>
        <ul v-motion :initial="{
            y: -100,
            opacity: 0
        }" :enter="{
    y: 0,
    opacity: 1
}" class="header_taskbar">
            <li>Home</li>
            <li>About Us</li>
            <li>Pages <img class="down_icon" src="../assets/down.png"></li>
            <li>Contact Us</li>
        </ul>
        <div class="header_info">
            <a href="">+00 869 748 97</a>
            <button class="btn_info">Get in touch</button>
            <button @click="activeBar" class="btn_bar">
                <img class="close" src="@/assets/close.png" alt="">
                <img class="bar" src="@/assets/bar.png" alt=""></button>
        </div>

    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 2rem;
    align-items: center;
}

.header_taskbar {
    display: flex;
    margin-bottom: 0;
    padding-left: 0;
}

.header_taskbar li {
    padding: 0 1.2rem;
    align-self: center;
}

.header_info {
    align-self: center;
}

.header_info a {
    color: black;
}

.btn_info {
    background-color: rgb(89, 86, 233);
    border: none;
    border-radius: 8px;
    width: 9.6rem;
    height: 3.4rem;
    margin-left: 1.2rem;
    color: white;
    font-weight: 500;
}

.btn_bar {
    display: none;
    background-color: rgb(46, 55, 79);
    border: none;
    border-radius: 8px;
    width: 4rem;
    height: 3.2rem;
    margin-left: 1.2rem;
    color: white;
    font-weight: 500;
    position: relative;
}

.btn_bar img {
    width: 20px;
    height: 20px;
}

.down_icon {
    width: 1.2rem;
}

@media only screen and (max-width: 972px) {
    .header_info .btn_info {
        width: 8rem;
        height: 3.2rem;
    }

    .header_info {
        display: flex;
        align-items: center;
    }

    .header_taskbar {
        z-index: 1;
        display: none;
        position: absolute;
        top: 4.2rem;
        right: 0;
        left: 0;
        background-color: rgb(238, 238, 253);
        animation: side .2s linear;
    }
    @keyframes side {
        0% {
            opacity: 0;
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .header_taskbar li {
        font-size: 18px;
        padding-bottom: 1.2rem;
    }

    .header_taskbar li:first-child {
        padding-top: 1.2rem;
    }

    .btn_bar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .close {
        display: none;
    }
}
@media only screen and (max-width: 720px) {
    .header_info a {
        display: none;
    }
}
@media only screen and (max-width: 640px) {
    .header_info .btn_info {
        display: none;
    }
}
</style>