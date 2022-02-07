export default function getRandomShapes(shapes, picks){
  let nums = fill(picks);
  nums = randomArrays(nums);

  return nums.map(
    (i) => shapes[i]
  )
}

function fill(n){
  let arr = [];
  for(let i=0; i<n; i++){
    arr.push(i);
  }
  return arr.concat(arr);
}

function randomArrays(nums){
  let ranNums = [],
      i = nums.length,
      j = 0;
  
  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }
  return ranNums;
}