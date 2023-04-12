fetch(
  "//api.nostramap.com/nostraapi/v2.0?key={Gg1)Y2enEyg4eAqGhDjfRlFmgdUCHPskAxIWnY1kjW(S6HmXFfe0ykzwILaNofwuEkVyKYUlUY932kP5Eo4bC7m=====2}"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
