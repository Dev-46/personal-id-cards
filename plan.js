

let year = "2026";

const montharabic = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
let month_days = 22;
let monthn = 3;
let arabic_month_name = "مارس";

let daysNamesOrder = [];
let allMonthDaysNames = [];
let allMonthDaysNumbers = [];

document.getElementById("month").innerHTML = arabic_month_name;
document.getElementById("year").innerHTML = year;

//change the supervisor name
//add year month manually or not
let mypoptogetinfo = document.createElement("div");
mypoptogetinfo.id = "mypoptogetinfo";
mypoptogetinfo.style.display = "flex";
mypoptogetinfo.style.flexDirection = "column";
mypoptogetinfo.style.justifyContent = "center";
mypoptogetinfo.style.alignItems = "center";
mypoptogetinfo.style.left = "0"; /* 160 */
mypoptogetinfo.style.right = "0"; /* 160 */
mypoptogetinfo.style.bottom = "0";
mypoptogetinfo.style.width = "340" + "px";
mypoptogetinfo.style.zIndex = "1000";
mypoptogetinfo.style.margin = "450px auto";

let closeHolder = document.createElement("button");
//closeHolder.style.maxWidth = "460" + "px";
closeHolder.style.minWidth = "300" + "px";
closeHolder.style.backgroundColor = "rgba(32, 1, 32, 0.9)";
closeHolder.style.color = "white";
closeHolder.style.fontSize = "15" + "px";
closeHolder.innerHTML = "X";
closeHolder.style.textAlign = "left";
closeHolder.style.paddingLeft = "15px";
closeHolder.style.cursor = "pointer";
closeHolder.style.border = "1px solid white";
closeHolder.style.boxShadow = "inset 25px 20px 100px 44px rgba(100,20,100,0.5)";
closeHolder.style.borderRadius = "25px";
closeHolder.style.zIndex = "1000";
closeHolder.addEventListener("click", function () {
  document.getElementById("printer").removeChild(mypoptogetinfo);
});
mypoptogetinfo.appendChild(closeHolder);

let superinput = document.createElement("input");
superinput.type = "text";
superinput.style.fontSize = "30" + "px";
superinput.style.maxWidth = "300" + "px";
superinput.style.minWidth = "300" + "px";
superinput.style.width = "300" + "px";
superinput.style.backgroundColor = "#be0a0ac9";
superinput.style.color = "#f0e65b";
superinput.style.border = "1px solid #838582e3";
superinput.style.paddingTop = "16" + "px";
superinput.style.borderBottom = "1px solid #ecc2c2c0";
superinput.placeholder = "اسم الموجه ثنائي";
superinput.value = "ابراهيم حسان";
superinput.style.marginTop = "-12" + "px";
superinput.style.textIndent = "30" + "px";
mypoptogetinfo.appendChild(superinput);

let yearinput = document.createElement("input");
yearinput.type = "text";
yearinput.style.fontSize = "30" + "px";
yearinput.style.maxWidth = "300" + "px";
yearinput.style.minWidth = "300" + "px";
yearinput.style.width = "300" + "px";
yearinput.style.backgroundColor = "#fafafafd";
yearinput.style.color = "#f1f50c";
yearinput.style.border = "1px solid #81e075";
yearinput.style.borderBottom = "1px solid #b8a8a8";
yearinput.placeholder = "  السنة";
yearinput.value = 2026;
yearinput.style.zIndex = 100;
yearinput.style.textShadow = "2px 2px 2px #000";
yearinput.style.textIndent = "30" + "px";

mypoptogetinfo.appendChild(yearinput);

let monthinput = document.createElement("input");

monthinput.style.fontSize = "30" + "px";
monthinput.style.maxWidth = "300" + "px";
monthinput.style.minWidth = "300" + "px";
monthinput.style.width = "300" + "px";
monthinput.style.backgroundColor = "#0f0f0e";
monthinput.style.color = "#fff";
monthinput.style.border = "1px solid #81e075";
monthinput.style.borderBottom = "1px solid #756d6d";
monthinput.placeholder = " number  ";
monthinput.value = 3;
monthinput.style.zIndex = 100;
monthinput.style.textIndent = "30" + "px";
mypoptogetinfo.appendChild(monthinput);

let executebtn = document.createElement("button");
executebtn.style.paddingTop = "30" + "px";
executebtn.style.marginTop = "-30" + "px";
executebtn.style.fontSize = "60" + "px";
executebtn.style.maxWidth = "300" + "px";
executebtn.style.minWidth = "300" + "px";
executebtn.style.backgroundColor = "#544757";
executebtn.style.color = "#c4a5b8";
executebtn.style.border = "2px double #8b126d";
executebtn.style.border = "1px double #8b126d";
executebtn.style.borderRadius = "25px";
executebtn.style.zIndex = 0;
executebtn.style.boxShadow = "2px 20px 1px 1px rgba(100,20,100,0.5)";
executebtn.style.borderBottom = "3px solid #270e29";
executebtn.innerText = "  تنفيذ ";
mypoptogetinfo.appendChild(executebtn);

document.getElementById("printer").appendChild(mypoptogetinfo);

executebtn.addEventListener("mouseover", function () {
  executebtn.style.boxShadow = "1px 2px 1px 1px rgba(100,20,100,0.5)";
  executebtn.style.transition = "0.5s";
});

executebtn.addEventListener("mouseout", function () {
  executebtn.style.boxShadow = "2px 20px 1px 1px rgba(100,20,100,0.5)";
  executebtn.style.transition = "0.5s";
});

executebtn.addEventListener("click", function () {
  if (superinput.value.length > 0) {
    document.getElementById("sir").innerHTML = superinput.value;
    return superinput.value;
  }
});

executebtn.addEventListener("click", function () {
  if (yearinput.value.length === 4) {
    year = parseInt(yearinput.value);
    document.getElementById("year").innerHTML = year;
    return year;
  }
});



