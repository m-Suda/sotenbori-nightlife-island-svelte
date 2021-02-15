<script lang="ts">
    import Anteroom from './components/anteroom/Anteroom.svelte';
    import { Cast } from 'sotenbori-nightlife-island-core';
    import { CAST_RANK } from 'sotenbori-nightlife-island-core';

    const casts: Cast[] = [
        new Cast(
            'Hoge',
            {
                name: CAST_RANK.PLATINUM.name,
                cost: CAST_RANK.PLATINUM.cost,
            },
            1000,
            { Sexy: 10, Cute: 10, Beauty: 10, Funny: 10 },
            { Talk: 10, Party: 10, Love: 10, Skill: 10 }
        ),
        new Cast(
            'Hoge',
            {
                name: CAST_RANK.PLATINUM.name,
                cost: CAST_RANK.PLATINUM.cost,
            },
            1000,
            { Sexy: 10, Cute: 10, Beauty: 10, Funny: 10 },
            { Talk: 10, Party: 10, Love: 10, Skill: 10 }
        ),
    ];
</script>

<main>
    <Anteroom castsInAnteroom="{casts}" />
</main>

<style lang="scss">
</style>
