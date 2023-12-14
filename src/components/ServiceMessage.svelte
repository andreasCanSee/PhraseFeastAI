<script>
    import BaseMessage from "./BaseMessage.svelte";

    export let message;
</script>

<BaseMessage {message} additionalClasses="self-start bg-mainOrange" />
