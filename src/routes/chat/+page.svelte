<script>
    //import Banner from '$lib/Banner.svelte';
    import { selectedLanguage } from '../../stores';

    let greeting;
    switch ($selectedLanguage) {
        case 'Spanish':
            greeting = '¡Hola!';
            break;
        case 'German':
            greeting = 'Hallo!';
            break;
        case 'French':
            greeting = 'Bonjour!';
            break;
        default:
            greeting = 'Hello!';
    }
</script>

<h2>{greeting}</h2>