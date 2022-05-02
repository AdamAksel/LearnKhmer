import React, { useState } from 'react'
import FiveConsonants from './aFiveConsonants/FiveConsonants'
import FiveConsonantsTest from './bFiveConsonantsTest/FiveConsonantsTest'
import FiveConsonantsLink from './cFiveConsonantsLink/FiveConsonantsLink'
import ConsonantsAndVowels from './dConsonantsAndVowels/ConsonantsAndVowels'
import ConsonantsAndSub from './eCOnsonantsAndSub/ConsonantsAndSub'
import ConsonantsSubAndVowels from './fConsonantsSubAndVowels/ConsonantsSubAndVowels'
import FlashCards from './gFlashCards/FlashCards'
import FullKhmerAlphabet from './hFullKhmerAlphabet/FullKhmerAlphabet'
import FiveVowels from './iFiveVowels/FiveVowels'
import {
  MainFlexbox,
  GrammarRuleArea,
  ButtonArea,
  NavigationImage,
  NavigationImage1,
  NavigationImage2,
  RightArrowDiv,
  LargeText2,
  ColorDot,
} from './Main.elements'
import { consonants } from './letters/consonants'
import { vowels } from './letters/vowels'
import arrow from '../images/arrow.png'
import play from '../images/play.png'
import khmeralphabet from '../images/khmeralphabet.png'
import reset from '../images/reset.png'

/*
1. full alphabet with start button that "createconsonantarray"
2. five consonants, vowels screen with instructions
3. flashcard quiz
4. start rest of quiz

 to do
 1. cheat button?
 2. refining
 3. hints at bottom
*/

