<template>
    <div>
        <h1>{{ "pair count " + getSocks().length }}</h1>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import useSocksVM from "../socks/useSocks";

export default defineComponent({
    name: "Header",
    setup() {
        const { getSocks } = useSocksVM();

        return {
            getSocks
        }
    }
})
</script>

<style>
</style>