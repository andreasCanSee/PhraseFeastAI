<script>
    export let message;
    export let additionalClasses = '';
</script>

<div class={`mb-4 p-6 mx-4 rounded ${additionalClasses}`}>
    <p>{message}</p>
</div>