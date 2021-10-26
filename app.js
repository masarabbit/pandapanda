function init() {

  //TODO change color when pandas collide
  
  const body = document.querySelector('.wrapper')
  const indicator = document.querySelector('.indicator')
  const animationFrames = {
    walk: [0, 1, 2, 1]
  }
  const cellSize = 100
  const directions = {
    up: 0,
    dUp: 1,
    side: 2,
    dDown: 3,
    down: 4,
  }
  const sprites = {
    up: 'up',
    upright: 'dUp',
    right: 'side',
    downright: 'dDown',
    down: 'down',
    downleft: 'dDown',
    left: 'side',
    upleft: 'dUp',
  }
  const turnDirections = Object.keys(sprites)
  const vertical = ['up', 'down', '']
  const horizontal = ['left', 'right', '']
  const pandas = {}
  const frameSpeed = 150
  const moveSpeed = 1000
  // const moveSpeed = 200
  const pandaIndicators = []
  let pandaCount = 0

  const animatePanda = (panda, pandaObj, animation) =>{
    const i = pandaObj.frame
    const pandaSprite = panda.childNodes[1].childNodes[1]
    pandaSprite.style.marginLeft = `-${animationFrames[animation][i] * cellSize}px`
    pandaSprite.style.marginTop = `-${cellSize * directions[sprites[pandaObj.direction]]}px`
    pandaObj.frame = i === animationFrames[animation].length - 1 ? 0 : i + 1
  }

  
  const randomN = () =>{
    return (Math.random() * 500).toFixed(2)
  }

  const randomD = arr =>{
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const stopPanda = (panda, pandaObj) =>{
    clearInterval(pandaObj.frameInterval)
    panda.style.marginLeft = panda.style.offsetLeft
    panda.style.marginTop = panda.style.offsetTop
    pandaObj.stop = true

    // setInterval(()=>{
    //   pandaObj.ready = true
    // },1000)
  }

  const startPanda = (panda, pandaObj) =>{
    pandaObj.frameInterval = setInterval(()=>{
      animatePanda(panda, pandaObj, 'walk')
    }, frameSpeed)
    pandaObj.stop = false
    // panda.ready = false
  }

  const oldmoveAbout = (panda, pandaObj) =>{
    const randomVert = randomD(vertical)
    const randomHori = randomD(horizontal)
    // const randomDistance = Math.round(Math.random() * 100) + 50
    const randomDistance = 100
    const { marginLeft, marginTop } = panda.style
    
    pandaObj.direction = randomVert + randomHori

    let x = +marginLeft.replace('px','')
    let y = +marginTop.replace('px','')
    
    if (randomHori !== '') x += randomHori === 'left' ? -randomDistance : randomDistance
    if (randomVert !== '') y += randomVert === 'up' ? -randomDistance : randomDistance
    panda.childNodes[1].className = `panda_inner_wrapper ${randomHori}`

    // console.log('x', x, 'y', y)
    // console.log('width', body.clientWidth, 'height', body.clientHeight)
    // console.log('randomVert randomHori', randomVert + randomHori, 'x', x, pandaObj.prev[0], 'y', y, pandaObj.prev[1])

    if (panda.stop) startPanda(panda, pandaObj)
    if ((randomVert + randomHori) === '' || (x === pandaObj.prev[0] && y === pandaObj.prev[1])){
      stopPanda(panda, pandaObj)
    } 
    
    if (x > 100 && x < (body.clientWidth - 100)){
      panda.style.marginLeft = `${x}px`
      pandaObj.prev[0] = x
    } 
    if (y > 100 && y < (body.clientHeight - 100)){
      panda.style.marginTop = `${y}px`
      pandaObj.prev[1] = y
    }  
  }

  const moveAbout = (panda, pandaObj) =>{
    const turnOptions = [1, 1, -1, -1 , 0]
    const turnValue = turnOptions[Math.floor(Math.random() * turnOptions.length)]
    pandaObj.turnIndex += turnValue
    if (pandaObj.turnIndex < 0) pandaObj.turnIndex = 7
    if (pandaObj.turnIndex > 7) pandaObj.turnIndex = 0
    pandaObj.direction = turnDirections[pandaObj.turnIndex]
    const { direction: dir } = pandaObj
    panda.childNodes[1].className = `panda_inner_wrapper ${dir}`
    
    const { marginLeft, marginTop } = panda.style
    let x = +marginLeft.replace('px','')
    let y = +marginTop.replace('px','')
    
    const randomDistance = Math.round(Math.random() * 100) + 50
    if (dir !== 'up' && 'dir' !== 'down') x += (dir.includes('left')) ? -randomDistance : randomDistance
    if (dir !== 'left' && 'dir' !== 'right') y += (dir.includes('up')) ? -randomDistance : randomDistance

    if (panda.stop) startPanda(panda, pandaObj)
    if (x === pandaObj.prev[0] && y === pandaObj.prev[1]){
      console.log('trigger')
      stopPanda(panda, pandaObj)
    } 
    
    //TODO can it turn based on if close to edge? 
    if (x > 0 && x < (body.clientWidth - 100)){
      panda.style.marginLeft = `${x}px`
      pandaObj.prev[0] = x
    } 
    if (y > 0 && y < (body.clientHeight - 100)){
      panda.style.marginTop = `${y}px`
      pandaObj.prev[1] = y
    }  
  }
  
  const test = 'upleft'
  console.log(test.includes('up'))

  const createPanda = () =>{
    const panda = document.createElement('div')
    panda.className = 'panda_wrapper'
    panda.innerHTML = `
    <div class="panda_inner_wrapper">
      <div class="panda_sprite">
        <img src="1up.png" alt="panda" />
        <img src="2dup.png" alt="panda" />
        <img src="3side.png" alt="panda" />
        <img src="4ddown.png" alt="panda" />
        <img src="5down.png" alt="panda" />
      </div>
      <div class="hit_wrapper"><div class="hit_area"></div></div>
    </div>
    `
    panda.style.marginTop = `${body.clientHeight / 2}px`
    panda.style.marginLeft = `${body.clientWidth / 2}px`
    // panda.style.marginLeft = `${randomN()}px`
    // panda.style.marginTop = `${randomN()}px`

    body.append(panda)

    pandas[`panda-${pandaCount}`] = { 
      panda,
      frame: 0, 
      direction: 'down',
      frameInterval: null,
      walkInterval: null,
      turnIndex: 0,
      prev: [panda.style.marginLeft, panda.style.marginTop], 
    }
    const pandaObj = pandas[`panda-${pandaCount}`]
    const pandaStatus = document.createElement('p')
    pandaStatus.dataset.index = pandaCount
    indicator.append(pandaStatus)
    pandaIndicators.push(pandaStatus)
    
    startPanda(panda, pandaObj)
    moveAbout(panda, pandaObj)
    pandaObj.walkInterval = setInterval(()=>{
      moveAbout(panda, pandaObj)
    }, moveSpeed)
    
    // console.log(moveAbout(panda, pandaObj))

    pandaCount++
  }
  
  new Array(10).fill('').forEach(()=> createPanda())

  setInterval(()=>{
    pandaIndicators.forEach((indicator, i)=>{
      const { panda } = pandas[`panda-${i}`]
      indicator.innerHTML = `panda-${i} x:${panda.offsetLeft}px y:${panda.offsetTop}px`
    })
  },100)

  const topEdge = area =>{
    return area.getBoundingClientRect().y
  }

  const bottomEdge = area =>{
    // console.log('h', area.clientHeight)
    return area.getBoundingClientRect().y + area.clientHeight
  }

  const leftEdge = area =>{
    return area.getBoundingClientRect().x
  }

  const rightEdge = area =>{
    // console.log('w', area.clientWidth)
    return area.getBoundingClientRect().x + area.clientWidth
  }

  const collide = (direction, pandaDirection, areaEdge, otherEdge) =>{
    return !!(
      direction === pandaDirection &&
      Math.abs(areaEdge - otherEdge) < 5 
      ) //TODO if bottom edge and top edge match, side edges also need to match
  }



  const checkCollision = () =>{
    const hitAreas = document.querySelectorAll('.hit_area')
    hitAreas.forEach((area, i)=>{
      const pandaObj = pandas[`panda-${i}`]
      const { direction } = pandaObj
      // console.log(area.parentNode)
      // area.parentNode.style.borderColor = 'green'
      area.innerHTML = direction + topEdge(area)

      hitAreas.forEach((other, i) =>{
        const panda = pandas[`panda-${i}`]
        // console.log('panda', panda.panda)

        if (other === area) return
        
        if (collide(direction, 'up', topEdge(area), bottomEdge(other))) {
          area.style.backgroundColor = 'red'
          stopPanda(panda.panda, panda)
        }

        else if (collide(direction, 'right', rightEdge(area), leftEdge(other))) {
          area.style.backgroundColor = 'orange'
          stopPanda(panda.panda, panda)
        } else {
          
          if (panda.stop) {
            area.style.backgroundColor = 'transparent'
            startPanda(panda.panda, panda)
          }

        }

      })
    })
  }
  
  setInterval(()=>{
    checkCollision()
  },100)
  


}

window.addEventListener('DOMContentLoaded', init)
