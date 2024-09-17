// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cutFromArray = (items: any[], index: number) => {
  return index > 0
    ? items.slice(0, index).concat(items.slice(index + 1, items.length))
    : items.length > 1
      ? items?.slice(1, items.length)
      : []
}

export const EMAIL_REG = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/

export const WEB_SITE_REG =
  // eslint-disable-next-line no-useless-escape
  /^(http[s]??\:\/\/)?([A-Za-zА-Яа-яЁё0-9\-\.]+\.[A-Za-zА-Яа-яЁё0-9]{2,6}|xn\-\-[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*\.[a-zA-Z]{2,6})(\/\S*)?$/

export const phoneMask = '+99999999999'

// Длина номера, начинающегося с "+7", должна быть равна 10.
// Для остальных номеров длина от 7 до 13
export const PHONE_REG = /^\+7[\d]{10}$|^\+[^7][\d]{7,13}$/
export const PHONE_INVALID_WARNING =
  'Длина номера, начинающегося с "+7", должна быть равна 11. Для остальных номеров длина от 8 до 14'

export const sanitizePhoneNumber = (phone: string) => {
  return phone.replace(/[(),\-_\s]/g, '')
}

export const getQueryParams = (query: any = null) => {
  return (
    (query || window.location.search.replace("?", ""))

      // get array of KeyValue pairs
      .split("&")

      // Decode values
      .map((pair: any) => {
        let [key, val] = pair.split("=");

        return [key, decodeURIComponent(val || "")];
      })

      // array to object
      // @ts-ignore
      .reduce((result, [key, val]) => {
        result[key] = val;
        return result;
      }, {})
  );
};

export const scrollToBlock = (id: string, offset = 20) => {
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset - offset;

    window.scrollTo({
      top: elementTop,
      behavior: "smooth",
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
