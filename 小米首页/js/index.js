// 定义鼠标滑过效果
function bgying() {
  // 获取所有div
  const divAll = document.querySelectorAll('div')
  divAll.forEach((item) => {
    item.classList.add('cursorP')
  })
  // 设置鼠标划过阴影
  const boxShadowEffect = document.querySelectorAll('.box-shadow-effect')
  boxShadowEffect.forEach((item) => {
    item.addEventListener('mouseover', function () {
      item.classList.add('common-item-active')
    })
    item.addEventListener('mouseout', function () {
      item.classList.remove('common-item-active')
    })
  })
}
bgying()
// ajax 渲染手机分类数据
const phoneLeft = document.querySelector('.phone-left')
let phoneItem
// 创建Ajax
const phoneXhr = new XMLHttpRequest()
phoneXhr.open('get', './json/phone.json')
phoneXhr.onreadystatechange = function () {
  //4.根据完成状态获取服务器响应给我的数据
  if (phoneXhr.status === 200 && phoneXhr.readyState === 4) {
    //因为返回的数据是字符串，转换程object对象
    let phoneData = JSON.parse(phoneXhr.responseText)
    //5.根据返回的数组对象，渲染页面dom(div.box)
    phoneItem = phoneData.map((item, index) => {
      return `
      <div class="phone-item box-shadow-effect">
      <img src="${item.img}" alt="">
      <div class="phone-item-title">${item.type}</div>
      <div class="phone-item-introduce">${item.dexc}</div>
      <div class="phone-item-price">${item.price}元起<span>${item.falsePrice}</span></div>
  </div>
             `
    })
    //渲染页面
    phoneLeft.innerHTML = phoneItem.join('')
  }
}
//发送请求
phoneXhr.send()

// Ajax渲染智能穿戴数据
// 智能穿戴里面的热门
const SmartWearLeftd1 = document.querySelector('.Smart-wear-left-d1')
let SmartWearItem
// 创建Ajax
const SmartWearXhr = new XMLHttpRequest()
SmartWearXhr.open('get', './json/smartwear.json')
SmartWearXhr.onreadystatechange = function () {
  //4.根据完成状态获取服务器响应给我的数据
  if (SmartWearXhr.status === 200 && SmartWearXhr.readyState === 4) {
    //因为返回的数据是字符串，转换程object对象
    let SmartWearData = JSON.parse(SmartWearXhr.responseText)
    //5.根据返回的数组对象，渲染页面dom(div.box)
    SmartWearItem = SmartWearData.map((item, index) => {
      return `
      
      <div class="Smart-wear-item box-shadow-effect">
      <img src="${item.img}" alt="">
      <div class="Smart-wear-item-title">${item.type}</div>
      <div class="Smart-wear-item-introduce">${item.dexc}</div>
      <div class="Smart-wear-item-price">${item.price}元起<span>${item.falsePrice}</span></div>
  </div>
             `
    })
    // 创建最后一个游览跟多数据
    const SmartWearVisitMore = `
    <div class="Smart-wear-visit-more box-shadow-effect">
    <div class="Smart-wear-visit">
        <div class="Smart-wear-visit-t">
        <p>游览更多</p>
        <p>热门</p>
        </div>
        <img src="img/555.png" alt="">
    </div>
</div>
</div>
    `
    //渲染页面
    SmartWearLeftd1.innerHTML = SmartWearItem.join('') + SmartWearVisitMore
  }
}
//发送请求
SmartWearXhr.send()
// 智能穿戴里面的穿戴
const SmartWearLeftd2 = document.querySelector('.Smart-wear-left-d2')
let SmartWearItem2
// 创建Ajax
const SmartWearXhr2 = new XMLHttpRequest()
SmartWearXhr2.open('get', './json/smartwearw.json')
SmartWearXhr2.onreadystatechange = function () {
  //4.根据完成状态获取服务器响应给我的数据
  if (SmartWearXhr2.status === 200 && SmartWearXhr2.readyState === 4) {
    //因为返回的数据是字符串，转换程object对象
    let SmartWearData2 = JSON.parse(SmartWearXhr2.responseText)
    //5.根据返回的数组对象，渲染页面dom(div.box)
    SmartWearItem2 = SmartWearData2.map((item, index) => {
      return `
      <div class="Smart-wear-item2 box-shadow-effect">
      <img src="${item.img}" alt="">
      <div class="Smart-wear-item2-title">${item.type}</div>
      <div class="Smart-wear-item2-introduce">${item.dexc}</div>
      <div class="Smart-wear-item2-price">${item.price}元起<span>${item.falsePrice}</span></div>
  </div>
             `
    })
    // 创建最后一个游览跟多数据
    const SmartWearVisitMore2 = `
    <div class="Smart-wear-visit-more box-shadow-effect">
    <div class="Smart-wear-visit">
        <div class="Smart-wear-visit-t">
        <p>游览更多</p>
        <p>热门</p>
        </div>
        <img src="img/555.png" alt="">
    </div>
</div>
    `
    //渲染页面
    SmartWearLeftd2.innerHTML = SmartWearItem2.join('') + SmartWearVisitMore2
  }
}
//发送请求
SmartWearXhr2.send()

