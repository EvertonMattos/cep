const cep = document.querySelector("#cep");

const ShowData = (results) => {
  for (const camp in results) {
    if (document.querySelector(`#${camp}`)) {
      document.querySelector(`#${camp}`).value = results[camp];
    }
  }
};
cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");

  const userData = fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then((response) => response.json())
    .then((data) => ShowData(data));
});
