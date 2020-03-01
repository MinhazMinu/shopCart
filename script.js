//  increment item

document.getElementById("plus").addEventListener("click", function() {
  let itemNo = noOfItem("item");
  itemNo = itemNo + 1;

  showItemandprice("item", "iphonprice", itemNo);
});

// decrement item
document.getElementById("minus").addEventListener("click", function() {
  let itemNo = noOfItem("item");
  itemNo = itemNo - 1;

  if (itemNo > 0) {
    showItemandprice("item", "iphonprice", itemNo);
  } else {
    // zero("item", "iphonprice");
    showItemandprice("item", "iphonprice", 0);
  }
});

document.getElementById("cPlus").addEventListener("click", function() {
  let itemNo = noOfItem("itemc");
  itemNo = itemNo + 1;

  showItemandprice("itemc", "casePrice", itemNo);
});

// decrement item
document.getElementById("cMinus").addEventListener("click", function() {
  let itemNo = noOfItem("itemc");
  itemNo = itemNo - 1;

  if (itemNo > 0) {
    showItemandprice("itemc", "casePrice", itemNo);
  } else {
    // zero("itemc", "casePrice");
    //a
    showItemandprice("itemc", "casePrice", 0);
  }
});

document.getElementById("cphon").addEventListener("click", function() {
  document.getElementById("iphoncart").classList.add("disp");

  showItemandprice("item", "iphonprice", 0);
});
document.getElementById("ccase").addEventListener("click", function() {
  document.getElementById("ccart").classList.add("disp");

  showItemandprice("itemc", "casePrice", 0);
});

count = 0;
document.getElementById("btnCupon").addEventListener("click", function() {
  var x = document.getElementById("cupon").value;
  var y = sub();
  if (x === "JSHero" && count === 0 && y != 0) {
    count = 1;
    document.getElementById("cupon").value = "";
    document.getElementById("cupon").placeholder = "Discount $40!!";
    amount();
  } else if (count == 1) {
    document.getElementById("cupon").value = "";
    document.getElementById("cupon").placeholder = "One time use";
  } else {
    document.getElementById("cupon").value = "";
    document.getElementById("cupon").placeholder = "invalid";
  }
});

// funcrion

// ===============================
//  Show Price zero
// function zero(item, productPeice) {
//   document.getElementById(item).value = 0;

//   document.getElementById(productPeice).innerText = 0;
//   amount();
// }
function sub() {
  let iphon = parseInt(document.getElementById("iphonprice").innerText);
  let cas = parseInt(document.getElementById("casePrice").innerText);
  let sub = iphon + cas;
  return sub;
}

function amount() {
  let s = sub();
  if (count == 1) {
    document.getElementById("subtotal").innerText =
      s.toFixed(2) - parseFloat(40);
  } else {
    document.getElementById("subtotal").innerText = s.toFixed(2);
  }

  document.getElementById("tex").innerText = (s * 0.15).toFixed(2);
  document.getElementById("total").innerText = (s + s * 0.15).toFixed(2);
}

function showItemandprice(id, productPrice, item) {
  if (productPrice == "iphonprice") {
    document.getElementById(id).value = item;
    document.getElementById(productPrice).innerText = 1219 * item;
    amount();
  } else {
    document.getElementById(id).value = item;
    document.getElementById(productPrice).innerText = 59 * item;
    amount();
  }
}

function noOfItem(id) {
  return parseInt(document.getElementById(id).value);
}
