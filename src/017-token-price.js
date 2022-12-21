
const coinPriceUsd = 78.321;
const tokenPriceUsd = 3 * coinPriceUsd;

// Stages: I, II, III
const stage1TokenSupply = 50_000;
const stage1TokenSupplyUsd = (stage1TokenSupply * tokenPriceUsd);

const stage2TokenSupply = 150_000;
const stage2TokenSupplyUsd = (stage2TokenSupply * tokenPriceUsd);

const stage3TokenSupply = 500_000;
const stage3TokenSupplyUsd = (stage3TokenSupply * tokenPriceUsd);

printStage('I', stage1TokenSupply, stage1TokenSupplyUsd);
printStage('II', stage2TokenSupply, stage2TokenSupplyUsd);
printStage('III', stage3TokenSupply, stage3TokenSupplyUsd);


function printStage(stage, tokenSupply, tokenSupplyUsd) {

  console.log(
    `${stage}. ${tokenSupply.toLocaleString('ru')} tokens / ` +
    `${tokenSupplyUsd.toLocaleString()} USD`
  );

}
