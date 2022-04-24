export const getHotels = (location, checkIn, checkOut) => {
  return fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=50`, {
    method: 'GET',
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}
