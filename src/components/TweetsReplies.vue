<template>
   <div class="AllPosts">
        <TweetPost />
        <TweetPost />
        <TweetPost />
        
    </div>
</template>

<script>
import TweetPost from "@/components/TweetPost.vue";

export default {
    name: 'TweetsReplies',
    components: {
        TweetPost
    }
}
</script>