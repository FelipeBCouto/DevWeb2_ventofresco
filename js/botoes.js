new Vue({
    el: "main",
    methods: {
      Confirmar() {
          alert("Operação bem-sucedida!");
        window.open("../index.html", "_self");
      },
      VoltarDash(){
          window.open("./dashboard.html", "_self")
      },
    },
  });