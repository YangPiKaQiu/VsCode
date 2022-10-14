//图片数组 用于轮播
let imgs = [
  'image/1.jpg',
  'image/2.webp',
  'image/3.webp',
  'image/4.webp',
  'image/5.webp',
]

//创建当前索引
let pos = 0

//获取dom元素
let itemsDiv
let lunbotuImg = document.querySelector('.lunbotu-img img')
let lunbotu = document.querySelector('.lunbotu')
let lunbotuArrow = document.querySelectorAll('.lunbotu-arrow')
let lunbotuBtn = document.querySelectorAll('.lunbotu-btn ul li')
let ificatyAll = document.querySelectorAll('.ificaty-all')
let ificatyPhoneDiv = document.querySelectorAll('.ificatyPhone')
let ificatyPhoneDiv2 = document.querySelector('.ificatyPhone2')
//分页按钮高亮
function lunbotuActive(pos) {
  lunbotuBtn.forEach((item) => {
    item.classList.remove('lunbotu-btn-active')
  })
  lunbotuBtn.forEach((item, index) => {
    if (pos === index) {
      item.classList.add('lunbotu-btn-active')
    }
  })
}

//分页按钮点击事件
lunbotuBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    lunbotuActive(index)
    lunbotuImg.setAttribute('src', imgs[index])
  })
})

//下一张图片
function next() {
  if (pos >= imgs.length - 1) {
    pos = 0
  } else {
    pos++
  }
  lunbotuImg.setAttribute('src', imgs[pos])
  lunbotuActive(pos)
}

//上一张图片
function pre() {
  if (pos <= 0) {
    pos = imgs.length - 1
  } else {
    pos--
  }
  lunbotuImg.setAttribute('src', imgs[pos])
  lunbotuActive(pos)
}

//创建定时器
let t1 = setInterval(() => {
  next()
}, 3000)

//鼠标悬浮时计时器停止
lunbotu.addEventListener('mouseover', () => {
  clearInterval(t1)
})

//鼠标移出时定时器开始
lunbotu.addEventListener('mouseout', () => {
  t1 = setInterval(() => {
    next()
  }, 3000)
})

//箭头绑定点击事件
//左箭头
lunbotuArrow[0].addEventListener('click', pre)
lunbotuArrow[0].style.backgroundPosition = -84 + 'px '
lunbotuArrow[0].addEventListener('mouseover', () => {
  lunbotuArrow[0].style.backgroundPosition = 0 + 'px '
})
lunbotuArrow[0].addEventListener('mouseout', () => {
  lunbotuArrow[0].style.backgroundPosition = -84 + 'px '
})
//右箭头
lunbotuArrow[1].addEventListener('click', next)
lunbotuArrow[1].style.backgroundPosition = -126 + 'px '
lunbotuArrow[1].addEventListener('mouseover', () => {
  lunbotuArrow[1].style.backgroundPosition = -42 + 'px '
})
lunbotuArrow[1].addEventListener('mouseout', () => {
  lunbotuArrow[1].style.backgroundPosition = -126 + 'px '
})

//左边分类
ificatyAll.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('ificatyAcive')
    ificatyPhoneDiv[index].style.display = 'flex'
  })

  item.addEventListener('mouseout', () => {
    item.classList.remove('ificatyAcive')
    ificatyPhoneDiv[index].style.display = 'none'
  })
})

//创建xhr对象
let xhr = new XMLHttpRequest()
let xhr2 = new XMLHttpRequest()
let xhr3 = new XMLHttpRequest()
let xhr4 = new XMLHttpRequest()
let xhr5 = new XMLHttpRequest()
let xhr6 = new XMLHttpRequest()
let xhr7 = new XMLHttpRequest()
let xhr8 = new XMLHttpRequest()
let xhr9 = new XMLHttpRequest()
let xhr10 = new XMLHttpRequest()

//创建请求
xhr.open('get', './json/phoneone.json')
xhr2.open('get', './json/tv.json')
xhr3.open('get', './json/笔记本 平板.json')
xhr4.open('get', './json/出行穿戴.json')
xhr5.open('get', './json/耳机音箱.json')
xhr6.open('get', './json/家电.json')
xhr7.open('get', './json/智能路由器.json')
xhr8.open('get', './json/电源配件.json')
xhr9.open('get', './json/健康儿童.json')
xhr10.open('get', './json/生活箱包.json')

//xhr的响应事件
xhr.onreadystatechange = function () {
  if (xhr.status === 200 && xhr.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[0].innerHTML = itemsDiv.join('')
  }
}
xhr2.onreadystatechange = function () {
  if (xhr2.status === 200 && xhr2.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr2.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[1].innerHTML = itemsDiv.join('')
  }
}
xhr3.onreadystatechange = function () {
  if (xhr3.status === 200 && xhr3.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr3.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[2].innerHTML = itemsDiv.join('')
  }
}
xhr4.onreadystatechange = function () {
  if (xhr4.status === 200 && xhr4.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr4.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[3].innerHTML = itemsDiv.join('')
  }
}
xhr5.onreadystatechange = function () {
  if (xhr5.status === 200 && xhr5.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr5.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[4].innerHTML = itemsDiv.join('')
  }
}
xhr6.onreadystatechange = function () {
  if (xhr6.status === 200 && xhr6.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr6.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[5].innerHTML = itemsDiv.join('')
  }
}
xhr7.onreadystatechange = function () {
  if (xhr7.status === 200 && xhr7.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr7.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[6].innerHTML = itemsDiv.join('')
  }
}
xhr8.onreadystatechange = function () {
  if (xhr8.status === 200 && xhr8.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr8.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[7].innerHTML = itemsDiv.join('')
  }
}
xhr9.onreadystatechange = function () {
  if (xhr9.status === 200 && xhr9.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr9.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[8].innerHTML = itemsDiv.join('')
  }
}
xhr10.onreadystatechange = function () {
  if (xhr10.status === 200 && xhr10.readyState === 4) {
    // console.log(xhr.responseText);
    let data = JSON.parse(xhr10.responseText)
    // console.log(data);
    itemsDiv = data.map((item) => {
      return `
            <div class="ificatyPhoneDiv">
                    <div class="ificatyPhoneDiv1"><img src="${item.img}" alt=""></div>
                    <div class="ificatyPhoneDiv2">${item.type}</div>
                </div>
            `
    })
    ificatyPhoneDiv[9].innerHTML = itemsDiv.join('')
  }
}

//发送请求
xhr.send()
xhr2.send()
xhr3.send()
xhr4.send()
xhr5.send()
xhr6.send()
xhr7.send()
xhr8.send()
xhr9.send()
xhr10.send()
