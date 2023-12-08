<script>
    import Banner from '$lib/Banner.svelte';
    import { selectedLanguage } from '../../stores';

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
    }
</script>

<Banner />

<h2>{greeting}</h2>