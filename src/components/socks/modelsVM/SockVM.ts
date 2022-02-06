import ISocks from "../models/Sock";

export default class SocksVM {
    socks: Array<ISocks> = [];

    constructor(socks: Array<ISocks>) {
        this.socks = socks;
    }

    setSocks(id: number, color: string, image: string) {
        const sock = {
            id, color, image
        }
        this.socks.push(sock);
    }

    getSocks() {
        return this.socks;
    }
}
