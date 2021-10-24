function init() {

  //TODO change color when pandas collide
  
  const body = document.querySelector('.wrapper')
  const indicator = document.querySelector('.indicator')
  const animationFrames = {
    walk: [0, 1, 2, 1]
  }
  // const walkingFrames = [0, 1, 2, 1]
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
    upleft: 'dUp',
    upright: 'dUp',
    left: 'side',
    right: 'side',
    downleft: 'dDown',
    downright: 'dDown',
    down: 'down'
  }
  const vertical = ['up', 'down', '']
  const horizontal = ['left', 'right', '']
  const pandas = {}
  let pandaCount = 0
  const frameSpeed = 150
  const moveSpeed = 1000 * 3
  const pandaIndicators = []

  const animatePanda = (panda, pandaObj, animation) =>{
    const i = pandaObj.frame
    panda.childNodes[1].childNodes[1].style.marginLeft = `-${animationFrames[animation][i] * cellSize}px`
    panda.childNodes[1].childNodes[1].style.marginTop = `-${cellSize * directions[pandaObj.direction]}px`
    pandaObj.frame = i === animationFrames[animation].length - 1 ? 0 : i + 1
  }

  
  const randomN = () =>{
    return (Math.random() * 500).toFixed(2)
  }

  const randomD = arr =>{
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const moveAbout = (panda, pandaObj) =>{
    // todo change this so that only direction is random and walking pace is the same?
    // add up / down / diagonal?
    const randomVert = randomD(vertical)
    const randomHori = randomD(horizontal)
    const randomDistance = Math.round(Math.random() * 100) + 50
    
    pandaObj.direction = sprites[randomVert + randomHori]
    console.log('vert hori', `${randomVert + randomHori}`, 'dir', pandaObj.direction)

    const { marginLeft, marginTop } = panda.style
    let x = +marginLeft.replace('px','')
    let y = +marginTop.replace('px','')
    
    if (randomHori !== ''){
      x += randomHori === 'left' ? -randomDistance : randomDistance
    }
    if (randomVert !== ''){
      y += randomVert === 'up' ? -randomDistance : randomDistance
    }

    console.log('x', x, 'y', y)
    
    panda.style.marginLeft = `${x}px`
    panda.style.marginTop = `${y}px`
    panda.childNodes[1].className = `panda_inner_wrapper ${randomHori}`

    
    pandaObj.prev = [x, y]
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
      <div class="hit_area"><div></div></div>
    </div>
    `
    body.append(panda)

    panda.style.marginTop = `${body.clientHeight / 2}px`
    panda.style.marginLeft = `${body.clientWidth / 2}px`
    // panda.style.marginLeft = `${randomN()}px`
    // panda.style.marginTop = `${randomN()}px`


    pandas[`panda-${pandaCount}`] = { 
      panda,
      frame: 0, 
      direction: 'down',
      frameInterval: null,
      walkInterval: null,
      prev: [panda.style.marginLeft, panda.style.marginTop], 
    }
    const pandaObj = pandas[`panda-${pandaCount}`]
    
    pandaObj.frameInterval = setInterval(()=>{
      animatePanda(panda, pandaObj, 'walk')
    }, frameSpeed)
    
    const pandaStatus = document.createElement('p')
    pandaStatus.dataset.index = pandaCount
    indicator.append(pandaStatus)
    pandaIndicators.push(pandaStatus)
    
    moveAbout(panda, pandaObj)
    pandaObj.walkInterval = setInterval(()=>{
      moveAbout(panda, pandaObj)
    }, moveSpeed)

    pandaCount++
  }
  
  createPanda()
  createPanda()
  createPanda()

  setInterval(()=>{
    pandaIndicators.forEach((indicator, i)=>{
      const { panda } = pandas[`panda-${i}`]
      indicator.innerHTML = `panda-${i} x:${panda.offsetLeft}px y:${panda.offsetTop}px`
    })
  },100)
}

window.addEventListener('DOMContentLoaded', init)
