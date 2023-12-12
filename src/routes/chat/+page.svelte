<script>
    import Banner from '$lib/Banner.svelte';
    import { selectedLanguage } from '../../stores';
    import { writable } from 'svelte/store';

    const messages = writable([]);

    let newMessage = '';

    function sendMessage(){
        if (newMessage.trim() !== ''){
            if(newMessage.trim() !== ''){
                messages.update(currentMesages => [...currentMesages, newMessage]);
                newMessage = '';
            }
        }
    }

/*
    let greeting;
    switch ($selectedLanguage) {
        case 'spanish':
            greeting = '¡Hola!';
            break;
        case 'german':
            greeting = 'Hallo!';
            break;
        case 'french':
            greeting = 'Bonjour!';
            break;
        default:
            greeting = 'Hello!';
    }*/
</script>

<div class="flex flex-col h-screen justify-between">
<Banner/>


<div class="relative flex flex-1 justify-center items-center">
        <img src="./{$selectedLanguage}-ambience.png" class="w-5/6 md:w-2/3 border-8 border-white"/>

        <div class="absolute bg-black bg-opacity-50 w-1/2 h-4/5 flex flex-col justify-end p-4 rounded-xl">
            <div class="flex flex-col-reverse overflow-auto h-full  m-2 border">  
            {#each $messages.slice().reverse() as message}
            <div class="mb-4 self-end bg-mainYellow p-10 rounded">
                <p>{message}</p>
            </div>
            {/each}
        </div>
            
            <div class="flex items-center justify-end space-x-2 m-2">
                <button class="w-12 h-12 flex justify-center items-center bg-mainOrange text-white rounded-full">
                <h1 class="text-2xl">💡</h1>
                </button>
                <input type="text" bind:value={newMessage} class="flex-1 p-4 rounded bg-mainYellow no-border focus:outline-none focus:ring-2 focus:ring-mainOrange" placeholder="Your message..."/>
                <button class="w-20 h-14 flex justify-center items-center bg-mainOrange text-white rounded" on:click={sendMessage}>
                    <h1 class="text-2xl">🚀</h1>
                    </button>
            </div>
        </div>
    </div>
</div>

<style>

    .scroll{
        height: 100%; 
    overflow-y: scroll; /* adds scrollbar */

    }
</style>