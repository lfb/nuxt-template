<template>
    <div v-if="errData" class="err-wrap">
        <div class="err-img">
            <img :src="errData.img" alt="homary" />
        </div>
        <div class="title">
            {{ errData.title }}
        </div>
        <div class="sub_title">
            {{ errData.sub_title }}
            <br />
        </div>
        <div v-if="error" class="stackoverflow">
            {{ JSON.stringify(error) }}
        </div>
        <div v-if="!errData.isProduct" class="tips_text">
            {{ errData.tips_text }}
        </div>
        <a href="/" class="btn_text">
            {{ errData.btn_text }}
        </a>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            list: {
                401: {
                    img: 'https://img5.su-cdn.com/common/2021/03/17/a3e1e95537a800498be6563277c0fb87.png',
                    title: 'Uh Oh!',
                    sub_title: 'No authorization found',
                    tips_text: 'This page is not publicly available.',
                    btn_text: 'Return Home',
                },
                404: {
                    img: 'https://img5.su-cdn.com/common/2021/03/17/c89d558c15aab68caa40df532c63d7c9.png',
                    title: 'Uh Oh!',
                    sub_title: `The page you are looking for doesn't exist.`,
                    tips_text:
                        'You might have typed in a wrong address or the page has moved.',
                    btn_text: 'Return Home',
                },
                500: {
                    img: 'https://img5.su-cdn.com/common/2021/03/17/3bb3f42b76689b95647502612d531aaa.png',
                    title: 'Uh Oh!',
                    sub_title: `Oops! There was internal server error.`,
                    tips_text:
                        "Don't worry, our development team are working hard to fix the problem. Please try again later.",
                    btn_text: 'Return Home',
                },
            },
            countdown: 10,
            countdownTimer: undefined,
        }
    },
    computed: {
        ...mapState({
            htmlLangAttrs: (state) => state.common.htmlLangAttrs,
        }),
    },
    mounted() {
        console.error('stackoverflow: ', this.error)
    },
}
</script>
<style lang="scss" scoped></style>
