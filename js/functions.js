
function myFunction() {

  var size, text, x;


  // Get the value of the input field with id="rows" and id="columns"
  size = document.getElementById("size").value;
  document.getElementById("size").value = "";


  if (size === ""){
    alert('You did not enter a size of matrix');
  }

  if (isNaN(size)){
    alert('You must input integer only!');
  }

  //Creating of matrix
let two = document.getElementsByClassName("two-by-two_matrix");
  let three = document.getElementsByClassName("three-by-three_matrix");
    let four = document.getElementsByClassName("four-by-four_matrix");

    let two_cell = document.getElementsByClassName("two-by-two_matrix_cell");
    let three_cell = document.getElementsByClassName("three-by-three_matrix_cell");
    let four_cell = document.getElementsByClassName("four-by-four_matrix_cell");




  if (size == 2){
      four[0].style.display = "none";
      three[0].style.display = "none";
      two[0].style.display = "block";
      three_cell[0].style.display = "none";
      four_cell[0].style.display = "none";
      document.getElementById('result').innerHTML = "";
      document.getElementById('result_a').innerHTML = "";
      document.getElementById('result_b').innerHTML = "";
      document.getElementById('result_c').innerHTML = "";
      document.getElementById('result_d').innerHTML = "";

  } else if (size == 3){
      four[0].style.display = "none";
      two[0].style.display = "none";
      three[0].style.display = "block";
      two_cell[0].style.display = "none";
      four_cell[0].style.display = "none";
      document.getElementById('result').innerHTML = "";
      document.getElementById('result_a').innerHTML = "";
      document.getElementById('result_b').innerHTML = "";
      document.getElementById('result_c').innerHTML = "";
      document.getElementById('result_d').innerHTML = "";

  }


  else if (size == 4){
      three[0].style.display = "none";
      two[0].style.display = "none";
      four[0].style.display = "block";
      two_cell[0].style.display = "none";
      three_cell[0].style.display = "none";
      document.getElementById('result').innerHTML = "";
      document.getElementById('result_a').innerHTML = "";
      document.getElementById('result_b').innerHTML = "";
      document.getElementById('result_c').innerHTML = "";
      document.getElementById('result_d').innerHTML = "";
  }

}


function twoByTwo(){
  let zero_zero, zero_one, one_zero, one_one;
  let check = true;

  zero_zero = document.getElementById("zero_zero").value;
  zero_one = document.getElementById("zero_one").value;
  one_zero = document.getElementById("one_zero").value;
  one_one = document.getElementById("one_one").value;

  document.getElementById("zero_zero").value = "";
  document.getElementById("zero_one").value = "";
  document.getElementById("one_zero").value = "";
  document.getElementById("one_one").value = "";

  if (isNaN(zero_zero) || isNaN(zero_one) || isNaN(one_zero) || isNaN(one_one)){
      alert('You must input integer only!');
      check = false;
  }

  if (zero_zero === "" || zero_one === "" || one_zero === "" || one_one === ""){
    alert('You did not enter all element! Try again');
    check = false;
  }



  let result = zero_zero * one_one - one_zero * zero_one;


  if (check){
    let two = document.getElementsByClassName("two-by-two_matrix_cell");
    two[0].style.display = "block";
    document.getElementById('cell_zero_zero').innerHTML = zero_zero;
    document.getElementById('cell_zero_one').innerHTML = zero_one;
    document.getElementById('cell_one_zero').innerHTML = one_zero;
    document.getElementById('cell_one_one').innerHTML = one_one;
    document.getElementById('result_cell').innerHTML = result;
  }

  //  let zero_zero, zero_one, one_zero, one_one;
  let zero_z_out;
  let one_o_out;
  let one_z_out;
  let zero_o_out;
  if (zero_zero < 0){
    zero_z_out = `(${zero_zero})`;
  } else {
    zero_z_out = zero_zero;
  }
  if (zero_one < 0){
    zero_o_out = `(${zero_one})`;
  } else {
    zero_o_out = zero_one;
  }
  if (one_zero < 0){
    one_z_out = `(${one_zero})`;
  } else {
    one_z_out = one_zero;
  }
  if (one_one < 0){
    one_o_out = `(${one_one})`;
  } else {
    one_o_out = one_one;
  }

  let out = `W = (0, 0) &sdot; (1, 1) &minus; (1, 0) &sdot; (0, 1) = ${zero_z_out} &sdot; ${one_o_out} &minus; ${one_z_out} &sdot; ${zero_o_out} = ${result}`;

  if (check){
  document.getElementById('result').innerHTML = out;
 }

}