//////////////////////////////////////////////////////////////////

let myplans = document.getElementById("plans");
let tabb = document.createElement("table");

tabb.id = "mytable";

document.getElementById("plans").appendChild(tabb);

const cells = [
  "cell1",
  "cell2",
  "cell3",
  "cell4",
  "cell5",
  "cell6",
  "cell7",
  "cell8",
  "cell9",
  "cell10",
  "cell11",
  "cell12",
  "cell13",
  "cell14",
  "cell15",
  "cell16",
  "cell17",
  "cell18",
  "cell19",
  "cell20",
  "cell21",
  "cell22",
  "cell23",
  "cell24",
  "cell25",
  "cell26",
  "cell27",
  "cell28",
  "cell29",
  "cell30",
  "cell31",
  "cell32",
  "cell33",
  "cell34",
  "cell35",
  "cell36",
];

const recieverInput = [
  "td5cell1",
  "td5cell2",
  "td5cell3",
  "td5cell4",
  "td5cell5",
  "td5cell6",
  "td5cell7",
  "td5cell8",
  "td5cell9",
  "td5cell10",
  "td5cell11",
  "td5cell12",
  "td5cell13",
  "td5cell14",
  "td5cell15",
  "td5cell16",
  "td5cell17",
  "td5cell18",
  "td5cell19",
  "td5cell20",
  "td5cell21",
  "td5cell22",
  "td5cell23",
];

let myinput = document.getElementById("providerinput");

let currentInd = -1;

function moveFocus(direction) {
  const inputs = document.querySelectorAll(".input-field");

  // حساب المؤشر الجديد (مع معالجة الأرقام السالبة للرجوع للخلف)
  currentInd = (currentInd + direction + inputs.length) % inputs.length;

  inputs[currentInd].focus();

  document.getElementById(recieverInput[currentInd]).style.backgroundColor =
    "rgba(49, 47, 47, 0.18)";
  document.getElementById(recieverInput[currentInd]).style.color =
    "rgba(253, 251, 251, 0.93)";
  document.getElementById(recieverInput[currentInd]).style.textShadow =
    "1px 2px 3px rgba(5, 5, 5, 0.93)";
}

