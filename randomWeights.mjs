import Handlebars from 'handlebars';
import { BigNumber } from 'ethers';
import fs from 'fs';

const weights = [];
for (let i = 0; i < 7000; i++) {
  weights.push(i);
}
const contents = fs.readFileSync('./templates/Weights.hbs', 'utf8');
const template = Handlebars.compile(contents);
fs.writeFileSync('./contracts/Weights.sol', template({
  weights,
}));