function threeByThree(){
  let zero_zero, zero_one, zero_two, one_zero, one_one, one_two, two_zero, two_one, two_two;
  let check = true;

  zero_zero = document.getElementById("t_zero_zero").value;
  zero_one = document.getElementById("t_zero_one").value;
  zero_two = document.getElementById("t_zero_two").value;

  one_zero = document.getElementById("t_one_zero").value;
  one_one = document.getElementById("t_one_one").value;
  one_two = document.getElementById("t_one_two").value;

  two_zero = document.getElementById("t_two_zero").value;
  two_one = document.getElementById("t_two_one").value;
  two_two = document.getElementById("t_two_two").value;

  document.getElementById("t_zero_zero").value = "";
  document.getElementById("t_zero_one").value = "";
  document.getElementById("t_zero_two").value = "";

  document.getElementById("t_one_zero").value = "";
  document.getElementById("t_one_one").value = "";
  document.getElementById("t_one_two").value = "";

  document.getElementById("t_two_zero").value = "";
  document.getElementById("t_two_one").value = "";
  document.getElementById("t_two_two").value = "";


  if (isNaN(zero_zero) || isNaN(zero_one) || isNaN(zero_two) || isNaN(one_zero) || isNaN(one_one) || isNaN(one_two) || isNaN(two_zero) || isNaN(two_one) || isNaN(two_two)){
      alert('You must input integer only!');
      check = false;
  }

  if (zero_zero === "" || zero_one === "" || zero_two === "" || one_zero === "" || one_one === "" || one_two === "" || two_zero === "" || two_one === "" || two_two === ""){
    alert('You did not enter all element! Try again');
    check = false;
  }

  //let zero_zero, zero_one, zero_two, one_zero, one_one, one_two, two_zero, two_one, two_two ;
  let result = zero_zero * one_one * two_two + one_zero * two_one * two_two +
  two_zero * zero_one * one_two - two_zero * one_one * zero_two -
  one_zero * zero_one * two_two - zero_zero * two_one * one_two;

  if (check){
    let three = document.getElementsByClassName("three-by-three_matrix_cell");
    three[0].style.display = "block";
    document.getElementById('t_cell_zero_zero').innerHTML = zero_zero;
    document.getElementById('t_cell_zero_one').innerHTML = zero_one;
    document.getElementById('t_cell_zero_two').innerHTML = zero_two;
    document.getElementById('t_cell_one_zero').innerHTML = one_zero;
    document.getElementById('t_cell_one_one').innerHTML = one_one;
    document.getElementById('t_cell_one_two').innerHTML = one_two;
    document.getElementById('t_cell_two_zero').innerHTML = two_zero;
    document.getElementById('t_cell_two_one').innerHTML = two_one;
    document.getElementById('t_cell_two_two').innerHTML = two_two;
    document.getElementById('t_result').innerHTML = result;
  }


  let first = zero_zero * one_one * two_two;
  let second = one_zero * two_one * two_two;
  let third = two_zero * zero_one * one_two;

  let fourth = two_zero * one_one * zero_two;
  let fifth = one_zero * zero_one * two_two;
  let sixth = zero_zero * two_one * one_two;



  let first_out;
  let second_out;
  let third_out;

  let fourth_out;
  let fifth_out;
  let sixth_out;




  if (first < 0){
    first_out = `(${first})`;
  } else {
    first_out = first;
  }
  if (second < 0){
    second_out = `(${second})`;
  } else {
    second_out = second;
  }
  if (third < 0){
    third_out = `(${third})`;
  } else {
    third_out = third;
  }



  if (fourth < 0){
    fourth_out = `(${fourth})`;
  } else {
    fourth_out = fourth;
  }
  if (fifth < 0){
    fifth_out = `(${fifth})`;
  } else {
    fifth_out = fifth;
  }
  if (sixth < 0){
    sixth_out = `(${sixth})`;
  } else {
    sixth_out = sixth;
  }

/////////////////////////////////////////////////////////////////
  console.log(result);

  let zero_z_out;
  let zero_o_out;
  let zero_t_out;

  let one_z_out;
  let one_o_out;
  let one_t_out;

  let two_z_out;
  let two_o_out;
  let two_t_out;


  if (zero_zero < 0){
    zero_z_out = `(${zero_zero})`;
  } else {
    zero_z_out = zero_zero;
  }
  if (zero_one < 0){
    zero_o_out = `(${zero_one})`;
  } else {
    zero_o_out = zero_one;
  }
  if (zero_two < 0){
    zero_t_out = `(${zero_two})`;
  } else {
    zero_t_out = zero_two;
  }


  if (one_zero < 0){
    one_z_out = `(${one_zero})`;
  } else {
    one_z_out = one_zero;
  }
  if (one_one < 0){
    one_o_out = `(${one_one})`;
  } else {
    one_o_out = one_one;
  }
  if (one_two < 0){
    one_t_out = `(${one_two})`;
  } else {
    one_t_out = one_two;
  }

  if (two_zero < 0){
    two_z_out = `(${two_zero})`;
  } else {
    two_z_out = two_zero;
  }
  if (two_one < 0){
    two_o_out = `(${two_one})`;
  } else {
    two_o_out = two_one;
  }
  if (two_two < 0){
    two_t_out = `(${two_two})`;
  } else {
    two_t_out = two_two;
  }


/*
let zero_z_out; 0, 0
let zero_o_out; 0, 1
let zero_t_out; 0, 2

let one_z_out; 1, 0
let one_o_out; 1, 1
let one_t_out; 1, 2

let two_z_out; 2, 0
let two_o_out; 2, 1
let two_t_out; 2, 2

*/


//${result}
  let out = `W = (0, 0) &sdot; (1, 1) &sdot; (1, 0) + (1, 0) &sdot; (2, 1) &sdot; (0, 2)
  + (2, 0) &sdot; (0, 1) &sdot; (1, 2) &minus; (2, 0) &sdot; (1, 1) &sdot; (0, 2) &minus; (1, 0) &sdot; (0, 1) &sdot; (2, 2) &minus; (0, 0) &sdot; (2, 1) &sdot; (1, 2) = <br> ${zero_z_out} &sdot; ${one_o_out} &sdot; ${two_t_out} + ${one_z_out} &sdot; ${two_o_out} &sdot; ${zero_t_out}
  + ${two_z_out} &sdot; ${zero_o_out} &sdot; ${one_t_out} &minus; ${two_z_out} &sdot; ${one_o_out} &sdot; ${zero_t_out} &minus; ${one_z_out} &sdot; ${zero_o_out} &sdot; ${two_t_out} &minus; ${zero_z_out} &sdot; ${two_o_out} &sdot; ${one_t_out} = <br> ${first_out} + ${second_out} + ${third_out} &minus; ${fourth_out} &minus; ${fifth_out} &minus; ${sixth_out} = ${result}`;

/*
let first_out;
let second_out;
let third_out;

let fourth_out;
let fifth_out;
let sixth_out;

*/


  //let add = `${first_out} + ${second_out} + ${third_out} &minus; ${fourth_out} &minus; ${fifth_out} &minus; ${sixth_out} = ${result}`;
  if (check){
  document.getElementById('result').innerHTML = out;
 }
}

