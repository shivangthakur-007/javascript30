var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

async function cryptocurrency() {
  const response = await fetch("crypto.json");
  const data = await response.json();

  //   btc.innerHTML = data?.name === "bitcoin".price_usd;
  //   eth.innerHTML = data?.name === "Ethereum".price_usd;
  //   doge.innerHTML = data?.name === "Dogecoin".price_usd;

  const bitcoin = data.cryptocurrencies.find(
    (crypto) => crypto.name.toLowerCase() === "bitcoin"
  );
  const ethereum = data.cryptocurrencies.find(
    (crypto) => crypto.name.toLowerCase() === "ethereum"
  );
  const dogecoin = data.cryptocurrencies.find(
    (crypto) => crypto.name.toLowerCase() === "dogecoin"
  );

  if (bitcoin) btc.innerHTML = `${bitcoin.price_usd}`;
  if (ethereum) eth.innerHTML = `${ethereum.price_usd}`;
  if (dogecoin) doge.innerHTML = `${dogecoin.price_usd}`;
}

cryptocurrency();
