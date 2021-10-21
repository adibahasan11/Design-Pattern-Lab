interface NetflixServer {
    loadAndDeliver(popularChannels:String): void;
}

class RealNetflixServer implements NetflixServer {
    loadAndDeliver(popularShow:String): void {
        console.log(popularShow + ' is streaming')
    }
}

class ProxyRealNetflixServer implements NetflixServer  {
    server: NetflixServer  = new RealNetflixServer()
    showList: String[] = ['you', 'squid game', 'sex education'];
    
    loadAndDeliver(popularShow:String): void {
        if (this.showList.indexOf(popularShow.toLowerCase( )) !== -1) {
            this.server.loadAndDeliver(popularShow)
        }
        else {
            console.log("Redirecting to the main Server for this show.")
        }
    }
}

let proxy: NetflixServer  = new ProxyRealNetflixServer()
proxy.loadAndDeliver('You')