// 智能穿戴里面的穿戴
const computerLeft = document.querySelector('.computer-left')
let computerItem
// 创建Ajax
const computerXhr = new XMLHttpRequest()
computerXhr.open('get', './json/computer.json')
computerXhr.onreadystatechange = function () {
  //4.根据完成状态获取服务器响应给我的数据
  if (computerXhr.status === 200 && computerXhr.readyState === 4) {
    //因为返回的数据是字符串，转换程object对象
    let computerData = JSON.parse(computerXhr.responseText)
    //5.根据返回的数组对象，渲染页面dom(div.box)
    computerItem = computerData.map((item, index) => {
      return `
      <div class="computer-item box-shadow-effect">
                <img src="${item.img}" alt="">
                <div class="computer-item-title">${item.type}</div>
                <div class="computer-item-introduce">${item.dexc}</div>
                <div class="computer-item-price">${item.price}元起<span>${item.falsePrice}</span></div>
            </div>
             `
    })
    // 创建最后一个游览跟多数据
    const computerMore = `
    <div class="box-shadow-effect" id="computeritem">
    <div class="computer-visit-more box-shadow-effect">
                <div class="computer-xian">
                    <div class="computer-xian-include">
                    <p>Redmi显示器</p>
                    <p>23.8英寸</p>
                    <p>599元</p>
                    </div>
                    <img src="img/240.png" alt="">
                </div>
            </div>
    <div class="computer-visit-more box-shadow-effect">
                <div class="computer-visit">
                    <div class="Smart-wear-visit-t">
                        <p>游览更多</p>
                        <p>热门</p>
                    </div>
                    <img src="img/555.png" alt="">
                </div>
            </div>
            
    </div>
    `
    //渲染页面
    computerLeft.innerHTML = computerItem.join('') + computerMore
  }
}
//发送请求
computerXhr.send()

// 鼠标滑过切换tab的穿戴和热门
const smartwearTab = document.querySelectorAll('.smartwearTab')
const smartwearTabconent = document.querySelectorAll('.smartwearTabconent')
for (let i = 0; i < smartwearTabconent.length; i++) {
  smartwearTab[i].onmouseover = function () {
    smartwearTabconent.forEach((item) => {
      item.style.display = 'none'
    })
    smartwearTabconent[i].style.display = 'flex'
  }
}
// 创建延迟
setTimeout(bgying, 100)
//生成随机颜色
const body = document.querySelector('body')
function bgcolor() {
  const randomHex = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, '0')}`
  body.style.background = randomHex()
}
// setInterval(bgcolor, 100)
