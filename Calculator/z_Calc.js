(function (){
    const $display = document.querySelector(".inputText")
    const $btnnumber = document.querySelectorAll(".btnnumber");
    const $zero = document.querySelector(".btnzero");
    const $clear = document.querySelector(".btnclear");
    const $dot = document.querySelector(".btndot");

    const $div = document.querySelector(".btndiv");
    const $mult = document.querySelector(".btnmult");
    const $sub = document.querySelector(".btnsub");
    const $soma = document.querySelector(".btnsoma");

    const $equal = document.querySelector(".btnequal")
    /* <------------------------------------------------> */
    $clear.addEventListener("click", clearAll);
    $btnnumber.forEach((ele, i) => {
        ele.addEventListener("click", textNumber);
    })
    $zero.addEventListener("click", textNumber);
    $dot.addEventListener("click", Point);
    $equal.addEventListener("click", Calc);
    
    function textNumber(){
        let n = this.value;
        $display.value += n;
    };

    function selectOperators(){
        $div.addEventListener("click", slt => {
            $display.value += slt.target.value;
        });
        $mult.addEventListener("click", slt => {
            $display.value += slt.target.value;
        });
        $sub.addEventListener("click", slt => {
            $display.value += slt.target.value;
        });
        $soma.addEventListener("click", slt => {
            $display.value += slt.target.value;
        })
    };
    selectOperators();
    
    function Calc(){
        $display.value = eval($display.value)
    };

    function clearAll(){
        $display.value = "";
    };

    function Point(){
        $display.value += this.value;
    };

})();
