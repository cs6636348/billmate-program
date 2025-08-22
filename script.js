function calculate() {
    var service = parseInt(document.getElementById("service").value);
    var room = parseInt(document.getElementById("room").value);
    var waterbefore = parseInt(document.getElementById("waterbefore").value);
    var waterafter = parseInt(document.getElementById("waterafter").value);
    var electricbefore = parseInt(document.getElementById("electricbefore").value);
    var electricafter = parseInt(document.getElementById("electricafter").value);

    if (!service | !room | !waterbefore | !waterafter | !electricbefore | !electricafter) {
        alert("ใส่ไม่ครบ");
        return;
    }

    var water = Math.abs(waterbefore - waterafter) * 20;
    var electric = Math.abs(electricbefore - electricafter) * 7;
    var total = service + room + water + electric;

    var table = document.getElementById("table");
    var lists = document.createElement("tr");
    lists.innerHTML = "<td>" + service + "</td>" +
                      "<td>" + water + "</td>" +
                      "<td>" + electric + "</td>" +
                      "<td>" + room + "</td>" + 
                      "<td>" + total + "</td>"

    table.appendChild(lists);
}