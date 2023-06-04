export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return day + " de " + getNameMonth(month) + " de " + year;
}

export function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

export function formatDateV2(date) {
  let d = new Date(date);
  let options = { year: "numeric", month: "long", day: "numeric" };
  return d.toLocaleDateString("es-MX", options);
}

function getNameMonth(month) {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  return months[month - 1];
}
