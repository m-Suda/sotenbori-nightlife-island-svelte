<script lang="ts">
    import type { Cast } from 'sotenbori-nightlife-island-core';
    import CastInAnteroom from './CastInAnteroom.svelte';

    export let castsInAnteroom: Cast[];
</script>

<div class="anteroom">
    {#each castsInAnteroom as castInAnteroom}
        <div class="anteroom__cast">
            <CastInAnteroom castInAnteroom="{castInAnteroom}" />
        </div>
    {/each}
</div>

<style lang="scss">
    .anteroom {
        background-color: rgba(196, 196, 196, 0.5);
        display: flex;
        flex-direction: column;
        padding: 2rem;

        .anteroom__cast {
            margin-top: 1rem;
        }
    }
</style>
