export const flagemojiToPNG = (flag) => {
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

export const formatDate = (date, includeWeekday = false) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  if (includeWeekday) options.weekday = "long";

  return new Intl.DateTimeFormat("en", options).format(new Date(date));
};
