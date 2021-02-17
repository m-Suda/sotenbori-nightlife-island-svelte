<script lang="ts">
    import type { Cast } from 'sotenbori-nightlife-island-core';
    import CastInAnteroom from './CastInAnteroom.svelte';

    export let castsInAnteroom: Cast[];
</script>

<ul class="anteroom">
    {#each castsInAnteroom as castInAnteroom}
        <li class="anteroom__cast">
            <CastInAnteroom />
        </li>
    {/each}
</ul>

<style lang="scss">
    .anteroom {
        height: 100%;
        background-color: rgba(196, 196, 196, 0.5);
        display: flex;
        flex-direction: column;

        .anteroom__cast:not(:first-of-type) {
            margin-top: 1rem;
        }
    }
</style>
