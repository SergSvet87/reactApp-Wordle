export const getData = () => {

  return fetch('https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json&#39')
    .then((res) => res.json())
    .then(data => {

      const arr = data
      console.log(arr);
      localStorage.setItem('goods', JSON.stringify(arr))

      // renderGoods(arr)
    })
}