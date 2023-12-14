<script>
    import Banner from '$lib/Banner.svelte';
    import { selectedLanguage } from '../../stores';
    import { writable } from 'svelte/store';
    import UserMessage from '../../components/UserMessage.svelte';
    import ServiceMessage from '../../components/ServiceMessage.svelte';


    // Development only
    $: {
        if ($selectedLanguage === undefined || $selectedLanguage === null || $selectedLanguage.trim() === '') {
            selectedLanguage.set('spanish');
        }
    }

    const initialMessages = [
    { role: 'service', message: '¡Buenos días y bienvenidos a nuestro restaurante!' },
    { role: 'user', message: 'Buenos días. Quisiera reservar una mesa para dos personas, por favor.' },
    { role: 'service', message: 'Por supuesto. ¿Tienen alguna preferencia de ubicación?' },
    { role: 'user', message: 'Preferiríamos una mesa cerca de la ventana.' },
    { role: 'service', message: 'Perfecto. Su mesa está lista. Por aquí, por favor.' },
    { role: 'user', message: 'Gracias. ¿Podemos ver el menú?' },
    { role: 'service', message: 'Aquí tienen el menú. Hoy recomendamos especialmente nuestro plato del día, la paella.' },
    { role: 'user', message: 'Suena delicioso. Tomaremos la paella y dos copas de vino tinto.' },
    { role: 'service', message: 'Excelente elección. ¿Algo más que les pueda ofrecer?' },
    { role: 'user', message: 'Eso es todo por ahora, gracias.' },
    { role: 'service', message: 'De acuerdo, enseguida les traigo su pedido. Que disfruten.' }
];

    const messages = writable(initialMessages);

    let newMessage = '';

    function sendMessage(){
        if (newMessage.trim() !== ''){
            const userMessage = {
                role: 'user',
                message: newMessage.trim()
            };

            messages.update(currentMessages => [...currentMessages, userMessage]);
            newMessage = '';
        }
        {console.log(JSON.stringify($messages))}
    }


    function handleKeyPress(event) {
        // Überprüfen, ob die Enter-Taste gedrückt wurde
        if (event.key === 'Enter') {
            sendMessage();
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
            <div class="flex flex-col-reverse overflow-auto h-full m-2 border">  
            {#each $messages.slice().reverse() as messageObj}
                {#if messageObj.role === 'user'}
                    <UserMessage message={messageObj.message}/>
                {:else}
                    <ServiceMessage message={messageObj.message}/>
                {/if}
            {/each}
        </div>
            <div class="flex items-center justify-end space-x-2 m-2">
                <button class="w-14 h-14 flex justify-center items-center bg-mainOrange text-white rounded-full">
                <h1 class="text-2xl">💡</h1>
                </button>
                <input 
                    type="text" 
                    bind:value={newMessage} 
                    class="flex-1 p-4 rounded bg-mainYellow no-border focus:outline-none focus:ring-2 focus:ring-mainOrange" 
                    placeholder="Your message..."
                    on:keyup={event => event.key === 'Enter' && sendMessage()}
                />
                <button 
                    class="w-20 h-14 flex justify-center items-center bg-mainYellow text-white rounded" 
                    on:click={sendMessage}>
                    <h1 class="text-2xl">🚀</h1>
                </button>
            </div>
        </div>
    </div>
</div>