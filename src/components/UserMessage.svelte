<script>
    import BaseMessage from "./BaseMessage.svelte";

    export let message;
</script>

<BaseMessage {message} additionalClasses="self-end bg-mainYellow mr-4" />