///////////////////////////////////////////////////////////////////////////////////
executebtn.addEventListener("click", function () {
  document.getElementById("mytable").innerHTML = "";

  monthn = parseInt(monthinput.value);

  if (monthn === 3) {
    arabic_month_name = "مارس";
  } else if (monthn === 4) {
    arabic_month_name = "أبريل";
  } else if (monthn === 5) {
    arabic_month_name = "مايو";
  } else if (monthn === 6) {
    arabic_month_name = "يونيو";
  } else if (monthn === 7) {
    arabic_month_name = "يوليو";
  } else if (monthn === 8) {
    arabic_month_name = "أغسطس";
  } else if (monthn === 9) {
    arabic_month_name = "سبتمبر";
  } else if (monthn === 10) {
    arabic_month_name = "أكتوبر";
  } else if (month === 11) {
    arabic_month_name = "نوفمبر";
  } else if (monthn === 12) {
    arabic_month_name = "ديسمبر";
  } else if (monthn === 1) {
    arabic_month_name = "يناير";
  } else if (monthn === 2) {
    arabic_month_name = "فبراير";
  }

  document.getElementById("month").innerHTML = arabic_month_name;

  /////////////////////////////////////////////////////////////////////////////////////

  for (let index = 0; index < month_days; index++) {
    //////////////////////////////////////////////////************************************ الايام

    switch (arabic_month_name) {
      case "مارس":
        daysNamesOrder = [
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22,
          23, 24, 25, 26, 28, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "أبريل":
        daysNamesOrder = [
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
        ];

        allMonthDaysNumbers = [
          1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
          23, 25, 26, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "مايو":
        daysNamesOrder = [
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
        ];

        allMonthDaysNumbers = [
          2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23,
          24, 25, 26, 27, 28, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "يونيو":
        daysNamesOrder = [
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22,
          23, 24, 25, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "يوليو":
        daysNamesOrder = [
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
        ];

        allMonthDaysNumbers = [
          1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
          23, 25, 26, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "أغسطس":
        daysNamesOrder = [
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22,
          23, 24, 25, 26, 27, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "سبتمبر":
        daysNamesOrder = [
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22,
          23, 24, 26, 27, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "أكتوبر":
        daysNamesOrder = [
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
        ];

        allMonthDaysNumbers = [
          1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22,
          24, 26, 27, 28, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "نوفمبر":
        daysNamesOrder = [
          "الأحد",
          "الاثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22,
          23, 24, 25, 26, 28, 29, 30,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      case "ديسمبر":
        daysNamesOrder = [
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "السبت",
          "الأحد",
          "الاثنين",
        ];

        allMonthDaysNumbers = [
          1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22,
          23, 24, 26, 27, 28, 29, 30, 31,
        ];
        allMonthDaysNames = [
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
          ...daysNamesOrder,
        ];
        month_days = allMonthDaysNumbers.length;

        break;

      default:
        monthn = 3;
        arabic_month_name = "مارس";
        break;
    }

    // ******************************************************************** */
    let tr = document.createElement("tr");
    tr.setAttribute("id", "tr" + index);
    tr.className = "rows";
    let td1 = document.createElement("td");
    td1.setAttribute("id", "td1" + cells[index]);
    td1.setAttribute("class", "cell cell1");
    td1.innerHTML = index + 1;

    let td2 = document.createElement("td");
    td2.setAttribute("id", "td2" + cells[index]);
    td2.setAttribute("class", "cell cell2");
    td2.innerHTML = allMonthDaysNames[index];

    let td3 = document.createElement("td");
    td3.setAttribute("id", "td3" + cells[index]);
    td3.setAttribute("class", "cell cell3");
    td3.innerHTML = `${year}-${monthn}-${allMonthDaysNumbers[index]}`;

    let td4 = document.createElement("td");
    td4.setAttribute("id", "td4" + cells[index]);
    td4.setAttribute("class", "cell cell4");
    td4.innerHTML = "";

    ////////////////////////////////////////////
    let td5 = document.createElement("input");
    td5.setAttribute("id", "td5" + cells[index]);
    td5.setAttribute("class", "cell cell5 input-field");

    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    document.getElementById("mytable").appendChild(tr);

    //////////////////////////////////////////////.......................
    const allTds = document.querySelectorAll(".cell2");
    const allInputFields = document.querySelectorAll(".input-field");
    const allSchoolsFields = document.querySelectorAll(".cell4");

    // You can iterate over the resulting NodeList using forEach, for...of, etc.
    allTds.forEach((cell, i) => {
      if (cell.innerHTML === "الثلاثاء") {
        allInputFields[i].value = "1001";
        allSchoolsFields[i].innerHTML = "ديوان الادارة";
      } else if (cell.innerHTML === "السبت" && index < 27) {
        //cell.style.color = "red";
        allInputFields[i].value = "1002";
        allSchoolsFields[i].innerHTML = "أجازة";
      }
    });
    /////////////////////////////////////////////.......................
    td5.addEventListener("keyup", function () {
      let code = td5.value;
      switch (code) {
        case "1":
          td4.innerHTML = "6 أكتوبر الابتدائية";
          break;
        case "2":
          td4.innerHTML = "6 أكتوبر الابتدائية - فصول إعدادي";
          break;
        case "3":
          td4.innerHTML = "الإصلاح 241/2 تعليم أساسي - ابتدائي";
          break;
        case "4":
          td4.innerHTML = "الإصلاح 241/2 تعليم أساسي - إعدادي";
          break;

        case "5":
          td4.innerHTML = "الأربع عزب الجديدة الابتدائية";
          break;

        case "6":
          td4.innerHTML = "البدوية الابتدائية";
          break;
        case "7":
          td4.innerHTML = "البسلقون الابتدائية أ الصباحية ";
          break;
        case "8":
          td4.innerHTML = "البسلقون الابتدائية ب المسائية ";
          break;

        case "9":
          td4.innerHTML = "البسلقون الاعدادية ";
          break;

        case "10":
          td4.innerHTML = "البوصة الابتدائية";
          break;

        case "11":
          td4.innerHTML = "البوصة الابتدائية - فصول إعدادي";
          break;

        case "12":
          td4.innerHTML = "التراس تعليم أساسي - ابتدائي";
          break;

        case "13":
          td4.innerHTML = "التراس تعليم أساسي - إعدادي";
          break;

        case "14":
          td4.innerHTML = "التمامة تعليم أساسي - ابتدائي";
          break;

        case "15":
          td4.innerHTML = "التمامة تعليم أساسي - إعدادي";
          break;

        case "16":
          td4.innerHTML = " الجزيرة صديقة الفتيات ";
          break;

        case "17":
          td4.innerHTML = " الجلاد الإبتدائية ";
          break;

        case "18":
          td4.innerHTML = " الجيل الواعد الخاصة لغات ";
          break;
        case "19":
          td4.innerHTML = "الخراشي تعليم أساسي - ابتدائي";
          break;
        case "20":
          td4.innerHTML = "الخراشي تعليم أساسي - إعدادي";
          break;
        case "21":
          td4.innerHTML = "الخواجة الرسمية لغات";
          break;
        case "22":
          td4.innerHTML = "الخواجة تعليم أساسي - ابدائي";
          break;
        case "23":
          td4.innerHTML = "الدوار تعليم أساسي - ابتدائي";
          break;
        case "24":
          td4.innerHTML = "الدوار تعليم أساسي - إعدادي";
          break;
        case "25":
          td4.innerHTML = "الربعمائة تعليم أساسي - ابتدائي";
          break;
        case "26":
          td4.innerHTML = "الربعمائة تعليم أساسي - إعدادي";
          break;
        case "27":
          td4.innerHTML = "الروضة تعليم أساسي - ابتدائي";
          break;
        case "28":
          td4.innerHTML = "الروضة تعليم أساسي - إعدادي";
          break;
        case "29":
          td4.innerHTML = "الريادة الخاصة عربي";
          break;
        case "30":
          td4.innerHTML = "الريادة الخاصة لغات";
          break;
        case "31":
          td4.innerHTML = "السبعين تعليم أساسي  - ابتدائي";//  td4.innerHTML = "السبعين تعليم أساسي بمركز كفرالدوار- ابتدائي";
          break;
        case "32":
          td4.innerHTML = "السبعين تعليم أساسي  - إعدادي"; //         td4.innerHTML = "السبعين تعليم أساسي بمركز كفرالدوار- إعدادي";
          break;
        case "33":
          td4.innerHTML = "الستين الرسمية لغات - ابتدائي";
          break;

        case "34":
          td4.innerHTML = "الستين تعليم أساسي - ابتدائي";
          break;

        case "35":
          td4.innerHTML = "الستين تعليم أساسي - إعدادي";
          break;

        case "36":
          td4.innerHTML = "السلام الابتدائية "; //     td4.innerHTML = "السلام الابتدائية بمركز كفرالدوار";
          break;

        case "37":
          td4.innerHTML ="الشعيرة الكبرى تعليم أساسي - ابتدائي "; //   td4.innerHTML ="الشعيرة الكبرى تعليم أساسي بمركز كفرالدوار - ابتدائي ";
          break;

        case "38":
          td4.innerHTML = "الشعيرة الكبرى تعليم أساسي  - إعدادي "; //    td4.innerHTML = "الشعيرة الكبرى تعليم أساسي بمركز كفرالدوار- إعدادي ";
          break;

        case "39":
          td4.innerHTML = "الشنديدي الجديدة الابتدائية ";
          break;

        case "40":
          td4.innerHTML = "الشهيد الصافي رجب الابتدائية ";
          break;
        case "41":
          td4.innerHTML = "الشهيد ابراهيم مبارك الابتدائية ";
          break;

        case "42":
          td4.innerHTML = "الشهيد أحمد حامد خليفة الإعدادية";
          break;

        case "43":
          td4.innerHTML = "الشهيد تامر محمد مصطفى محمد الإعدادية";
          break;

        case "44":
          td4.innerHTML = "الشهيد سعيد سرحان تعليم أساسي - ابتدائي";
          break;

        case "45":
          td4.innerHTML = "الشهيد سعيد سرحان تعليم أساسي - إعدادي";
          break;
        case "46":
          td4.innerHTML = "الشهيد شحاتة عبدالفتاح الدسوقي - الابتدائية";
          break;
        case "47":
          td4.innerHTML = "الشهيد عادل صلاح شرمانة - الابتدائية";
          break;
        case "48":
          td4.innerHTML = "الشهيد فوزي ابراهيم - الابتدائية";
          break;

        case "49":
          td4.innerHTML = "الشهيد كارم محمود يوسف  - الإعدادية";
          break;
        case "50":
          td4.innerHTML = "الشهيد محمد ابراهيم سلمان - الابتدائية";
          break;

        case "51":
          td4.innerHTML = "الشهيد محمد سعد عبد الواحد تعليم أساسي - ابتدائي";
          break;
        case "52":
          td4.innerHTML = "الشهيد محمد سعد عبد الواحد تعليم أساسي - إعدادي";
          break;

        case "53":
          td4.innerHTML = "الشهيد محمد عبدالمنعم - الابتدائية";
          break;

        case "54":
          td4.innerHTML = "الشهيد مصطفى كامل - الابتدائية "; //    td4.innerHTML = "الشهيد مصطفى كامل - الابتدائية بمركز كفرالدوار";
          break;

        case "55":
          td4.innerHTML = "الصيادين تعليم أساسي - ابتدائي";
          break;
        case "56":
          td4.innerHTML = "الصيادين تعليم أساسي - إعدادي";
          break;
        case "57":
          td4.innerHTML = "الطاهرالصافي - الابتدائية";
          break;
        case "58":
          td4.innerHTML = "الطاهرالصافي - الاعدادية";
          break;
        case "59":
          td4.innerHTML = "الطرح تعليم أساسي - ابتدائي";
          break;
        case "60":
          td4.innerHTML = "الطرح تعليم أساسي - إعدادي";
          break;
        case "61":
          td4.innerHTML = "العاشر من رمضان تعليم أساسي - ابتدائي";
          break;
        case "62":
          td4.innerHTML = "العاشر من رمضان تعليم أساسي - إعدادي";
          break;
        case "63":
          td4.innerHTML = "العالي - الابتدائية";
          break;
        case "64":
          td4.innerHTML = "العالي - الإعدادية";
          break;
        case "65":
          td4.innerHTML = "العرقوب تعليم أساسي - ابتدائي";
          break;
        case "66":
          td4.innerHTML = "العرقوب تعليم أساسي - إعدادي";
          break;

        case "67":
          td4.innerHTML = "الفقي - الابتدائية بمركز كفرالدوار";
          break;
        case "68":
          td4.innerHTML = "القاضي تعليم أساسي - ابتدائي";
          break;
        case "69":
          td4.innerHTML = "القاضي تعليم أساسي - إعدادي";
          break;
        case "70":
          td4.innerHTML = "القومية بأبيس تعليم أساسي - ابتدائي";
          break;
        case "71":
          td4.innerHTML = "القومية بأبيس تعليم أساسي - إعدادي";
          break;
        case "72":
          td4.innerHTML = "الكريون - الابتدائية "; //  td4.innerHTML = "الكريون - الابتدائية بمركز كفرالدوار";
          break;
        case "73":
          td4.innerHTML = "الكريون - الإعدادية "; //  td4.innerHTML = "الكريون - الإعدادية بمركز كفرالدوار";
          break;
        case "74":
          td4.innerHTML = "الكنايس الابتدائية المشتركة";
          break;
        case "75":
          td4.innerHTML = "الكنايس الاعدادية";
          break;
        case "76":
          td4.innerHTML = "المرحوم إبراهيم شرف تعليم أساسي - ابتدائي";
          break;
        case "77":
          td4.innerHTML = "المرحوم إبراهيم شرف تعليم أساسي - إعدادي";
          break;
        case "78":
          td4.innerHTML = "المصرية السويسرية الخاصة عربي";
          break;
        case "79":
          td4.innerHTML = "المصرية السويسرية الخاصة لغات";
          break;
        case "80":
          td4.innerHTML = "الملقة - الابتدائية";
          break;
        case "81":
          td4.innerHTML = "الملقة - الإعدادية";
          break;
        case "82":
          td4.innerHTML = "النبراوية - الابتدائية";
          break;
        case "83":
          td4.innerHTML = "النبراوية  الابتدائية - فصول إعدادي";
          break;
        case "84":
          td4.innerHTML = "الوحدة صديقة الفتيات";
          break;

        case "85":
          td4.innerHTML = "الوسطانية الابتدائية أ";
          break;
        case "86":
          td4.innerHTML = "الوسطانية الابتدائية ب";
          break;
        case "87":
          td4.innerHTML = "الوكيل الابتدائية"; //   td4.innerHTML = "الوكيل الابتدائية بمركز كفرالدوار";
          break;
        case "88":
          td4.innerHTML = "الوكيل الإعدادية "; //   td4.innerHTML = "الوكيل الإعدادية بمركز كفرالدوار";
          break;

        case "89":
          td4.innerHTML = "الوكيل تعليم أساسي  - ابتدائي";
          break;

        case "90":
          td4.innerHTML = "اليمينية تعليم أساسي - ابتدائي";
          break;
        case "91":
          td4.innerHTML = "اليمينية تعليم أساسي - إعدادي";
          break;

        case "92":
          td4.innerHTML = "أبوحسين الابتدائية";
          break;
        case "93":
          td4.innerHTML = "أبوحسين الإعدادية";
          break;

        case "94":
          td4.innerHTML = "أبوزيد خليفة تعليم أساسي - ابتدائي";
          break;

        case "95":
          td4.innerHTML = "أبوزيد خليفة تعليم أساسي - إعدادي";
          break;

        case "96":
          td4.innerHTML = "أبوغفيلة الابتدائية";
          break;
        case "97":
          td4.innerHTML = "أبيس 1/5 تعليم مجتمعي";
          break;
        case "98":
          td4.innerHTML = "أبيس 10/3 تعليم مجتمعي";
          break;
        case "99":
          td4.innerHTML = "أبيس 3 الابتدائية";
          break;
        case "100":
          td4.innerHTML = "أبيس 3 الإعدادية";
          break;

        case "101":
          td4.innerHTML = "أبيس 3 الرسمية عربي";
          break;
        case "102":
          td4.innerHTML = "أبيس 3 الرسمية لغات";
          break;

        case "103":
          td4.innerHTML = "أبيس 5 الابتدائية";
          break;

        case "104":
          td4.innerHTML = "أبيس 6 الابتدائية";
          break;

        case "105":
          td4.innerHTML = "أبيس 6 الثانوية التجارية";
          break;

        case "106":
          td4.innerHTML = "أبيس 6 الثانوية التجارية - فصول الخدمات";
          break;

        case "107":
          td4.innerHTML = "أبيس 6 الثانوية المشتركة";
          break;

        case "108":
          td4.innerHTML = "أبيس 6 الثانوية المشتركة - فصول الخدمات";
          break;

        case "109":
          td4.innerHTML = "أبيس 8/3 فصل واحد";
          break;

        case "110":
          td4.innerHTML = "أحمد أبوزهرة الابتدائية";
          break;

        case "111":
          td4.innerHTML = "باباه الكبرى تعليم أساسي - ابتدائي";
          break;
        case "112":
          td4.innerHTML = "باباه الكبرى تعليم أساسي - إعدادي";
          break;

        case "113":
          td4.innerHTML = "بديوي  تعليم أساسي - ابتدائي";
          break;
        case "114":
          td4.innerHTML = "بديوي  تعليم أساسي - إعدادي";
          break;

        case "115":
          td4.innerHTML = " بردلة الابتدائية";
          break;
        case "116":
          td4.innerHTML = "بركات الحمراء تعليم أساسي - ابتدائي";
          break;
        case "117":
          td4.innerHTML = "بركات الحمراء تعليم أساسي - إعدادي";
          break;

        case "118":
          td4.innerHTML = "بشير المختار تعليم أساسي - ابتدائي";
          break;
        case "119":
          td4.innerHTML = "بشير المختار تعليم أساسي - إعدادي";
          break;
        case "120":
          td4.innerHTML = "توفيق الهلباوي تعليم أساسي - ابتدائي";
          break;
        case "121":
          td4.innerHTML = "توفيق الهلباوي تعليم أساسي - إعدادي";
          break;
        case "122":
          td4.innerHTML = "جاب الله  تعليم أساسي - ابتدائي";
          break;
        case "123":
          td4.innerHTML = "جاب الله  تعليم أساسي - إعدادي";
          break;

        case "124":
          td4.innerHTML = "جلال أبوالحاج الابتدائية";
          break;

        case "125":
          td4.innerHTML = "حسن محمد بيومي  الابتدائية";
          break;
        case "126":
          td4.innerHTML = "حلمي إبراهيم عامر الإعدادية";
          break;
        case "127":
          td4.innerHTML = "حليص  تعليم أساسي - ابتدائي";
          break;
        case "128":
          td4.innerHTML = " حليص  تعليم أساسي - إعدادي";
          break;
        case "129":
          td4.innerHTML = " حماد الصعيدي  تعليم أساسي - ابتدائي";
          break;
        case "130":
          td4.innerHTML = " حماد الصعيدي  تعليم أساسي - إعدادي";
          break;

        case "131":
          td4.innerHTML = " حميد عبدالرحمن  تعليم أساسي - ابتدائي";
          break;
        case "132":
          td4.innerHTML = " حميد عبدالرحمن  تعليم أساسي - إعدادي";
          break;
        case "133":
          td4.innerHTML = " حوض 7  تعليم أساسي - ابتدائي";
          break;
        case "134":
          td4.innerHTML = " حوض 7  تعليم أساسي - إعدادي";
          break;

        case "135":
          td4.innerHTML = " خالد الأقرع  تعليم أساسي - ابتدائي";
          break;
        case "136":
          td4.innerHTML = " خالد الأقرع  تعليم أساسي - إعدادي";
          break;

        case "137":
          td4.innerHTML = "خليل  تعليم مجتمعي";
          break;

        case "138":
          td4.innerHTML = " زكي الابراشي  الابتدائية";
          break;
        case "139":
          td4.innerHTML = " زكي الابراشي  الإعدادية";
          break;

        case "140":
          td4.innerHTML = " زلط  تعليم أساسي - ابتدائي";
          break;
        case "141":
          td4.innerHTML = " زلط  تعليم أساسي - إعدادي";
          break;
        case "142":
          td4.innerHTML = "زهرة الابتدائية المشتركة";
          break;
        case "143":
          td4.innerHTML = "زهرة الإعدادية";
          break;
        case "144":
          td4.innerHTML = "سليمان بلبع  الابتدائية";
          break;

        case "145":
          td4.innerHTML = "سيدي غازي  الابتدائية الجديدة";
          break;

        case "146":
          td4.innerHTML = "سيدي غازي  الثانوية - فصول الخدمات ";
          break;

        case "147":
          td4.innerHTML = "سيدي غازي  الثانوية المشتركة ";
          break;

        case "148":
          td4.innerHTML = " سيف النصر  الابتدائية";
          break;

        case "149":
          td4.innerHTML = " سيف النصر  الابتدائية - فصول إعدادي";
          break;

        case "150":
          td4.innerHTML = " شارلو  الابتدائية";
          break;

        case "151":
          td4.innerHTML = " شبل  الابتدائية";
          break;

        case "152":
          td4.innerHTML = "شحاتة صديقة الفتيات";
          break;

        case "153":
          td4.innerHTML = " شركة عواد  تعليم أساسي - ابتدائي";
          break;
        case "154":
          td4.innerHTML = " شركة عواد  تعليم أساسي - إعدادي";
          break;

        case "155":
          td4.innerHTML = " شفيق أبوصالح  الابتدائية";
          break;

        case "156":
          td4.innerHTML = "  صدقي  تعليم أساسي - ابتدائي";
          break;

        case "157":
          td4.innerHTML = "  صدقي  تعليم أساسي - إعدادي";
          break;

        case "158":
          td4.innerHTML = "  صدقي سنيحة  تعليم أساسي - ابتدائي";
          break;
        case "159":
          td4.innerHTML = "  صدقي سنيحة  تعليم أساسي - إعدادي";
          break;
        case "160":
          td4.innerHTML = "  صيدناوي الحمراء  تعليم أساسي - ابتدائي";
          break;
        case "161":
          td4.innerHTML = "صيدناوي الحمراء  تعليم أساسي - إعدادي";
          break;
        case "162":
          td4.innerHTML = " صيدناوي الوسطى  الابتدائية";
          break;
        case "163":
          td4.innerHTML = "  صيدناوي الوسطى  الابتدائية - فصول إعدادي";
          break;
        case "164":
          td4.innerHTML = "  صيدناوي الكبرى  تعليم أساسي - ابتدائي";
          break;
        case "165":
          td4.innerHTML = "  صيدناوي الكبرى  تعليم أساسي - إعدادي";
          break;

        case "166":
          td4.innerHTML = "صيرة الإعدادية";
          break;
        case "167":
          td4.innerHTML = "  ضيف  الابتدائية";
          break;

        case "168":
          td4.innerHTML = "  عاداه الغربية  الابتدائية";
          break;

        case "169":
          td4.innerHTML = "عباس سيد أحمد الإعدادية";
          break;

        case "170":
          td4.innerHTML = "عبدالحميد عزت زعتر  تعليم أساسي - ابتدائي";
          break;

        case "171":
          td4.innerHTML = "عبدالحميد عزت زعتر  تعليم أساسي - إعدادي";
          break;

        case "172":
          td4.innerHTML = " عبدالصمد النمر  الابتدائية - ابتدائي";
          break;

        case "173":
          td4.innerHTML = "عبدالعزيز حبشي  الابتدائية";
          break;
        case "174":
          td4.innerHTML = "عبدالعزيز حبشي  الابتدائية - فصول إعدادي";
          break;

        case "175":
          td4.innerHTML = "عبدالقادر خليف  تعليم أساسي - إعدادي";
          break;

        case "176":
          td4.innerHTML = "عبدالوهاب الخراشي  الابتدائية";
          break;

        case "177":
          td4.innerHTML = "عبدالوهاب الخراشي  الإعدادية";
          break;

        case "178":
          td4.innerHTML = "عزب نوبار الابتدائية المشتركة";
          break;

        case "179":
          td4.innerHTML = "عزبة البنك  تعليم أساسي - ابتدائي";
          break;

        case "180":
          td4.innerHTML = "عزبة البنك  تعليم أساسي - إعدادي";
          break;

        case "181":
          td4.innerHTML = "عمر الحريري صديقة الفتيات";
          break;

        case "182":
          td4.innerHTML = "عنتر درويش  الابتدائية المشتركة";
          break;

        case "183":
          td4.innerHTML = " عوض التبي  تعليم أساسي - ابتدائي";
          break;
        case "184":
          td4.innerHTML = " عوض التبي  تعليم أساسي - إعدادي";
          break;

        case "185":
          td4.innerHTML = " فصول الحمراء  الإعدادية";
          break;

        case "186":
          td4.innerHTML = " فصول كرم 4  الإعدادية";
          break;

        case "187":
          td4.innerHTML = " فصول مرجان  الإعدادية";
          break;
        case "188":
          td4.innerHTML = " فصول منشأة ناصر  الإعدادية";
          break;
        case "189":
          td4.innerHTML = " فصول هلل  الإعدادية";
          break;

        case "190":
          td4.innerHTML = " قومبانية أبوقير  الابتدائية";
          break;
        case "191":
          td4.innerHTML = " قومبانية أبوقير  الإعدادية المشتركة";
          break;
        case "192":
          td4.innerHTML = " قومبانية لوقين  الابتدائية";
          break;
        case "193":
          td4.innerHTML = " قومبانية لوقين  الإعدادية";
          break;

        case "194":
          td4.innerHTML = "كدوة الرويعي  فصل واحد ";
          break;

        case "195":
          td4.innerHTML = "كدوة الكريون  تعليم أساسي - ابتدائي";
          break;
        case "196":
          td4.innerHTML = "كدوة الكريون  تعليم أساسي - إعدادي";
          break;
        case "197":
          td4.innerHTML = "كرم 4  الابتدائية";
          break;

        case "198":
          td4.innerHTML = " كناكي صديقة الفتيات";
          break;

        case "199":
          td4.innerHTML = "كوم الطرفاية الابتدائية";
          break;

        case "200":
          td4.innerHTML = "كوم الطرفاية الإعدادية";
          break;
        case "201":
          td4.innerHTML = "كوم النص الابتدائية";
          break;
        case "202":
          td4.innerHTML = "كوم النص الإعدادية";
          break;
        case "203":
          td4.innerHTML = " كوم النص صديقة الفتيات";
          break;

        case "204":
          td4.innerHTML = "كوم دفشو الابتدائية القديمة";
          break;

        case "205":
          td4.innerHTML = "كوم مازن  تعليم أساسي - ابتدائي";
          break;
        case "206":
          td4.innerHTML = "كوم مازن  تعليم أساسي - إعدادي";
          break;
        case "207":
          td4.innerHTML = "مارون  تعليم أساسي - ابتدائي";
          break;
        case "208":
          td4.innerHTML = "مارون  تعليم أساسي - إعدادي";
          break;
        case "209":
          td4.innerHTML = "محطة الكهرباء الابتدائية "; // td4.innerHTML = "محطة الكهرباء الابتدائية بمركز كفرالدوار";
          break;
        case "210":
          td4.innerHTML = "محطة الكهرباء الإعدادية "; // td4.innerHTML = "محطة الكهرباء الإعدادية بمركز كفرالدوار";
          break;
        case "211":
          td4.innerHTML = " محمد علي عودة الإعدادية";
          break;

        case "212":
          td4.innerHTML = "مرتانة  تعليم أساسي - ابتدائي";
          break;
        case "213":
          td4.innerHTML = "مرتانة  تعليم أساسي - إعدادي";
          break;
        case "214":
          td4.innerHTML = " مرجان الابتدائية";
          break;
        case "215":
          td4.innerHTML = "معتوق  تعليم أساسي - ابتدائي";
          break;
        case "216":
          td4.innerHTML = "معتوق  تعليم أساسي - إعدادي";
          break;
        case "217":
          td4.innerHTML = "معمل القزاز البلد الجديدة";
          break;
        case "218":
          td4.innerHTML = "معمل القزاز البلد الابتدائية";
          break;
        case "219":
          td4.innerHTML = "معمل القزاز البلد الإعدادية";
          break;
        case "220":
          td4.innerHTML = "معمل القزاز البلد الثانوية المشتركة";
          break;
        case "221":
          td4.innerHTML = "معمل القزاز البلد الثانوية المشتركة - فصول الخدمات";
          break;
        case "222":
          td4.innerHTML = "  منشأة بسيوني الابتدائية";
          break;
        case "223":
          td4.innerHTML = "منشأة بسيوني  تعليم أساسي - ابتدائي";
          break;
        case "224":
          td4.innerHTML = "منشأة بسيوني  تعليم أساسي - إعدادي";
          break;
        case "225":
          td4.innerHTML = "  منشأة عامر الابتدائية";
          break;
        case "226":
          td4.innerHTML = "منشأة ناصر الابتدائية بالكريون";
          break;
        case "227":
          td4.innerHTML = "منشأة أبوقير  تعليم أساسي - ابتدائي";
          break;
        case "228":
          td4.innerHTML = "منشأة أبوقير  تعليم أساسي - إعدادي";
          break;

        case "229":
          td4.innerHTML = "  منشأة بلبع الابتدائية";
          break;
        case "230":
          td4.innerHTML = "منشأة بولين  تعليم أساسي - ابتدائي";
          break;
        case "231":
          td4.innerHTML = "منشأة بولين  تعليم أساسي - إعدادي";
          break;
        case "232":
          td4.innerHTML = "منشأة يونس الابتدائية";
          break;
        case "233":
          td4.innerHTML = "منصور الشنديدي الابتدائية";
          break;
        case "234":
          td4.innerHTML = " نجع الشيخ عون  تعليم أساسي - ابتدائي";
          break;
        case "235":
          td4.innerHTML = " نجع الشيخ عون  تعليم أساسي - إعدادي";
          break;
        case "236":
          td4.innerHTML = " هشام فرج شهاب الابتدائية";
          break;
        case "237":
          td4.innerHTML = " هلل الابتدائية";
          break;

         
        /////////////////(new series of code)///////////////////////
        case "1001":
          td4.innerHTML = "ديوان الادارة";
          break;

        case "1002":
          td4.innerHTML = "أجازة";
          break;

        case "1003":
          td4.innerHTML = "ادارة بندر كفرالدوار";
          break;
        case "1004":
          td4.innerHTML = "ادارة المحمودية";
          break;
        case "1005":
          td4.innerHTML = "ادارة ادكو";
          break;
        case "1006":
          td4.innerHTML = "ادارة رشيد";
          break;
        case "1007":
          td4.innerHTML = "المديرية المركزية";
          break;
        case "1008":
          td4.innerHTML = "مأمورية";
          break;
        case "1009":
          td4.innerHTML = "مسابقة";
          break;
        case "1010":
          td4.innerHTML = "معرض";
          break;
        case "1011":
          td4.innerHTML = "المعسكر الكشفي";
          break;
        case "1012":
          td4.innerHTML = "جهات لا تتبع التعليم";
          break;
        case "1013":
          td4.innerHTML = "ديوان المحافظة";
          break;
        case "1014":
          td4.innerHTML = "ديوان الوزارة";
          break;
        case "1015":
          td4.innerHTML = "كنترول";
          break;
        case "1016":
          td4.innerHTML = "لجنة امتحانات";
          break;
        case "1017":
          td4.innerHTML = "لجنة إدارية";
          break;
        case "1018":
          td4.innerHTML = "المطبعة السرية";
          break;
        case "1019":
          td4.innerHTML = "المعرض";
          break;
        case "1020":
          td4.innerHTML = "مركز الموهوبين والتعليم الذكي";
          break;
        case "1021":
          td4.innerHTML = "مركز إعداد قادة";
          break;
        case "1022":
          td4.innerHTML = "مركز توزيع الأسئلة";
          break;
        case "1023":
          td4.innerHTML = "رعاية الطلاب";
          break;
        case "1024":
          td4.innerHTML = "تدريب";
          break;
        case "1025":
          td4.innerHTML = "تدريب عملي";
          break;
        case "1026":
          td4.innerHTML = "المدرسة الأصلية";
          break;
        case "1027":
          td4.innerHTML = "إجازة نصف الوقت";
          break;

        /////////////////(new series of code)

        default:
          td4.innerHTML = "لم تكود بعد";
          break;
      }
    });
  }

});

//////// the year of the plan
if (year === "2026") {
  switch (monthn) {
    case 3:
      daysNamesOrder = [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "السبت",
      ];
      arabic_month_name = "مارس";
      allMonthDaysNumbers = [
        1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23,
        24, 25, 26, 28, 29, 30, 31,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 4:
      arabic_month_name = "أبريل";
      daysNamesOrder = [
        "الأربعاء",
        "الخميس",
        "السبت",
        "الأحد",
        "الاثنين",
        "الثلاثاء",
      ];

      allMonthDaysNumbers = [
        1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23,
        25, 26, 27, 28, 29, 30,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;
      tr.appendChild(td1);

      break;

    case 5:
      arabic_month_name = "مايو";

      daysNamesOrder = [
        "السبت",
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
      ];

      allMonthDaysNumbers = [
        2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24,
        25, 26, 27, 28, 30, 31,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 6:
      arabic_month_name = "يونيو";
      daysNamesOrder = [
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "السبت",
        "الأحد",
      ];

      allMonthDaysNumbers = [
        1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23,
        24, 25, 27, 28, 29, 30,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 7:
      arabic_month_name = "يوليو";
      daysNamesOrder = [
        "الأربعاء",
        "الخميس",
        "السبت",
        "الأحد",
        "الاثنين",
        "الثلاثاء",
      ];

      allMonthDaysNumbers = [
        1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23,
        25, 26, 27, 28, 29, 30,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 8:
      arabic_month_name = "أغسطس";
      daysNamesOrder = [
        "السبت",
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
      ];

      allMonthDaysNumbers = [
        1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23,
        24, 25, 26, 27, 29, 30, 31,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 9:
      arabic_month_name = "سبتمبر";
      daysNamesOrder = [
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "السبت",
        "الأحد",
        "الاثنين",
      ];

      allMonthDaysNumbers = [
        1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23,
        24, 26, 27, 28, 29, 30,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 10:
      arabic_month_name = "أكتوبر";
      daysNamesOrder = [
        "الخميس",
        "السبت",
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
      ];

      allMonthDaysNumbers = [
        1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24,
        26, 27, 28, 29, 30, 31,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 11:
      arabic_month_name = "نوفمبر";
      daysNamesOrder = [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "السبت",
      ];

      allMonthDaysNumbers = [
        1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23,
        24, 25, 26, 28, 29, 30,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    case 12:
      arabic_month_name = "ديسمبر";
      daysNamesOrder = [
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "السبت",
        "الأحد",
        "الاثنين",
      ];

      allMonthDaysNumbers = [
        1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23,
        24, 26, 27, 28, 29, 30, 31,
      ];
      allMonthDaysNames = [
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
        ...daysNamesOrder,
      ];
      month_days = allMonthDaysNumbers.length;

      break;

    default:
      monthn = 3;
      arabic_month_name = "مارس";
      break;
  }
  document.getElementById("month").innerHTML = arabic_month_name;
}

let masterInfo = document.createElement("span");
masterInfo.setAttribute("id", "masterInfo");
masterInfo.style.color = "black";
masterInfo.style.position = "fixed";
masterInfo.style.width = "fit-content";
masterInfo.style.right = "5" + "%";
masterInfo.style.top = "0.3" + "%";
document.body.appendChild(masterInfo);


/*
window.addEventListener('beforeunload', function (e) {
    // إلغاء الحدث كما هو محدد في القياسات
    e.preventDefault();
    
    // بعض المتصفحات تتطلب تعيين قيمة لـ returnValue
    e.returnValue = '';
});

*/


//   حفظ البيانات عند التغيير
//   localStorage.setItem('saved_data', inputField.value);


/*
var BrowserDetect = function() {
    var nav = window.navigator,
    ua = window.navigator.userAgent.toLowerCase();
    // detect browsers (only the ones that have some kind of quirk we need to work around)
    if (ua.match(/ipad/i) !== null)
        return "iPod";
        //alert("ipod");
    if (ua.match(/iphone/i) !== null)
        return "iPhone";
  //alert("iphone");
    if (ua.match(/android/i) !== null)
        return "Android";
  //alert("Android");
    if ((nav.appName.toLowerCase().indexOf("microsoft") != -1 || nav.appName.toLowerCase().match(/trident/gi) !== null))
        return "IE";
  //alert("ie");
    if (ua.match(/chrome/gi) !== null)
        return "Chrome";
  //alert("chrome");
    if (ua.match(/firefox/gi) !== null)
        return "Firefox";
  //alert("firefox");
    if (ua.match(/webkit/gi) !== null)
        return "Webkit";
  //alert("webkit");
    if (ua.match(/gecko/gi) !== null)
        return "Gecko";
  //alert("gecko");
    if (ua.match(/opera/gi) !== null)
        return "Opera";
  //alert("opera");
    //If any case miss we will return null
    return null;
};




if(BrowserDetect() ==="iPod" || BrowserDetect()==="iPhone"){
  //
}else{
  let printBtnCreated = document.createElement("button");
      printBtnCreated.style.width="50"+"px";
  printBtnCreated.style.height="50"+"px";
  printBtnCreated.style.border="5px solid red";
  printBtnCreated.textContent="print";
  document.getElementById("mypoptogetinfo").appenChild(printBtnCreated);
  printBtnCreated.onclick=()=>{
    window.location.print();
  }
}

*/





