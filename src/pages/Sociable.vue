<script>
import Header from "@/components/Header.vue"
import HomeFirstPart from "@/components/Home/FirstPart.vue"
import HomeSecondPart from "@/components/Home/SecondPart.vue"
import HomeThirdPart from "@/components/Home/ThirdPart.vue"
import HomePartFour from "@/components/Home/PartFour.vue"
import HomeFifthPart from "@/components/Home/FifthPart.vue"
import HomePartSix from "@/components/Home/PartSix.vue"
import HomeSevenPart from "@/components/Home/SevenPart.vue"
import HomePartEight from "@/components/Home/PartEight.vue"
import HomeNinePart from "@/components/Home/NinePart.vue"
import Footer from "@/components/Footer.vue"

export default {
    components: {
        Header,
        HomeFirstPart,
        HomeSecondPart,
        HomeThirdPart,
        HomePartFour,
        HomeFifthPart,
        HomePartSix,
        HomeSevenPart,
        HomePartEight,
        HomeNinePart,
        Footer
    },
}

</script>

<template>
    <div>
        <Header />
        <main>
            <HomeFirstPart class="container" />
            <HomeSecondPart class="container" />
            <HomeThirdPart class="container" />
            <HomePartFour class="container" />
            <HomeFifthPart />
            <HomePartSix class="container" />
            <HomeSevenPart />
            <HomePartEight class="container"/>
            <HomeNinePart class="container"/>
        </main>
        <Footer />
    </div>
</template>

