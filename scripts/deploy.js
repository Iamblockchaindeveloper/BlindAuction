async function main() {
    const BlindAuction = await ethers.getContractFactory("BlindAuction")

    // Start deployment, returning a promise that resolves to a contract object
    const blindAuction = await BlindAuction.deploy(1662141600,1662141900, "0xCD87bB3476A4CDcc089A464989b963E76441d18c")
    await blindAuction.deployed()
    console.log("Contract deployed to address:", blindAuction.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })