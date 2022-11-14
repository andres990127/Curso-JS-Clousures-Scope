function moneyBox(){
    let saveCoins = 0;
    return (coins) => {
        saveCoins += coins;
        console.log('MoneyBox: $'+ saveCoins);
    }
}

let mySave = moneyBox();
mySave(5);
mySave(10);
