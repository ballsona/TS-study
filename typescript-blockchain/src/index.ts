//crypto-js : javascript에서 해시 함수를 통해 암호화를 할 수 있도록 해주는 패키지
import * as CryptoJs from "crypto-js";

class Block {
  // static 함수들은 Block의 인자가 아닌 class 자체의 함수여야만 함.
  
  //Crypto-JS 를 통해 해시 생성해주는 함수
  static calculateBlockHash = (
    index: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => CryptoJs.SHA256(index + prevHash + timestamp + data).toString();

  //블록체인의 블록 구조가 올바르게 생성되었는지 체크하는 함수
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

//블록체인 초기화
const genesisBlock: Block = new Block(0, "2020202202", "", "first", 123456);
let blockChain: Block[] = [genesisBlock];

//블록체인의 가장 마지막 블록 가져오기
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

//새로운 timestamp 생성
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

//데이터 인자를 받아서 새로운 블록 생성
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

//블록의 hash를 가져오는 함수 
const getHashforBlock = (aBlock: Block) : string => Block.calculateBlockHash(
  aBlock.index,
  aBlock.prevHash,
  aBlock.timestamp,
  aBlock.data
);

//블록의 유효성 검증하는 함수. 이전 블록과 잘 연결되어있는지도 확인.
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

//블록 유효성이 검증되었을 때, 블록을 블록체인에 넣어주는 함수.
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
