function init() {

  //TODO change color when pandas collide

  // edit collision logic, and make pandas slide in the opposite direction to hit direction

  // TODO could hitarea size be changed based on panda's pose?
  // TODO limit how much it slides

  const body = document.querySelector('.wrapper')
  const indicator = document.querySelector('.indicator')
  const animationFrames = {
    walk: [0, 1, 2, 1],
    stop: [0],
    fall: [3, 4, 5, 6, 5, 7],
    fallen: [7],
    standUp: [7, 8, 9, 10, 11, 12]
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
  const pandas = {}
  const pandaIndicators = []
  let pandaCount = 0

  const animatePanda = (panda, pandaObj) =>{
    const { frame:i, animation, frameSpeed} = pandaObj
    const pandaSprite = panda.childNodes[1].childNodes[1]
    pandaSprite.style.marginLeft = `-${animationFrames[animation][i] * cellSize}px`
    pandaSprite.style.marginTop = `-${cellSize * directions[sprites[pandaObj.direction]]}px`
    pandaObj.frame = i === animationFrames[animation].length - 1 ? 0 : i + 1
    pandaObj.frameTimer = setTimeout(()=>{
      animatePanda(panda, pandaObj)
    }, frameSpeed)
  }

  const changeAnimation = (pandaObj, animation) => {
    pandaObj.frame = 0
    pandaObj.animation = animation
  }

  const stopPanda = (panda, pandaObj) =>{
    changeAnimation(pandaObj, 'stop')
    panda.style.marginLeft = panda.style.offsetLeft
    panda.style.marginTop = panda.style.offsetTop
    pandaObj.stop = true
  }

  const startPanda = (panda, pandaObj) =>{
    animatePanda(panda, pandaObj)
    pandaObj.stop = false
  }

  const pandaMarginLeft = panda => +panda.style.marginLeft.replace('px', '')
  const pandaMarginTop = panda => +panda.style.marginTop.replace('px', '')

  const checkBoundaryAndUpdatePandaPos = (x, y, panda, pandaObj) =>{
    if (x > 0 && x < (body.clientWidth - 100)){
      panda.style.marginLeft = `${x}px`
      pandaObj.prev[0] = x
    } 
    if (y > 0 && y < (body.clientHeight - 100)){
      panda.style.marginTop = `${y}px`
      pandaObj.prev[1] = y
    }
  }

  const slidePanda = (panda, pandaObj) =>{
    let x = pandaMarginLeft(panda)
    let y = pandaMarginTop(panda)

    const distance = 50
    if (pandaObj.hit.includes('left')) x += distance
    if (pandaObj.hit.includes('right')) x -= distance
    if (pandaObj.hit.includes('up')) y += distance
    if (pandaObj.hit.includes('down')) y -= distance
    
    checkBoundaryAndUpdatePandaPos(x, y, panda, pandaObj)
  } 

  const knockPanda = (panda, pandaObj) =>{
    if (pandaObj.knocked) return
    pandaObj.knocked = true 
    pandaObj.stop = true
    slidePanda(panda, pandaObj)
    changeAnimation(pandaObj, 'fall')

    const a = 150 * 6
    const b = 1000 * (Math.ceil(Math.random() * 4) + 1)
    const c = 150 * 6

    pandaObj.frameTimer = setTimeout(()=>{
      changeAnimation(pandaObj, 'fallen')
    }, a)

    pandaObj.frameTimer = setTimeout(()=>{
      changeAnimation(pandaObj, 'standUp')
    }, a + b)

    pandaObj.frameTimer = setTimeout(()=>{
      changeAnimation(pandaObj, 'walk')
      pandaObj.hit = false
      pandaObj.knocked = false
      pandaObj.stop = false
      panda.classList.remove('stop')
      moveAbout(panda, pandaObj)
    }, a + b + c)

  }


  const moveAbout = (panda, pandaObj) =>{
    if (pandaObj.hit) return
    const turnOptions = [1, 1, -1, -1 , 0]
    const turnValue = turnOptions[Math.floor(Math.random() * turnOptions.length)]
    pandaObj.turnIndex += turnValue
    if (pandaObj.turnIndex < 0) pandaObj.turnIndex = 7
    if (pandaObj.turnIndex > 7) pandaObj.turnIndex = 0
    pandaObj.direction = turnDirections[pandaObj.turnIndex]
    const { direction: dir } = pandaObj
    panda.childNodes[1].className = `panda_inner_wrapper facing_${dir}`
    
    let x = pandaMarginLeft(panda)
    let y = pandaMarginTop(panda)
    
    // const randomDistance = Math.round(Math.random() * 100) + 50
    const distance = 50
    if (dir !== 'up' && 'dir' !== 'down') x += (dir.includes('left')) ? -distance : distance
    if (dir !== 'left' && 'dir' !== 'right') y += (dir.includes('up')) ? -distance : distance

    if (x === pandaObj.prev[0] && y === pandaObj.prev[1]){
      console.log('trigger')
      stopPanda(panda, pandaObj)
    } 
    
    //TODO can it turn based on if close to edge? 
    checkBoundaryAndUpdatePandaPos(x, y, panda, pandaObj)

    if (!pandaObj.stop) pandaObj.moveTimer = setTimeout(()=>{
      moveAbout(panda, pandaObj)
    }, pandaObj.moveSpeed)
  }
  
  const randomMoveSpeed = () =>{
    const range = [850, 900, 950, 1000, 1100]
    return range[Math.floor(Math.random() * range.length)]
  }

  const mapPandaAssets = () =>{
    return ['1up', '2dup', '3side', '4ddown', '5down'].map(file =>{
      return  `<img src="/assets/${file}.png" alt="panda" />`
    }).join('')
  }

  const mapHitCorners = pandaCount =>{
    return ['upleft', 'upright', 'downleft', 'downright'].map(dir =>{
      return  `<div class="hit_corner" data-pos="${dir}" data-id="${pandaCount}" ></div>`
    }).join('')
  }

  const createPanda = (x, y) =>{
    const panda = document.createElement('div')
    panda.className = 'panda_wrapper'
    panda.innerHTML = `
    <div class="panda_inner_wrapper">
      <div class="panda_sprite">
        ${mapPandaAssets()}
      </div>
      <div class="hit_wrapper">
        <div class="hit_area">
          ${mapHitCorners(pandaCount)}
        </div>
      </div>
    </div>
    `
    panda.style.marginTop = `${y}px`
    panda.style.marginLeft = `${x}px`
    body.append(panda)

    pandas[pandaCount] = { 
      panda,
      animation: 'walk',
      frame: 0, 
      direction: 'down',
      frameTimer: null,
      moveTimer: null,
      turnIndex: 0,
      frameSpeed: 150,
      moveSpeed: randomMoveSpeed(),
      prev: [panda.style.marginLeft, panda.style.marginTop], 
    }
    const pandaObj = pandas[pandaCount]
    const pandaStatus = document.createElement('p')
    pandaStatus.dataset.index = pandaCount
    indicator.append(pandaStatus)
    pandaIndicators.push(pandaStatus)
    
    startPanda(panda, pandaObj)
    moveAbout(panda, pandaObj)
    
    // console.log(moveAbout(panda, pandaObj))

    pandaCount++
  }
  
  const randomP = max =>{
    return Math.ceil(Math.random() * max)
  }
  
  new Array(10).fill('').map(()=>{
    return [randomP(body.clientWidth - 100), randomP(body.clientHeight - 100)]
  }).forEach( pos => {
    createPanda(pos[0], pos[1])
  })

  // const test = [[100, 100], [150, 150]]
  // test.forEach( pos => {
  //   createPanda(pos[0], pos[1])
  // })

  setInterval(()=>{
    pandaIndicators.forEach((indicator, i)=>{
      const { panda } = pandas[i]
      indicator.innerHTML = `panda-${i} x:${panda.offsetLeft}px y:${panda.offsetTop}px ${pandas[i].hit}`
    })
  },100)

  
  const hitCorners = document.querySelectorAll('.hit_corner')

  const hitObj = n =>{
    let obj = {}
    for(let i = 0; i < n; i++){
      obj[i] = {
        upleft: false,
        upright: false,
        downleft: false,
        downright: false,
      }
    }
    return obj
  }

  const hitCheck = (hitDirection, pandaObj, pandaDirection) =>{
    if (hitDirection) { 
      pandaObj.direction = pandaDirection 
      pandaObj.hit = pandaDirection
    }
  }

  const overlap = (a, b) =>{
    const buffer = 30
    return Math.abs(a - b) < buffer
  }

  const collisionCheck = () =>{
    const hit = hitObj(pandaCount)
    hitCorners.forEach(h=>h.style.backgroundColor = 'transparent')
    hitCorners.forEach(a=>{
      const { x:aX, y:aY, width:aW, height:aH } = a.getBoundingClientRect()
      const { id:aId, pos:aPos } = a.dataset
      hitCorners.forEach(b=>{
        const { id:bId, pos:bPos } = b.dataset
        if (aId === bId) return
        const { x:bX, y:bY, width:bW, height:bH } = b.getBoundingClientRect()
        if (overlap(aX, bX) && overlap(aX + aW, bX + bW) && overlap(aY, bY) && overlap(aY + aH, bY + bH)
          ) {
            hit[aId][aPos] = true
            hit[bId][bPos] = true
            a.style.backgroundColor = 'orange'
            b.style.backgroundColor = 'orange'
          }
      })
    })
    // console.log('hit', hit)
    for (let i = 0; i < pandaCount; i++){
      const { upleft, upright, downleft, downright } = hit[i]
      const panda = pandas[i]

      hitCheck(upleft, panda, 'upleft')
      hitCheck(downleft, panda, 'downleft')
      hitCheck(upright, panda, 'upright')
      hitCheck(downright, panda, 'downright')

      hitCheck(upleft && downleft, panda, 'left')
      hitCheck(upright && downright, panda, 'right')
      hitCheck(upleft && upright, panda, 'up')
      hitCheck(downleft && downright, panda, 'down')

      // TODO what if all hit check is true?
  
      if ( upleft || upright || downleft || downright && !panda.knocked) {
        pandas[i].panda.classList.add('stop')
        const { direction } = panda
        panda.panda.childNodes[1].className = `panda_inner_wrapper facing_${direction}`
        knockPanda(panda.panda, panda)
        // slidePanda(panda.panda, panda)
      }
    }
  }

  setInterval(collisionCheck, 50)



  // moving for test
  window.addEventListener('keyup',(e)=>{
    const hitAreas = document.querySelectorAll('.hit_area')
    const k = e.key.toLowerCase().replace('arrow','')[0]
    const pObj = pandas[0]
    // console.log(panda)
    const { turnIndex:t, panda:p } = pObj
    if (k === 'x') pObj.turnIndex = t === 7 ? 0 : t + 1
    if (k === 'z') pObj.turnIndex = t === 0 ? 7 : t - 1
    
    hitAreas[0].style.backgroundColor = 'transparent'
    if (pObj.stop) startPanda(p, pObj)

    pObj.direction = turnDirections[pObj.turnIndex]
    const { direction: dir } = pObj
    p.childNodes[1].className = `panda_inner_wrapper ${dir}`

    const { marginLeft, marginTop } = p.style
    let x = +marginLeft.replace('px','')
    let y = +marginTop.replace('px','')

    if (k === 'u') p.style.marginTop = `${y - 10}px`
    if (k === 'd') p.style.marginTop = `${y + 10}px`
    if (k === 'r') p.style.marginLeft = `${x + 10}px`
    if (k === 'l') p.style.marginLeft = `${x - 10}px`

    // console.log(pandas)
  })


  const makeDraggable = (panda, pandaObj) =>{

    const onDrag = e => {
      // const { x: offSetX, y: offSetY } = body.getBoundingClientRect()
      const newX = e.clientX
      const newY = e.clientY
      panda.style.marginLeft = `${newX - 50}px`
      panda.style.marginTop = `${newY - 50}px`
    }
    const onLetGo = () => {
      document.removeEventListener('mousemove', onDrag)
      document.removeEventListener('mouseup', onLetGo)

      if (!pandaObj.hit) {
        pandaObj.stop = false
        moveAbout(panda, pandaObj)
        panda.classList.remove('stop')
      }
      
    } 
    const onGrab = () => {
      // if (!pandaObj.hit) return
      document.addEventListener('mousemove', onDrag)
      document.addEventListener('mouseup', onLetGo)
      pandaObj.stop = true
      panda.classList.add('stop')
    }
    panda.addEventListener('mousedown', onGrab)
  }
  

  for (let x = 0; x < pandaCount; x++){
    const p = pandas[x]
    makeDraggable(p.panda, p)
  }
}

window.addEventListener('DOMContentLoaded', init)

