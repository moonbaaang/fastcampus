// 제너레이터
function makeInfiniteEnergyGenerator(){
  let energy = 0;
  return function (booster = 0){
    if (booster){
      energy += booster;
    } else {
      energy++;
    }

    return energy;
  };
}

function* InfiniteEnergyGenerator(){
  let energy = 1;
  while (true) {
    const booster = yield energy;
    // yield 제너레이터를 멈추고 energy 값을 돌려줌 (리턴 한 것처럼 객체로 반환)
    // 이후 재개시 yield 문 앞의 코드로 재게된 수 밑의 코드를 만나게 됨
    // 실제로 무한루프이나 next를 만나기 전 까지는 멈춰있음

    if (booster){
      energy += booster;
    } else {
      energy++;
    }
  }
}


const energy = makeInfiniteEnergyGenerator();

for(let i=0; i<5 ; i++){
  console.log(energy());
}

console.log(energy(5))



const energyGenerator = InfiniteEnergyGenerator();
// 함수를 바로 실행시키지 않고 next를 이용해 실행을 재개시켜줄수 있는 함수

for(let i=0; i<5 ; i++){
  console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5))