import rightArrow from './right-arrow.png';
import searchIcon from './search.png';
import dropdown from './dropdown.png';
import arrowCircle from './arrowCircle.png';
import close from './close.png';
import plus from './plus.png';
import smallCase from './logo.png'
import cardImage from './cardImage.png';
import openInNew from './openinnew.png';
import infoIcon from './infoIcon.png';
import warning from './warning.png';
import downArrow from './downarrow.png';

export {
  rightArrow,
  searchIcon,
  plus,
  dropdown,
  arrowCircle,
  close,
  smallCase,
  cardImage,
  openInNew,
  infoIcon,
  warning,
  downArrow
}




const ball = {x: 6, y: 5, radius: 10}
const stumps = {x: 4, y: 4, width: 4, height: 4}

let isPresentInXRange = (stumpLeftMost, stumpRightMost, ball) =>{

  let Xrightmost = ball.x + ball.radius;
  let Xleftmost = ball.x - ball.radius;

  console.log(' ball.x, stumpLeftMost, stumpRightMost ', ball.x, stumpLeftMost, stumpRightMost);
  if(ball.x > stumpLeftMost && ball.x < stumpRightMost){
    return true
  }

  if(Xrightmost > stumpLeftMost && Xrightmost < stumpRightMost){
    return true
  }

  if(Xleftmost > stumpLeftMost && Xleftmost < stumpRightMost){
    return true
  }

  return false;
}

let isPresentInYRange = (stumpTopMost, stumpBottomMost, ball) =>{
  console.log(' ball.y, stumpTopMost, stumpBottomMost ', ball.y, stumpTopMost, stumpBottomMost);
  if(ball.y > stumpTopMost && ball.y < stumpBottomMost){
    return true
  }

  return false;
}

function isOut(ball, stumps) {
  let stumpLeftMost = stumps.x;
  let stumpRightMost = stumpLeftMost + stumps.width;

  let stumpTopMost = stumps.y;
  let stumpBottomMost = stumpTopMost + stumps.height;

  let tollerance = ball.radius;

  let Xrange = isPresentInXRange(stumpLeftMost, stumpRightMost, ball);

  let Yrange = isPresentInYRange(stumpTopMost, stumpBottomMost, ball);

  console.log('Xrange , Yrange', Xrange , Yrange);
  if(Xrange && Yrange){
    console.log('is Out!');
  }


} // your implementation


isOut(ball, stumps)