const Main = () => {
  const [consonantArray, setConsonantArray] = useState(consonants)
  const [vowelArray, setVowelArray] = useState(vowels)
  const [testArray, setTestArray] = useState(consonants)
  const [linkArray, setLinkArray] = useState(consonants)
  const [linkVowelArray, setLinkVowelArray] = useState(vowels)
  const [screen, setScreen] = useState(7)
  const [completed, setCompleted] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ])
  const [screenCount, setScreenCount] = useState(1)
  const [changeVowelsNConsonants, setChangeVowelsNConsonants] = useState(0)
  const [dotSetter, setDotSetter] = useState(7)

  function screenSetter(num) {
    setScreen(num)
    if (
      num === 0 ||
      num === 1 ||
      num === 2 ||
      num === 3 ||
      num === 4 ||
      num === 5 ||
      num === 6
    ) {
      setDotSetter(num)
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array
  }

  function createLinkArray(arr) {
    let tempArray = []
    let tempArray2 = []
    for (let i = 0; i < 5; i++) {
      tempArray2.push(arr[i].consonant)
    }
    for (let i = 0; i < 5; i++) {
      let tempSubArray = tempArray2.slice()
      let j = i
      tempSubArray.splice(j === 4 ? j - 1 : j + 1, 1)
      tempSubArray = shuffle(tempSubArray)
      tempArray.push(tempSubArray)
    }
    setLinkArray([...tempArray])
  }

  function createLinkVowelArray(arr) {
    let tempArray = []
    let tempArray2 = []
    for (let i = 0; i < 5; i++) {
      tempArray2.push(arr[i].vowel)
    }
    for (let i = 0; i < 5; i++) {
      let tempSubArray = tempArray2.slice()
      let j = i
      tempSubArray.splice(j === 4 ? j - 1 : j + 1, 1)
      tempSubArray = shuffle(tempSubArray)
      tempArray.push(tempSubArray)
    }
    setLinkVowelArray([...tempArray])
  }

  function createVowelArray() {
    let vowelsTemp = vowels.slice()
    let tempVowelsArray = []
    for (let i = 0; i < 5; i++) {
      let j = Math.floor(Math.random() * vowelsTemp.length)
      tempVowelsArray.push(vowelsTemp[j])
      vowelsTemp.splice(j, 1)
    }
    setVowelArray([...tempVowelsArray])
    createLinkVowelArray(tempVowelsArray)
  }

  function createConsonantArray() {
    let consonantsTemp = consonants.slice()
    let tempConsonantArray = []
    for (let i = 0; i < 5; i++) {
      let j = Math.floor(Math.random() * consonantsTemp.length)
      tempConsonantArray.push(consonantsTemp[j])
      consonantsTemp.splice(j, 1)
    }
    setConsonantArray([...tempConsonantArray])
    createVowelArray()
    createLinkArray(tempConsonantArray)
    let testTemp = shuffle(tempConsonantArray)
    setTestArray([...testTemp])
    setCompleted([
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ])
    screenSetter(0)
    setScreenCount(1)
  }

  async function mutateCompletedArray(test, num, bool) {
    let tempArray = completed.slice()
    tempArray[test][num] = bool
    setScreenCount(screenCount + 1)
    console.log(screenCount)
    if (Number.isInteger(screenCount / 5) && screenCount > 1) {
      screenSetter(screen + 1)
    }

    return setCompleted([...tempArray])
  }

  return (
    <>
      <MainFlexbox>
        {screen === 0 ? (
          changeVowelsNConsonants === 0 ? (
            <>
              <FiveConsonants consonant={consonantArray[0]} />
              <FiveConsonants consonant={consonantArray[1]} />
              <FiveConsonants consonant={consonantArray[2]} />
              <FiveConsonants consonant={consonantArray[3]} />
              <FiveConsonants consonant={consonantArray[4]} />
            </>
          ) : (
            <>
              <FiveVowels vowel={vowelArray[0]} />
              <FiveVowels vowel={vowelArray[1]} />
              <FiveVowels vowel={vowelArray[2]} />
              <FiveVowels vowel={vowelArray[3]} />
              <FiveVowels vowel={vowelArray[4]} />
            </>
          )
        ) : screen === 1 ? (
          <>
            <FiveConsonantsTest
              consonant={consonantArray[0]}
              testConsonant={testArray[0]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[0][0]}
              test={0}
              num={0}
            />
            <FiveConsonantsTest
              consonant={consonantArray[1]}
              testConsonant={testArray[1]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[0][1]}
              test={0}
              num={1}
            />
            <FiveConsonantsTest
              consonant={consonantArray[2]}
              testConsonant={testArray[2]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[0][2]}
              test={0}
              num={2}
            />
            <FiveConsonantsTest
              consonant={consonantArray[3]}
              testConsonant={testArray[3]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[0][3]}
              test={0}
              num={3}
            />
            <FiveConsonantsTest
              consonant={consonantArray[4]}
              testConsonant={testArray[4]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[0][4]}
              test={0}
              num={4}
            />
          </>
        ) : screen === 2 ? (
          <>
            <FiveConsonantsLink
              consonant={consonantArray[0]}
              linkArray={linkArray[0]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[1][0]}
              test={1}
              num={0}
            />
            <FiveConsonantsLink
              consonant={consonantArray[1]}
              linkArray={linkArray[1]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[1][1]}
              test={1}
              num={1}
            />
            <FiveConsonantsLink
              consonant={consonantArray[2]}
              linkArray={linkArray[2]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[1][2]}
              test={1}
              num={2}
            />
            <FiveConsonantsLink
              consonant={consonantArray[3]}
              linkArray={linkArray[3]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[1][3]}
              test={1}
              num={3}
            />
            <FiveConsonantsLink
              consonant={consonantArray[4]}
              linkArray={linkArray[4]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[1][4]}
              test={1}
              num={4}
            />
          </>
        ) : screen === 3 ? (
          <>
            <ConsonantsAndSub
              consonant={consonantArray[0]}
              testConsonant={testArray[0]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[2][0]}
              test={2}
              num={0}
            />
            <ConsonantsAndSub
              consonant={consonantArray[1]}
              testConsonant={testArray[1]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[2][1]}
              test={2}
              num={1}
            />
            <ConsonantsAndSub
              consonant={consonantArray[2]}
              testConsonant={testArray[2]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[2][2]}
              test={2}
              num={2}
            />
            <ConsonantsAndSub
              consonant={consonantArray[3]}
              testConsonant={testArray[3]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[2][3]}
              test={2}
              num={3}
            />
            <ConsonantsAndSub
              consonant={consonantArray[4]}
              testConsonant={testArray[4]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[2][4]}
              test={2}
              num={4}
            />
          </>
        ) : screen === 4 ? (
          <>
            <ConsonantsAndVowels
              consonant={consonantArray[0]}
              vowel={vowelArray[0]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[3][0]}
              test={3}
              num={0}
            />
            <ConsonantsAndVowels
              consonant={consonantArray[1]}
              vowel={vowelArray[1]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[3][1]}
              test={3}
              num={1}
            />
            <ConsonantsAndVowels
              consonant={consonantArray[2]}
              vowel={vowelArray[2]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[3][2]}
              test={3}
              num={2}
            />
            <ConsonantsAndVowels
              consonant={consonantArray[3]}
              vowel={vowelArray[3]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[3][3]}
              test={3}
              num={3}
            />
            <ConsonantsAndVowels
              consonant={consonantArray[4]}
              vowel={vowelArray[4]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[3][4]}
              test={3}
              num={4}
            />
          </>
        ) : screen === 5 ? (
          <>
            <ConsonantsSubAndVowels
              consonant={consonantArray[0]}
              testConsonant={testArray[1]}
              vowel={vowelArray[1]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[4][0]}
              test={4}
              num={0}
            />
            <ConsonantsSubAndVowels
              consonant={consonantArray[1]}
              testConsonant={testArray[2]}
              vowel={vowelArray[2]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[4][1]}
              test={4}
              num={1}
            />
            <ConsonantsSubAndVowels
              consonant={consonantArray[2]}
              testConsonant={testArray[3]}
              vowel={vowelArray[3]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[4][2]}
              test={4}
              num={2}
            />
            <ConsonantsSubAndVowels
              consonant={consonantArray[3]}
              testConsonant={testArray[4]}
              vowel={vowelArray[4]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[4][3]}
              test={4}
              num={3}
            />
            <ConsonantsSubAndVowels
              consonant={consonantArray[4]}
              testConsonant={testArray[0]}
              vowel={vowelArray[0]}
              changeComplete={(test, num, bool) =>
                mutateCompletedArray(test, num, bool)
              }
              completed={completed[4][4]}
              test={4}
              num={4}
            />
          </>
        ) : screen === 6 ? (
          <>
            <FlashCards
              setScreen={(num) => screenSetter(num)}
              consonant={consonantArray}
              testConsonant={linkArray}
              testVowel={linkVowelArray}
              vowel={vowelArray}
            />
          </>
        ) : screen === 7 ? (
          <>
            <FullKhmerAlphabet />
          </>
        ) : null}
        <GrammarRuleArea></GrammarRuleArea>
        <ButtonArea>
          <NavigationImage2
            src={play}
            hidden={screen === 7 ? false : true}
            onClick={() => createConsonantArray()}
          />
          <NavigationImage2
            src={play}
            hidden={screen === 0 ? false : true}
            onClick={() => screenSetter(screen === 6 ? 0 : 6)}
          />
          <NavigationImage2
            src={reset}
            hidden={screen === 0 || screen === 7 ? true : false}
            onClick={() => createConsonantArray()}
          />

          <NavigationImage1
            src={khmeralphabet}
            onClick={() => screenSetter(screen === 7 ? dotSetter : 7)}
          />
          <RightArrowDiv hidden={screen !== 0 ? true : false}>
            <NavigationImage
              hidden={screen !== 0 ? true : false}
              onClick={() =>
                setChangeVowelsNConsonants(
                  changeVowelsNConsonants === 1 ? 0 : 1
                )
              }
              src={arrow}
            />
            <LargeText2 hidden={screen !== 0 ? true : false}>
              {changeVowelsNConsonants === 1 ? 'Consonants' : 'Vowels'}
            </LargeText2>
          </RightArrowDiv>
          <ColorDot
            style={dotSetter === 0 ? { backgroundColor: '#141c3a' } : null}
          />
          <ColorDot
            style={dotSetter === 6 ? { backgroundColor: '#141c3a' } : null}
          />
          <ColorDot
            style={dotSetter === 1 ? { backgroundColor: '#141c3a' } : null}
          />
          <ColorDot
            style={dotSetter === 2 ? { backgroundColor: '#141c3a' } : null}
          />
          <ColorDot
            style={dotSetter === 3 ? { backgroundColor: '#141c3a' } : null}
          />
          <ColorDot
            style={dotSetter === 4 ? { backgroundColor: '#141c3a' } : null}
          />
          <ColorDot
            style={dotSetter === 5 ? { backgroundColor: '#141c3a' } : null}
          />
        </ButtonArea>
      </MainFlexbox>
    </>
  )
}

export default Main
