import MemoBlock from './MemoBlock';
import './BoardMemory.css';

const BoardMemory = ({animating, handleMemoClick, memoBlocks}) => {
    return (
        <main className="boardMemory">
            {memoBlocks.map( (memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
        </main>
    );
}

export default BoardMemory;