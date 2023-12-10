<script>
    import Banner from '$lib/Banner.svelte';
    import { goto } from '$app/navigation';
    import { selectedLanguage } from '../stores.js';

    function start(){
        goto('/chat');
    }

</script>

<!--Banner/-->

<div class="flex justify-center items-center bg-orange-300 text-mainBrown p-6 shadow-xl">
    <h1 class="text-6xl font-bold">PhraseFeast</h1>
    <img src="/icon.png" alt="" class="w-24 h-auto ml-4">
</div>

<main class="flex justify-center items-center h-full">

<div class="bg-mainYellow p-14 max-w-4xl mx-auto shadow-2xl rounded-xl">
    <h3 class="text-2xl mb-6 text-mainBrown">Choose the language you want to learn 💬</h3>
    <div class="flex flex-col gap-y-4 border text-mainBrown">
        <label>
            <input type="radio" bind:group={$selectedLanguage} value="spanish">
            Spanish 🇪🇸
        </label>
        <label>
            <input type="radio" bind:group={$selectedLanguage} value="french">
            French 🇫🇷
        </label>
        <label>
            <input type="radio" bind:group={$selectedLanguage} value="german">
            German 🇩🇪
        </label>
    </div>
    
    <button class="" on:click={start} disabled={$selectedLanguage === ''}>Start</button>
</div>

</main>