function FourByFour(){
  let zero_zero, zero_one, zero_two, zero_three, one_zero,
  one_one, one_two, one_three, two_zero, two_one, two_two, two_three, three_zero, three_one,
  three_two, three_three;
  let check = true;

  zero_zero = document.getElementById("f_zero_zero").value;
  zero_one = document.getElementById("f_zero_one").value;
  zero_two = document.getElementById("f_zero_two").value;
  zero_three = document.getElementById("f_zero_three").value;

  one_zero = document.getElementById("f_one_zero").value;
  one_one = document.getElementById("f_one_one").value;
  one_two = document.getElementById("f_one_two").value;
  one_three = document.getElementById("f_one_three").value;

  two_zero = document.getElementById("f_two_zero").value;
  two_one = document.getElementById("f_two_one").value;
  two_two = document.getElementById("f_two_two").value;
  two_three = document.getElementById("f_two_three").value;

  three_zero = document.getElementById("f_three_zero").value;
  three_one = document.getElementById("f_three_one").value;
  three_two = document.getElementById("f_three_two").value;
  three_three = document.getElementById("f_three_three").value;

  document.getElementById("f_zero_zero").value = "";
  document.getElementById("f_zero_one").value = "";
  document.getElementById("f_zero_two").value = "";
  document.getElementById("f_zero_three").value = "";

  document.getElementById("f_one_zero").value = "";
  document.getElementById("f_one_one").value = "";
  document.getElementById("f_one_two").value = "";
  document.getElementById("f_one_three").value = "";

  document.getElementById("f_two_zero").value = "";
  document.getElementById("f_two_one").value = "";
  document.getElementById("f_two_two").value = "";
  document.getElementById("f_two_three").value = "";

  document.getElementById("f_three_zero").value = "";
  document.getElementById("f_three_one").value = "";
  document.getElementById("f_three_two").value = "";
  document.getElementById("f_three_three").value = "";


  if (isNaN(zero_zero) || isNaN(zero_one) || isNaN(zero_two) || isNaN(zero_three) || isNaN(one_zero) || isNaN(one_one) || isNaN(one_two) || isNaN(one_three) || isNaN(two_zero) || isNaN(two_one) || isNaN(two_two) || isNaN(two_three) || isNaN(three_zero) || isNaN(three_one) || isNaN(three_two) || isNaN(three_three)){
      alert('You must input integer only!');
      check = false;
  }

  if (zero_zero === "" || zero_one === "" || zero_two === "" || zero_three === "" || one_zero === "" || one_one === "" || one_two === "" || one_three === "" || two_zero === "" || two_one === "" || two_two === "" || two_three === "" || three_zero === "" || three_one === "" || three_two === "" || three_three === ""){
    alert('You did not enter all element! Try again');
    check = false;
  }

  //let result =;


  if (check){
    let four = document.getElementsByClassName("four-by-four_matrix_cell");


    document.getElementById("four_cell_zero_zero").innerHTML = zero_zero;
    document.getElementById("four_cell_zero_one").innerHTML = zero_one;
    document.getElementById("four_cell_zero_two").innerHTML = zero_two;
    document.getElementById("four_cell_zero_three").innerHTML = zero_three;

    document.getElementById("four_cell_one_zero").innerHTML = one_zero;
    document.getElementById("four_cell_one_one").innerHTML = one_one;
    document.getElementById("four_cell_one_two").innerHTML = one_two;
    document.getElementById("four_cell_one_three").innerHTML = one_three;

    document.getElementById("four_cell_two_zero_zero").innerHTML = two_zero;
    document.getElementById("four_cell_two_zero_one").innerHTML = two_one;
    document.getElementById("four_cell_two_zero_two").innerHTML = two_two;
    document.getElementById("four_cell_two_zero_three").innerHTML = two_three;

    document.getElementById("four_cell_three_zero_zero").innerHTML = three_zero;
    document.getElementById("four_cell_three_zero_one").innerHTML = three_one;
    document.getElementById("four_cell_three_zero_two").innerHTML = three_two;
    document.getElementById("four_cell_three_zero_three").innerHTML = three_three;


    ///////////// 1 Matrix
    document.getElementById("four_one_cell_index").innerHTML = zero_zero;

    document.getElementById("four_one_cell_one_one").innerHTML = one_one;
    document.getElementById("four_one_cell_one_two").innerHTML = one_two;
    document.getElementById("four_one_cell_one_three").innerHTML = one_three;

    document.getElementById("four_one_cell_two_one").innerHTML = two_one;
    document.getElementById("four_one_cell_two_two").innerHTML = two_two;
    document.getElementById("four_one_cell_two_three").innerHTML = two_three;

    document.getElementById("four_one_cell_three_one").innerHTML = three_one;
    document.getElementById("four_one_cell_three_two").innerHTML = three_two;
    document.getElementById("four_one_cell_three_three").innerHTML = three_three;

    //////////// 2 Matrix
    document.getElementById("four_two_cell_index").innerHTML = one_zero;

    document.getElementById("four_two_cell_zero_one").innerHTML = zero_one;
    document.getElementById("four_two_cell_zero_two").innerHTML = zero_two;
    document.getElementById("four_two_cell_zero_three").innerHTML = zero_three;

    document.getElementById("four_two_cell_two_one").innerHTML = two_one;
    document.getElementById("four_two_cell_two_two").innerHTML = two_two;
    document.getElementById("four_two_cell_two_three").innerHTML = two_three;

    document.getElementById("four_two_cell_three_one").innerHTML = three_one;
    document.getElementById("four_two_cell_three_two").innerHTML = three_two;
    document.getElementById("four_two_cell_three_three").innerHTML = three_three;

    //////////// 3 Matrix
    document.getElementById("four_three_cell_index").innerHTML = two_zero;

    document.getElementById("four_three_cell_zero_one").innerHTML = zero_one;
    document.getElementById("four_three_cell_zero_two").innerHTML = zero_two;
    document.getElementById("four_three_cell_zero_three").innerHTML = zero_three;

    document.getElementById("four_three_cell_one_one").innerHTML = one_one;
    document.getElementById("four_three_cell_one_two").innerHTML = one_two;
    document.getElementById("four_three_cell_one_three").innerHTML = one_three;

    document.getElementById("four_three_cell_three_one").innerHTML = three_one;
    document.getElementById("four_three_cell_three_two").innerHTML = three_two;
    document.getElementById("four_three_cell_three_three").innerHTML = three_three;

    //////////// 4 Matrix
    document.getElementById("four_four_cell_index").innerHTML = three_zero;

    document.getElementById("four_four_cell_zero_one").innerHTML = zero_one;
    document.getElementById("four_four_cell_zero_two").innerHTML = zero_two;
    document.getElementById("four_four_cell_zero_three").innerHTML = zero_three;

    document.getElementById("four_four_cell_one_one").innerHTML = one_one;
    document.getElementById("four_four_cell_one_two").innerHTML = one_two;
    document.getElementById("four_four_cell_one_three").innerHTML = one_three;

    document.getElementById("four_four_cell_two_one").innerHTML = two_one;
    document.getElementById("four_four_cell_two_two").innerHTML = two_two;
    document.getElementById("four_four_cell_two_three").innerHTML = two_three;


    document.getElementById("four_one_cell_zero_zero").innerHTML = zero_zero;
    document.getElementById("four_one_cell_one_zero").innerHTML = one_zero;
    document.getElementById("four_one_cell_two_zero").innerHTML = two_zero;
    document.getElementById("four_one_cell_three_zero").innerHTML = three_zero;

    document.getElementById("four_last_cell_zero_zero").innerHTML = zero_zero;
    document.getElementById("four_last_cell_one_zero").innerHTML = one_zero;
    document.getElementById("four_last_cell_two_zero").innerHTML = two_zero;
    document.getElementById("four_last_cell_three_zero").innerHTML = three_zero;

    four[0].style.display = "block";

  }
  let a = one_one * two_two * three_three + two_one * three_two * one_three +
  three_one * one_two * two_three - three_one * two_two * one_three - two_one * one_two * three_three -
  one_one * three_two * two_three;

  let b = zero_one * two_two * three_three + two_one * three_two * zero_three +
  three_one * zero_two * two_three - three_one * two_two * zero_three -
  two_one * zero_two * three_three - zero_one * three_two * two_three;

  let c = zero_one * one_two * three_three + one_one * three_two * zero_three +
  three_one * zero_two * one_three - three_one * one_two * zero_three -
  one_one * zero_two * three_three - zero_one * three_two * one_three;

  let d = zero_one * one_two * two_three + one_one * two_two * zero_three +
  two_one * zero_two * one_three - two_one * one_two * zero_three -
  one_one * zero_two * two_three - zero_one * two_two * one_three;



  let first_a = one_one * two_two * three_three;
  let second_a = two_one * three_two * one_three;
  let third_a = three_one * one_two * two_three;

  let fourth_a = three_one * two_two * one_three;
  let fifth_a = two_one * one_two * three_three;
  let sixth_a = one_one * three_two * two_three;



  let first_out_a;
  let second_out_a;
  let third_out_a;

  let fourth_out_a;
  let fifth_out_a;
  let sixth_out_a;




  if (first_a < 0){
    first_out_a = `(${first_a})`;
  } else {
    first_out_a = first_a;
  }
  if (second_a < 0){
    second_out_a = `(${second_a})`;
  } else {
    second_out_a = second_a;
  }
  if (third_a < 0){
    third_out_a = `(${third_a})`;
  } else {
    third_out_a = third_a;
  }



  if (fourth_a < 0){
    fourth_out_a = `(${fourth_a})`;
  } else {
    fourth_out_a = fourth_a;
  }
  if (fifth_a < 0){
    fifth_out_a = `(${fifth_a})`;
  } else {
    fifth_out_a = fifth_a;
  }
  if (sixth_a < 0){
    sixth_out_a = `(${sixth_a})`;
  } else {
    sixth_out_a = sixth_a;
  }



  //////
  /////////////////////////////////////////////////////////////////


    let zero_z_out_a;
    let zero_o_out_a;
    let zero_t_out_a;

    let one_z_out_a;
    let one_o_out_a;
    let one_t_out_a;

    let two_z_out_a;
    let two_o_out_a;
    let two_t_out_a;


    if (one_one < 0){
      zero_z_out_a = `(${one_one})`;
    } else {
      zero_z_out_a = one_one;
    }
    if (one_two < 0){
      zero_o_out_a = `(${one_two})`;
    } else {
      zero_o_out_a = one_two;
    }
    if (one_three < 0){
      zero_t_out_a = `(${one_three})`;
    } else {
      zero_t_out_a = one_three;
    }


    if (two_one < 0){
      one_z_out_a = `(${two_one})`;
    } else {
      one_z_out_a = two_one;
    }
    if (two_two < 0){
      one_o_out_a = `(${two_two})`;
    } else {
      one_o_out_a = two_two;
    }
    if (two_three < 0){
      one_t_out_a = `(${two_three})`;
    } else {
      one_t_out_a = two_three;
    }

    if (three_one < 0){
      two_z_out_a = `(${three_one})`;
    } else {
      two_z_out_a = three_one;
    }
    if (three_two < 0){
      two_o_out_a = `(${three_two})`;
    } else {
      two_o_out_a = three_two;
    }
    if (three_three < 0){
      two_t_out_a = `(${three_three})`;
    } else {
      two_t_out_a = three_three;
    }



  ////



  let out_a = `A = (1, 1) &sdot; (2, 2) &sdot; (3, 3) + (2, 1) &sdot; (3, 2) &sdot; (1, 3)
  + (3, 1) &sdot; (1, 2) &sdot; (2, 3) &minus; (3, 1) &sdot; (2, 2) &sdot; (1, 3) &minus;
  (2, 1) &sdot; (1, 2) &sdot; (3, 3) &minus; (1, 1) &sdot; (3, 2) &sdot; (2, 3) = <br> ${zero_z_out_a}
  &sdot; ${one_o_out_a} &sdot; ${two_t_out_a} + ${one_z_out_a} &sdot; ${two_o_out_a} &sdot; ${zero_t_out_a}
  + ${two_z_out_a} &sdot; ${zero_o_out_a} &sdot; ${one_t_out_a} &minus; ${two_z_out_a} &sdot; ${one_o_out_a} &sdot;
   ${zero_t_out_a} &minus; ${one_z_out_a} &sdot; ${zero_o_out_a} &sdot; ${two_t_out_a} &minus; ${zero_z_out_a} &sdot;
   ${two_o_out_a} &sdot; ${one_t_out_a} = <br> ${first_out_a} + ${second_out_a} + ${third_out_a} &minus;
   ${fourth_out_a} &minus; ${fifth_out_a} &minus; ${sixth_out_a} = ${a}`;



   if (check){
   document.getElementById('result_a').innerHTML = out_a;
  }



  //B

  let first_b = zero_one * two_two * three_three;
  let second_b = two_one * three_two * zero_three;
  let third_b = three_one * zero_two * two_three;

  let fourth_b = three_one * two_two * zero_three;
  let fifth_b = two_one * zero_two * three_three;
  let sixth_b = zero_one * three_two * two_three;



  let first_out_b;
  let second_out_b;
  let third_out_b;

  let fourth_out_b;
  let fifth_out_b;
  let sixth_out_b;




  if (first_b < 0){
    first_out_b = `(${first_b})`;
  } else {
    first_out_b = first_b;
  }
  if (second_b < 0){
    second_out_b = `(${second_b})`;
  } else {
    second_out_b = second_b;
  }
  if (third_b < 0){
    third_out_b = `(${third_b})`;
  } else {
    third_out_b = third_b;
  }



  if (fourth_b < 0){
    fourth_out_b = `(${fourth_b})`;
  } else {
    fourth_out_b = fourth_b;
  }
  if (fifth_b < 0){
    fifth_out_b = `(${fifth_b})`;
  } else {
    fifth_out_b = fifth_b;
  }
  if (sixth_b < 0){
    sixth_out_b = `(${sixth_b})`;
  } else {
    sixth_out_b = sixth_b;
  }



  //////
  /////////////////////////////////////////////////////////////////


    let zero_z_out_b;
    let zero_o_out_b;
    let zero_t_out_b;

    let one_z_out_b;
    let one_o_out_b;
    let one_t_out_b;

    let two_z_out_b;
    let two_o_out_b;
    let two_t_out_b;


    if (zero_one < 0){
      zero_z_out_b = `(${zero_one})`;
    } else {
      zero_z_out_b = zero_one;
    }
    if (zero_two < 0){
      zero_o_out_b = `(${zero_two})`;
    } else {
      zero_o_out_b = zero_two;
    }
    if (zero_three < 0){
      zero_t_out_b = `(${zero_three})`;
    } else {
      zero_t_out_b = zero_three;
    }


    if (two_one < 0){
      one_z_out_b = `(${two_one})`;
    } else {
      one_z_out_b = two_one;
    }
    if (two_two < 0){
      one_o_out_b = `(${two_two})`;
    } else {
      one_o_out_b = two_two;
    }
    if (two_three < 0){
      one_t_out_b = `(${two_three})`;
    } else {
      one_t_out_b = two_three;
    }

    if (three_one < 0){
      two_z_out_b = `(${three_one})`;
    } else {
      two_z_out_b = three_one;
    }
    if (three_two < 0){
      two_o_out_b = `(${three_two})`;
    } else {
      two_o_out_b = three_two;
    }
    if (three_three < 0){
      two_t_out_b = `(${three_three})`;
    } else {
      two_t_out_b = three_three;
    }



  ////



  let out_b = `B = (0, 0) &sdot; (1, 1) &sdot; (1, 0) + (1, 0) &sdot; (2, 1) &sdot; (0, 2)
  + (2, 0) &sdot; (0, 1) &sdot; (1, 2) &minus; (2, 0) &sdot; (1, 1) &sdot; (0, 2) &minus;
  (1, 0) &sdot; (0, 1) &sdot; (2, 2) &minus; (0, 0) &sdot; (2, 1) &sdot; (1, 2) = <br> ${zero_z_out_b}
  &sdot; ${one_o_out_b} &sdot; ${two_t_out_b} + ${one_z_out_b} &sdot; ${two_o_out_b} &sdot; ${zero_t_out_b}
  + ${two_z_out_b} &sdot; ${zero_o_out_b} &sdot; ${one_t_out_b} &minus; ${two_z_out_b} &sdot; ${one_o_out_b} &sdot;
   ${zero_t_out_b} &minus; ${one_z_out_b} &sdot; ${zero_o_out_b} &sdot; ${two_t_out_b} &minus; ${zero_z_out_b} &sdot;
   ${two_o_out_b} &sdot; ${one_t_out_b} = <br> ${first_out_b} + ${second_out_b} + ${third_out_b} &minus;
   ${fourth_out_b} &minus; ${fifth_out_b} &minus; ${sixth_out_b} = ${b}`;



   if (check){
   document.getElementById('result_b').innerHTML = out_b;
  }


  //C



  let first_c = zero_one * one_two * three_three;
  let second_c = one_one * three_two * zero_three;
  let third_c = three_one * zero_two * one_three;

  let fourth_c = three_one * one_two * zero_three;
  let fifth_c = one_one * zero_two * three_three;
  let sixth_c = zero_one * three_two * one_three;



  let first_out_c;
  let second_out_c;
  let third_out_c;

  let fourth_out_c;
  let fifth_out_c;
  let sixth_out_c;




  if (first_c < 0){
    first_out_c = `(${first_c})`;
  } else {
    first_out_c = first_c;
  }
  if (second_c < 0){
    second_out_c = `(${second_c})`;
  } else {
    second_out_c = second_c;
  }
  if (third_c < 0){
    third_out_c = `(${third_c})`;
  } else {
    third_out_c = third_c;
  }



  if (fourth_c < 0){
    fourth_out_c = `(${fourth_c})`;
  } else {
    fourth_out_c = fourth_c;
  }
  if (fifth_c < 0){
    fifth_out_c = `(${fifth_c})`;
  } else {
    fifth_out_c = fifth_c;
  }
  if (sixth_c < 0){
    sixth_out_c = `(${sixth_c})`;
  } else {
    sixth_out_c = sixth_c;
  }



  //////
  /////////////////////////////////////////////////////////////////


    let zero_z_out_c;
    let zero_o_out_c;
    let zero_t_out_c;

    let one_z_out_c;
    let one_o_out_c;
    let one_t_out_c;

    let two_z_out_c;
    let two_o_out_c;
    let two_t_out_c;


    if (zero_one < 0){
      zero_z_out_c = `(${zero_one})`;
    } else {
      zero_z_out_c = zero_one;
    }
    if (zero_two < 0){
      zero_o_out_c = `(${zero_two})`;
    } else {
      zero_o_out_c = zero_two;
    }
    if (zero_three < 0){
      zero_t_out_c = `(${zero_three})`;
    } else {
      zero_t_out_c = zero_three;
    }


    if (one_one < 0){
      one_z_out_c = `(${one_one})`;
    } else {
      one_z_out_c = one_one;
    }
    if (one_two < 0){
      one_o_out_c = `(${one_two})`;
    } else {
      one_o_out_c = one_two;
    }
    if (one_three < 0){
      one_t_out_c = `(${one_three})`;
    } else {
      one_t_out_c = one_three;
    }

    if (three_one < 0){
      two_z_out_c = `(${three_one})`;
    } else {
      two_z_out_c = three_one;
    }
    if (three_two < 0){
      two_o_out_c = `(${three_two})`;
    } else {
      two_o_out_c = three_two;
    }
    if (three_three < 0){
      two_t_out_c = `(${three_three})`;
    } else {
      two_t_out_c = three_three;
    }



  ////



  let out_c = `C = (0, 1) &sdot; (1, 2) &sdot; (3, 3) + (1, 1) &sdot; (3, 2) &sdot; (0, 3)
  + (3, 1) &sdot; (0, 2) &sdot; (1, 3) &minus; (3, 1) &sdot; (1, 2) &sdot; (0, 3) &minus;
  (1, 1) &sdot; (0, 2) &sdot; (3, 3) &minus; (0, 1) &sdot; (3, 2) &sdot; (1, 3) = <br> ${zero_z_out_c}
  &sdot; ${one_o_out_c} &sdot; ${two_t_out_c} + ${one_z_out_c} &sdot; ${two_o_out_c} &sdot; ${zero_t_out_c}
  + ${two_z_out_c} &sdot; ${zero_o_out_c} &sdot; ${one_t_out_c} &minus; ${two_z_out_c} &sdot; ${one_o_out_c} &sdot;
   ${zero_t_out_c} &minus; ${one_z_out_c} &sdot; ${zero_o_out_c} &sdot; ${two_t_out_c} &minus; ${zero_z_out_c} &sdot;
   ${two_o_out_c} &sdot; ${one_t_out_c} = <br> ${first_out_c} + ${second_out_c} + ${third_out_c} &minus;
   ${fourth_out_c} &minus; ${fifth_out_c} &minus; ${sixth_out_c} = ${c}`;



   if (check){
   document.getElementById('result_c').innerHTML = out_c;
  }



  //D

  let first_d = zero_one * one_two * two_three;
  let second_d = one_one * two_two * zero_three;
  let third_d = two_one * zero_two * one_three;

  let fourth_d = two_one * one_two * zero_three;
  let fifth_d = one_one * zero_two * two_three;
  let sixth_d = zero_one * two_two * one_three;



  let first_out_d;
  let second_out_d;
  let third_out_d;

  let fourth_out_d;
  let fifth_out_d;
  let sixth_out_d;




  if (first_d < 0){
    first_out_d = `(${first_d})`;
  } else {
    first_out_d = first_d;
  }
  if (second_d < 0){
    second_out_d = `(${second_d})`;
  } else {
    second_out_d = second_d;
  }
  if (third_d < 0){
    third_out_d = `(${third_d})`;
  } else {
    third_out_d = third_d;
  }



  if (fourth_d < 0){
    fourth_out_d = `(${fourth_d})`;
  } else {
    fourth_out_d = fourth_d;
  }
  if (fifth_d < 0){
    fifth_out_d = `(${fifth_d})`;
  } else {
    fifth_out_d = fifth_d;
  }
  if (sixth_d < 0){
    sixth_out_d = `(${sixth_d})`;
  } else {
    sixth_out_d = sixth_d;
  }


  //////
  /////////////////////////////////////////////////////////////////


    let zero_z_out_d;
    let zero_o_out_d;
    let zero_t_out_d;

    let one_z_out_d;
    let one_o_out_d;
    let one_t_out_d;

    let two_z_out_d;
    let two_o_out_d;
    let two_t_out_d;


    if (zero_one < 0){
      zero_z_out_d = `(${zero_one})`;
    } else {
      zero_z_out_d = zero_one;
    }
    if (zero_two < 0){
      zero_o_out_d = `(${zero_two})`;
    } else {
      zero_o_out_d = zero_two;
    }
    if (zero_three < 0){
      zero_t_out_d = `(${zero_three})`;
    } else {
      zero_t_out_d = zero_three;

    if (one_one < 0){
      one_z_out_d = `(${one_one})`;
    } else {
      one_z_out_d = one_one;
    }
    if (one_two < 0){
      one_o_out_d = `(${one_two})`;
    } else {
      one_o_out_d = one_two;
    }
    if (one_three < 0){
      one_t_out_d = `(${one_three})`;
    } else {
      one_t_out_d = one_three;
    }

    if (two_one < 0){
      two_z_out_d = `(${two_one})`;
    } else {
      two_z_out_d = two_one;
    }
    if (two_two < 0){
      two_o_out_d = `(${two_two})`;
    } else {
      two_o_out_d = two_two;
    }
    if (two_three < 0){
      two_t_out_d = `(${two_three})`;
    } else {
      two_t_out_d = three_three;
    }



  ////



  let out_d = `D = (0, 1) &sdot; (1, 2) &sdot; (2, 3) + (1, 1) &sdot; (2, 2) &sdot; (0, 3)
  + (2, 1) &sdot; (0, 2) &sdot; (1, 3) &minus; (2, 1) &sdot; (1, 2) &sdot; (0, 3) &minus;
  (1, 1) &sdot; (0, 2) &sdot; (2, 3) &minus; (0, 1) &sdot; (2, 2) &sdot; (1, 3) = <br> ${zero_z_out_d}
  &sdot; ${one_o_out_d} &sdot; ${two_t_out_d} + ${one_z_out_d} &sdot; ${two_o_out_d} &sdot; ${zero_t_out_d}
  + ${two_z_out_d} &sdot; ${zero_o_out_d} &sdot; ${one_t_out_d} &minus; ${two_z_out_d} &sdot; ${one_o_out_d} &sdot;
   ${zero_t_out_d} &minus; ${one_z_out_d} &sdot; ${zero_o_out_d} &sdot; ${two_t_out_d} &minus; ${zero_z_out_d} &sdot;
   ${two_o_out_d} &sdot; ${one_t_out_d} = <br> ${first_out_d} + ${second_out_d} + ${third_out_d} &minus;
   ${fourth_out_d} &minus; ${fifth_out_d} &minus; ${sixth_out_d} = ${d}`;

   let result = zero_zero * a + (-1) * one_zero * b + two_zero * c + (-1) * three_zero * d;

   if (check){
   document.getElementById('result_d').innerHTML = out_d;

   document.getElementById('four_last_a').innerHTML = a;
   document.getElementById('four_last_b').innerHTML = b;
   document.getElementById('four_last_c').innerHTML = c;
   document.getElementById('four_last_d').innerHTML = d;

   document.getElementById('four_result').innerHTML = result;


  }










  /**
**let zero_zero, zero_one, zero_two, zero_three, one_zero,
**one_one, one_two, one_three, two_zero, two_one, two_two, two_three, three_zero, three_one,
**three_two, three_three;




let result = zero_zero * one_one * two_two + one_zero * two_one * two_two +
two_zero * zero_one * one_two - two_zero * one_one * zero_two -
one_zero * zero_one * two_two - zero_zero * two_one * one_two;
  **/

}

}
