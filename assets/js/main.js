const width = window.innerWidth
const height = window.innerHeight
const viewRatio =  width / height
const container = document.querySelector('.container')
const firstSection = document.querySelector('.js-first-section')
const firstSectionTop = document.querySelector('.js-first-section-top')
const firstSectionBottom = document.querySelector('.js-first-section-bottom')
const firstSectionOverview = document.querySelector('.js-first-section-overview')
const initFirstOverviewSize = firstSectionOverview.getBoundingClientRect()

console.log(initFirstOverviewSize)

const secondSection = document.querySelector('.js-second-section')
const prevSpace = window.innerHeight / 2
let scrollDirection
let newPosition = 0
let maxHeight = 0
let downCount = 0
let upCount = 0
let firstSectionMoveDeltaY = 0
// let isScrolling
function scrollMotion () {
  const deltaY = event.deltaY
  if (deltaY > 0 && newPosition <= maxHeight) {
    // 스크롤 아래로
    scrollDirection = 'down'
    downCount = ++ downCount
    calcFirstPosition(event)

  } else if (deltaY < 0 && newPosition <= maxHeight) {
    // 스크롤 위로
    scrollDirection = 'up'
    upCount = ++ upCount

    if(upCount < downCount) {
      console.log('스크롤 up /// 아래로 스크롤이 위로 스크롤보다 많이한 경우')
      if (newPosition > 0) {
        calcFirstPosition(event)
      } else {
        console.log('newposition이 - 인경우', newPosition)
        resetFirstIntro()
      }
    }

    if(upCount > downCount) {
      console.log('스크롤 up /// 위로 스크롤을 많이한 경우', newPosition)
      if (newPosition < 10) {
        newPosition = 0
        resetFirstIntro()
      } else {
        calcFirstPosition(event)
      }
    }
  }
  //
  // // Clear the previous timeout if any
  // clearTimeout(isScrolling);
  //
  // // Set a timeout to run after scrolling ends
  // isScrolling = setTimeout(() => {
  //   // Logic to handle scroll end event
  //   // Example: Reset counts, adjust position, etc.
  //   downCount = 0;
  //   upCount = 0;
  // }, 100);  // 100ms after the last scroll event
}

function resetFirstIntro () {
  newPosition = 0
  firstSection.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${newPosition}, 0, 1)`;
}


function calcFirstPosition (event) {
  console.log('calcFirstPosition')
  // 위치 =  위치 + 스크롤 한 값보다 전체 높이가 작을 때는 위치 + 스크롤한값 아닐때는 전체컨텐츠높이
  newPosition = newPosition + event.deltaY < maxHeight ? newPosition + event.deltaY : maxHeight;
  //newposition이 최대높이보다 커지기 방지

  setContainerPosition(event)
}
function setContainerPosition (event) {
  console.log(event.deltaY, 'deltay set', firstSection.offsetHeight)
  firstSection.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${newPosition}, 0, 1)`
  firstSectionTop.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${newPosition}, 0, 1)`

  // 969-603
  console.log(event.deltaY, 'deltaY', height - ((height - initFirstOverviewSize.height)/viewRatio))

  if (newPosition >= height - ((height - initFirstOverviewSize.height)/2) && newPosition <= firstSection.offsetHeight) {
    console.log('첫섹션에서 중앙에 왔을때')
    firstSectionMoveDeltaY = firstSectionMoveDeltaY + event.deltaY
    firstSectionOverviewWidth = firstSectionOverview.offsetWidth
    firstSectionOverviewHeight = firstSectionOverview.offsetHeight

    console.log(firstSectionMoveDeltaY, 'firstSectionMoveDeltaY', firstSectionOverviewWidth, '')

    firstSectionBottom.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${firstSectionMoveDeltaY}, 0, 1)`

    console.log(event.deltaY, scrollDirection, initFirstOverviewSize)

    firstSectionOverview.style.width = `${firstSectionOverviewWidth + event.deltaY* viewRatio >= width ? width : firstSectionOverviewWidth + event.deltaY* viewRatio <= initFirstOverviewSize.width ? initFirstOverviewSize.width : firstSectionOverviewWidth + event.deltaY * viewRatio}px`
    firstSectionOverview.style.height = `${firstSectionOverviewHeight + event.deltaY >= height ? height: firstSectionOverviewHeight + event.deltaY <= initFirstOverviewSize.height ? initFirstOverviewSize.height : firstSectionOverviewHeight + event.deltaY}px`
  } else {
    console.log('중앙안왔거나 첫섹션넘어갈때')
    // firstSectionBottom.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`
    // firstSectionOverview.style.width = `${initFirstOverviewSize.width}px`
    // firstSectionOverview.style.height = `${initFirstOverviewSize.height}px`
  }

  if (newPosition >= firstSection.offsetHeight) {
    // firstSectionOverview의 사이즈가 다 커지고나면
    if (scrollDirection === 'down') {
      firstSectionOverview.style.width = `${firstSectionOverviewWidth - event.deltaY * viewRatio}px`
      firstSectionOverview.style.height = `${firstSectionOverviewHeight - event.deltaY}px`
    }
  }

  // //현재위치가 처음섹션높이 + 브라우저창 절반크기보다 클때 첫섹션 안보이게처리
  // if (newPosition >= firstSection.offsetHeight + prevSpace) {
  //   firstSection.style.opacity = 0;
  //   firstSection.removeAttribute('data-scroll-section-inview', 'data-scroll-section-inview')
  //   firstSection.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
  // } else {
  //   firstSection.style.opacity = 1;
  //   firstSection.setAttribute('data-scroll-section-inview', 'data-scroll-section-inview')
  // }
  // //
  // //
  // // //1, 2번 섹션 왔다갔다할때
  // if (newPosition >= firstSection.offsetHeight + secondSection.offsetHeight - window.innerHeight) {
  //   // 현재위치가, (처음섹션의높이 - 브라우저창 절반크기) 보다 클때, 처음섹션에서 한.. 70%? 보일때 미리 생성해주기
  //   secondSection.style.opacity = 1;
  //   secondSection.setAttribute('data-scroll-section-inview', 'data-scroll-section-inview')
  //   secondSection.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${newPosition}, 0, 1)`;
  // } else {
  //   secondSection.style.opacity = 0;
  //   secondSection.removeAttribute('data-scroll-section-inview', 'data-scroll-section-inview')
  //   secondSection.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
  // }
}

function setLoad () {
  window.scrollTo(0,0)
  maxHeight = container.offsetHeight - window.innerHeight < 0 ? 0 :  container.offsetHeight - window.innerHeight
}
window.addEventListener('load', () => {
  setLoad()
})

window.addEventListener('wheel', scrollMotion, { passive: false });
