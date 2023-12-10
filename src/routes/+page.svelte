<script>
    import Banner from '$lib/Banner.svelte';
    import { goto } from '$app/navigation';
    import { selectedLanguage } from '../stores.js';

    const languages = [
        { name: 'Spanish', flag: '🇪🇸' },
        { name: 'French', flag: '🇫🇷' },
        { name: 'German', flag: '🇩🇪' }
    ]

    function start(){
        goto('/chat');
    }

</script>

<Banner/>


<main class="mx-auto max-w-2xl px-4 min-h-[80vh] flex items-center"> 
    <div class="bg-mainYellow p-8 shadow-2xl rounded-xl w-full">
    <h3 class="text-2xl md:text-3xl mb-6 text-center">Choose the language you want to learn 💬</h3>
    
    <div class="flex flex-col w-1/2 md:w-1/4 mx-auto">
       {#each languages as language}
        <label class="flex items-center my-2">
            <input type="radio" bind:group={$selectedLanguage} value={language.name} class="">
            <span class="ml-2 text-l md:text-xl font-bold">{language.name} {language.flag}</span>
        </label>
        {/each}
    </div>

    
    <div class="flex justify-center mt-6">
        <button class="bg-mainOrange text-yellow-100 uppercase py-4 px-12 text-xl font-bold" on:click={start} disabled={$selectedLanguage === ''}>Start</button>
    </div>

    
</div>

</main>

<footer>
</footer>

