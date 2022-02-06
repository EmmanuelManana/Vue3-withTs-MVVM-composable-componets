<template>
    <div class="socks-container">
        <div class="socks-container-left">
            <div class="sock" v-for="(sock, index) in getSocks()" :key="index">
                <img :src="sock.image" />
                <h2>{{ sock.color + " socks" }}</h2>
            </div>
        </div>
        <button v-on:click="addNewSock()">Add 1</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useSocks from "./useSocks"

export default defineComponent({
    name: "Socks",
    setup() {
        const { getSocks, addSock } = useSocks();

        console.log("Socks: ", getSocks())

        const addNewSock = () => {
            addSock(932, "pink", "https://simplicity.co.za/22409-large_default/brt-team-sock-pink-sock6-8.jpg")
        }

        const msg: string = "Hellow vue";
        return {
            msg,
            getSocks,
            addNewSock
        };
    },
});
</script>

<style scoped>
.socks-container-left {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.socks-container button {
    background: green;
    color: blue;
    width: 100px;
    height: 50px;
}

.sock {
    border: solid grey 2px;
    min-width: 400px;
    min-height: 350px;
}

.sock img {
    max-width: 200px;
    max-height: 150px;
}
</style>
