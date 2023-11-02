const submit = document.querySelector("#button");
let i = 0;
const quote_container = document.querySelector("#quote-container");

submit.addEventListener(
  "click",
  function () {
    i++;

    fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
  
        console.log(data)
        if(i<16){quote_container.innerHTML = data[i].text;}
        else i=0
      });
  },
  false
);
