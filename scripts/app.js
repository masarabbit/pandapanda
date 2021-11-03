function init() {

  //TODO change color when pandas collide

  // edit collision logic, and make pandas slide in the opposite direction to hit direction

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

  const knockPanda = (panda, pandaObj) =>{
    if (pandaObj.knocked) return
    pandaObj.knocked = true 
    pandaObj.stop = true
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
    panda.childNodes[1].className = `panda_inner_wrapper ${dir}`
    
    const { marginLeft, marginTop } = panda.style
    let x = +marginLeft.replace('px','').replace('%','')
    let y = +marginTop.replace('px','').replace('%','')
    
    // const randomDistance = Math.round(Math.random() * 100) + 50
    const distance = 50
    if (dir !== 'up' && 'dir' !== 'down') x += (dir.includes('left')) ? -distance : distance
    if (dir !== 'left' && 'dir' !== 'right') y += (dir.includes('up')) ? -distance : distance


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

    if (!pandaObj.stop) pandaObj.moveTimer = setTimeout(()=>{
      moveAbout(panda, pandaObj)
    }, pandaObj.moveSpeed)
  }
  
  const randomMoveSpeed = () =>{
    const range = [850, 900, 950, 1000, 1100]
    return range[Math.floor(Math.random() * range.length)]
  }

  const createPanda = (x, y) =>{
    const panda = document.createElement('div')
    panda.className = 'panda_wrapper'
    panda.innerHTML = `
    <div class="panda_inner_wrapper">
      <div class="panda_sprite">
        <img src="/assets/1up.png" alt="panda" />
        <img src="/assets/2dup.png" alt="panda" />
        <img src="/assets/3side.png" alt="panda" />
        <img src="/assets/4ddown.png" alt="panda" />
        <img src="/assets/5down.png" alt="panda" />
      </div>
      <div class="hit_wrapper"><div class="hit_area" dataset-id="${pandaCount}" ></div></div>
    </div>
    `
    panda.style.marginTop = `${y}px`
    panda.style.marginLeft = `${x}px`

    body.append(panda)

    pandas[`panda-${pandaCount}`] = { 
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
    const pandaObj = pandas[`panda-${pandaCount}`]
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
      const { panda } = pandas[`panda-${i}`]
      indicator.innerHTML = `panda-${i} x:${panda.offsetLeft}px y:${panda.offsetTop}px ${pandas[`panda-${i}`].hit}`
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

  const collide = (areaEdge, otherEdge, b) =>{
    const buffer = b || 5
    return Math.abs(areaEdge - otherEdge) < buffer
  }


  const collisionCheck = 
  (area, other, edgeOne, edgeTwo, edgeThree, edgeFour, buffer) => {
    return  collide(edgeOne(area), edgeTwo(other)) && 
            collide(edgeThree(area), edgeThree(other), buffer) &&
            collide(edgeFour(area), edgeFour(other), buffer) && 
            !other.knocked
  }

  const diagonalCollisionCheck = 
  (area, other, edgeOne, edgeTwo, edgeThree, edgeFour, buffer1, buffer2) => {
    return  collide(edgeOne(area), edgeTwo(other)) && 
            collide(edgeThree(area), edgeFour(other), buffer1) &&
            collide(edgeFour(area), edgeThree(other), buffer2) && 
            !other.knocked
  }


  const checkCollisions = () =>{
    // const hit = []
    const hitAreas = document.querySelectorAll('.hit_area')
    hitAreas.forEach((area, aI)=>{
      const pandaObj = pandas[`panda-${aI}`]
      if (pandaObj.stop) return
      // const { direction } = pandaObj

      hitAreas.forEach((other, oI) =>{
        // console.log('count', area) 
        //TODO playing too many times, maybe shouldn't do forEach within a forEach ? maybe make hit and array, push the one that hit
        const panda = pandas[`panda-${oI}`]
        if (other === area || (pandaObj.hit && panda.hit)) return
        
        if (collisionCheck(area, other, topEdge, bottomEdge, leftEdge, rightEdge, 15)){
          pandaObj.hit = 'up'
          panda.hit = 'bottom'
        }
        if (collisionCheck(area, other, rightEdge, leftEdge, topEdge, bottomEdge, 20)) {
          pandaObj.hit = 'right'
          panda.hit = 'left'
        }
        if (diagonalCollisionCheck(area, other, topEdge, bottomEdge, leftEdge, rightEdge, 150, 20)) {
          pandaObj.hit = 'upright'
          panda.hit = 'downleft'
        }

        if (diagonalCollisionCheck(area, other, topEdge, bottomEdge, rightEdge, leftEdge, 150, 20)) {
          pandaObj.hit = 'upleft'
          panda.hit = 'downright'
        }

        if  (collisionCheck(area, other, leftEdge, rightEdge, topEdge, bottomEdge, 20)) {
          pandaObj.hit = 'left'
          panda.hit = 'right'
        }
        if  (collisionCheck(area, other, bottomEdge, topEdge, leftEdge, rightEdge, 15)) {
          pandaObj.hit = 'down'
          panda.hit = 'up'
        }
        

      })
    })
    // console.log('hit', hit)
    for (let x = 0; x < pandaCount; x++){
      const p = pandas[`panda-${x}`]
      if (p.hit && !p.knocked){
        p.panda.style.backgroundColor = 'white'
        p.direction = p.hit
        p.panda.classList.add('stop')
        knockPanda(p.panda, p)
      } else {
        p.panda.style.backgroundColor = 'transparent'
      }
    }
  }
  
  // checkCollisions()
  setInterval(()=>{
    checkCollisions()
  },50)
  
  window.addEventListener('keyup',(e)=>{
    const hitAreas = document.querySelectorAll('.hit_area')
    const k = e.key.toLowerCase().replace('arrow','')[0]
    const pObj = pandas['panda-0']
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

    console.log(pandas)
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
    const p = pandas[`panda-${x}`]
    makeDraggable(p.panda, p)
  }
}

window.addEventListener('DOMContentLoaded', init)

