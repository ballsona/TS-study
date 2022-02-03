import * as CryptoJs from "crypto-js";
//crypto-js : javascript에서 해시 함수를 통해 암호화를 할 수 있도록 해주는 패키지

class Block {
  // static 
  static calculateBlockHash = (
    index: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => CryptoJs.SHA256(index + prevHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.prevHash === 'string' &&
    typeof aBlock.timestamp === 'number' && 
    typeof aBlock.data === 'string' ;
  
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "2020202202", "", "first", 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const prevBlock: Block = getLatestBlock();
  const newIndex: number = prevBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    prevBlock.hash,
    newTimeStamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    prevBlock.hash,
    data,
    newTimeStamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block) : string => Block.calculateBlockHash(
  aBlock.index,
  aBlock.prevHash,
  aBlock.timestamp,
  aBlock.data
);

const isBlockValid = (candidateBlock: Block, prevBlock: Block): Boolean => {
  if(!Block.validateStructure(candidateBlock)){
    return false;
  } else if(prevBlock.index +1 !== candidateBlock.index){
    return false;
  } else if(prevBlock.hash !== candidateBlock.prevHash){
    return false;
  } else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){
    return false;
  } else{
    return true;
  }
};

const addBlock = (candidateBlock:Block) : void =>{
  if(isBlockValid(candidateBlock,getLatestBlock())) {
    blockChain.push(candidateBlock);
  }
}

createNewBlock("second");
createNewBlock("third");
createNewBlock("fourth");

console.log(blockChain);
export {}; 
