import { useEffect, useState } from 'react';
import styled from 'styled-components'
import BoardMemory from '../Memory/BoardMemory';
import './AppMemory.css'

const Container = styled.div`
    flex-direction: column;
    background: #0f0c29;
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    height: 929px;
` 

const emojiList = [...'🎮💻📱🎲💾🎱🦖👾'];

const AppMemory = () => {
    const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
    const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
    const [animating, setAnimating] = useState(false);
  
    useEffect( () => {
        const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
        setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
    }, []);
  
    const shuffleArray = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
  
    const handleMemoClick = memoBlock => {
        const flippedMemoBlock = { ...memoBlock, flipped: true };
        let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];

        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);

        if(selectedMemoBlock === null) {
            setselectedMemoBlock(memoBlock);
        } else if(selectedMemoBlock.emoji === memoBlock.emoji) {
            setselectedMemoBlock(null);
        } else {
            setAnimating(true);
            setTimeout(() => {
            shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
            shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
            setShuffledMemoBlocks(shuffledMemoBlocksCopy);
            setselectedMemoBlock(null);
            setAnimating(false);
            }, 1000);
        }
    }
  
    return (
      <Container>
        <div class='containerButtonMemory'>
          <a class='buttonHomeMemory' href='./home'>INICIO</a>
        </div>
        <h1>MEMORAMA</h1>
        <BoardMemory memoBlocks={shuffledMemoBlocks} animating={animating}  handleMemoClick={handleMemoClick} />
      </Container>
    );
}

export default AppMemory;