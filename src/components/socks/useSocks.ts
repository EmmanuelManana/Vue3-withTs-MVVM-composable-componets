import { ref } from "vue";
import socksDB from "./mockDB";
import ISocks from "./models/Sock";
import SocksVM from "./modelsVM/SockVM";

// let dummySocks = new SocksVM(socksDB);
let Socks = ref<SocksVM>(new SocksVM(socksDB));


export default function useSocksVM() {

    const getSocks = () => {
        return Socks.value.getSocks();
    }

    const addSock = (id: number, color: string, image:string) => {
        Socks.value.setSocks(id, color, image);
    }

    return {
        Socks,
        getSocks,
        addSock
    };
}

// "@vue/cli-plugin-eslint": "~4.5.0",
