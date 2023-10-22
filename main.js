function web3() {
    if (window.ethereum) {
        window.ethereum.request({
            method: 'eth_requestAccounts'
        }).then(result => {
            console.log(result[0]);
        });
    } else {
        alert("MetaMask Missing !!");
    }
}