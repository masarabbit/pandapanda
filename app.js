function init() {

  //TODO change color when pandas collide
  // TODO need to stop animation + move about each time.
  
  const body = document.querySelector('.wrapper')
  const indicator = document.querySelector('.indicator')
  const animationFrames = {
    walk: [0, 1, 2, 1],
    fall: [3, 4, 5, 6, 5, 7],
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

  
  // const randomN = () =>{
  //   return (Math.random() * 500).toFixed(2)
  // }

  // const randomD = arr =>{
  //   return arr[Math.floor(Math.random() * arr.length)]
  // }

  const stopPanda = (panda, pandaObj) =>{
    clearInterval(pandaObj.frameInterval)
    pandaObj.frame = 0
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

  const knockPanda = (panda, pandaObj) =>{
    clearInterval(pandaObj.walkInterval)
    if (pandaObj.knocked) return
    pandaObj.knocked = true
    
    stopPanda(panda, pandaObj)
    pandaObj.frameInterval = setInterval(()=>{
      animatePanda(panda, pandaObj, 'fall')
    }, frameSpeed)

    setTimeout(()=>{
      stopPanda(panda, pandaObj)
      pandaObj.frameInterval = setInterval(()=>{
        animatePanda(panda, pandaObj, 'standUp')  
      }, frameSpeed)

        setTimeout(()=>{   
          pandaObj.hit = false
          pandaObj.knocked = false
          panda.classList.remove('stop')

          stopPanda(panda, pandaObj)
          startPanda(panda, pandaObj)
          
          clearInterval(pandaObj.walkInterval)
          pandaObj.walkInterval = setInterval(()=>{
            moveAbout(panda, pandaObj)
          }, moveSpeed)
        }, frameSpeed * 6)

    }, frameSpeed * 6)
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
    let x = +marginLeft.replace('px','')
    let y = +marginTop.replace('px','')
    
    // const randomDistance = Math.round(Math.random() * 100) + 50
    const randomDistance = 50
    if (dir !== 'up' && 'dir' !== 'down') x += (dir.includes('left')) ? -randomDistance : randomDistance
    if (dir !== 'left' && 'dir' !== 'right') y += (dir.includes('up')) ? -randomDistance : randomDistance

    // if (panda.stop) startPanda(panda, pandaObj)
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
      <div class="hit_wrapper"><div class="hit_area" dataset-id="${pandaCount}" ></div></div>
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

  // const directionIs = (dir, a, b, c) =>{
  //   return  dir === a || 
  //           dir === b ||
  //           dir === c
  // }

  const collisionCheck = 
  (area, other, edgeOne, edgeTwo, edgeThree, edgeFour, buffer) => {
    return  collide(edgeOne(area), edgeTwo(other)) && 
            collide(edgeThree(area), edgeThree(other), buffer) &&
            collide(edgeFour(area), edgeFour(other), buffer) 
  }

  // collide(topEdge(area), bottomEdge(other)) && 
  // collide(leftEdge(area), leftEdge(other), 25) &&
  // collide(rightEdge(area), rightEdge(other), 25) 

  const checkCollisions = () =>{
    // const hit = []
    const hitAreas = document.querySelectorAll('.hit_area')
    hitAreas.forEach((area, aI)=>{
      const pandaObj = pandas[`panda-${aI}`]
      if (pandaObj.stop) return
      const { direction } = pandaObj
      // console.log(area.parentNode)
      // area.parentNode.style.borderColor = 'green'
      // area.innerHTML = direction + topEdge(area)

      hitAreas.forEach((other, oI) =>{
        // console.log('count', area) 
        //TODO playing too many times, maybe shouldn't do forEach within a forEach ? maybe make hit and array, push the one that hit
        const panda = pandas[`panda-${oI}`]
        // let hit
        // console.log('panda', panda.hit)
        if (other === area || (pandaObj.hit && panda.hit)) return

        // if (
        //   (direction.includes('up') && collisionCheck(area, other, topEdge, bottomEdge, leftEdge, rightEdge, 25)) ||
        //   (direction.includes('right') && collisionCheck(area, other, rightEdge, leftEdge, topEdge, bottomEdge, 30)) ||
        //   (direction.includes('left') && collisionCheck(area, other, leftEdge, rightEdge, topEdge, bottomEdge, 30)) ||
        //   (direction.includes('down') && collisionCheck(area, other, bottomEdge, topEdge, leftEdge, rightEdge, 25)) 
        // ) {
        //   panda.hit = true
        //   pandaObj.hit = true
        // }
        
        if (collisionCheck(area, other, topEdge, bottomEdge, leftEdge, rightEdge, 25)){
          pandaObj.hit = 'up'
          panda.hit = 'bottom'
        }
        if (collisionCheck(area, other, rightEdge, leftEdge, topEdge, bottomEdge, 30)) {
          pandaObj.hit = 'right'
          panda.hit = 'left'
        }
        if  (collisionCheck(area, other, leftEdge, rightEdge, topEdge, bottomEdge, 30)) {
          pandaObj.hit = 'left'
          panda.hit = 'right'
        }
        if  (collisionCheck(area, other, bottomEdge, topEdge, leftEdge, rightEdge, 25)) {
          pandaObj.hit = 'down'
          panda.hit = 'up'
        }
        

        // if (hit.length) {
        //   area.style.backgroundColor = 'orange'
        //   stopPanda(panda.panda, panda)
        //   knockPanda(panda.panda, panda)
        // }
      })
    })
    // console.log('hit', hit)
    for (let x = 0; x < pandaCount; x++){
      const p = pandas[`panda-${x}`]
      if (p.hit && !p.knocked){
        // p.panda.style.backgroundColor = 'white'
        p.direction = p.hit
        p.panda.classList.add('stop')
        stopPanda(p.panda, p)
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
        moveAbout(panda, pandaObj)
        clearInterval(pandaObj.walkInterval)
        pandaObj.walkInterval = setInterval(()=>{
          moveAbout(panda, pandaObj)
        }, moveSpeed)
        panda.classList.remove('stop')
      }
      
    } 
    const onGrab = () => {
      // if (!pandaObj.hit) return
      document.addEventListener('mousemove', onDrag)
      document.addEventListener('mouseup', onLetGo)

      clearInterval(pandaObj.walkInterval)
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




// const oldmoveAbout = (panda, pandaObj) =>{
//   const randomVert = randomD(vertical)
//   const randomHori = randomD(horizontal)
//   // const randomDistance = Math.round(Math.random() * 100) + 50
//   const randomDistance = 100
//   const { marginLeft, marginTop } = panda.style
  
//   pandaObj.direction = randomVert + randomHori

//   let x = +marginLeft.replace('px','')
//   let y = +marginTop.replace('px','')
  
//   if (randomHori !== '') x += randomHori === 'left' ? -randomDistance : randomDistance
//   if (randomVert !== '') y += randomVert === 'up' ? -randomDistance : randomDistance
//   panda.childNodes[1].className = `panda_inner_wrapper ${randomHori}`

//   // console.log('x', x, 'y', y)
//   // console.log('width', body.clientWidth, 'height', body.clientHeight)
//   // console.log('randomVert randomHori', randomVert + randomHori, 'x', x, pandaObj.prev[0], 'y', y, pandaObj.prev[1])

//   if (panda.stop) startPanda(panda, pandaObj)
//   if ((randomVert + randomHori) === '' || (x === pandaObj.prev[0] && y === pandaObj.prev[1])){
//     stopPanda(panda, pandaObj)
//   } 
  
//   if (x > 100 && x < (body.clientWidth - 100)){
//     panda.style.marginLeft = `${x}px`
//     pandaObj.prev[0] = x
//   } 
//   if (y > 100 && y < (body.clientHeight - 100)){
//     panda.style.marginTop = `${y}px`
//     pandaObj.prev[1] = y
//   }  
// }
