<script>
    import Banner from '$lib/Banner.svelte';
    import { goto } from '$app/navigation';
    import { selectedLanguage } from '../stores.js';

    function start(){
        goto('/chat');
    }

</script>

<Banner/>

<main>

<div class="main-container">
    <h3>Choose the language you want to learn</h3>
    <label>
        <input type="radio" bind:group={$selectedLanguage} value="spanish">
        Spanish
    </label>
    <label>
        <input type="radio" bind:group={$selectedLanguage} value="german">
        German
    </label>
    <label>
        <input type="radio" bind:group={$selectedLanguage} value="french">
        French
    </label>
    
    <button on:click={start} disabled={$selectedLanguage === ''}>Start</button>
</div>

</main>
