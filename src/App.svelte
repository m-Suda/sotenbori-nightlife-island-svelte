<script lang="ts">
    import Anteroom from './modules/anteroom/Anteroom.svelte';
    import { Cast } from 'sotenbori-nightlife-island-core';
    import { CAST_RANK } from 'sotenbori-nightlife-island-core';

    // TODO: Functionに切り出す
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
            'Fuga',
            {
                name: CAST_RANK.GOLD.name,
                cost: CAST_RANK.GOLD.cost,
            },
            1000,
            { Sexy: 10, Cute: 10, Beauty: 10, Funny: 10 },
            { Talk: 10, Party: 10, Love: 10, Skill: 10 }
        ),
    ];
</script>

<main class="main">
    <section class="anteroom">
        <Anteroom castsInAnteroom="{casts}" />
    </section>
    <section class="game-main"></section>
</main>

<style lang="scss">
    .main {
        display: flex;

        .anteroom {
            width: 30%;
        }

        .game-main {
            width: 70%;
        }
    }
</style>
