import React, { useState } from 'react'
import {
  FlashCardArea,
  FlashCardThirds,
  FlashCardFullDiv,
  FlashCardPartDiv,
  LargeText,
  LargeText1,
  LargeText2,
  LargeTextAnswers,
  LargeTextSub,
  LargeTextSub1,
  HeadlineDiv,
  HoverGreen,
  FlashCardFifthDiv,
  NavigationImage2,
  RightReset,
} from './FullFlashCards.elements'
import { consonants } from '../letters/consonants'
import { vowels } from '../letters/vowels'
import play from '../../images/play.png'
import reset from '../../images/reset.png'

const FullFlashCards = () => {
  const [vowelOrConsonant, setVowelOrConsonant] = useState(0)

  const [showAnswer, setShowAnswer] = useState(true)
  const [right, setRight] = useState(0)
  const [possible, setPossible] = useState(0)
  const [LargeAnswer, setLargeAnswer] = useState(LargeText)
  const [LargeQuestion, setLargeQuestion] = useState(LargeText1)
  const [vowelQuestions, setVowelQuestions] = useState(vowels)
  const [consonantQuestions, setConsonantQuestions] = useState(consonants)
  const [vowelAnswer, setVowelAnswer] = useState(vowels[0])
  const [consonantAnswer, setConsonantAnswer] = useState(consonants[0])
  const [vowelQuestionType, setVowelQuestionType] = useState('aSeries')
  const [consonantQuestionType, setConsonantQuestionType] =
    useState('fullValue')
  const [vowelAnswerType, setVowelAnswerType] = useState('vowel')
  const [consonantAnswerType, setConsonantAnswerType] = useState('consonant')
  const [start, setStart] = useState(false)
  const [vowelQDecider, setVowelQDecider] = useState(null)
  const [consonantQDecider, setConsonantQDecider] = useState(null)
  const [vowelADecider, setVowelADecider] = useState(null)
  const [consonantADecider, setConsonantADecider] = useState(null)

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

  function checkAnswer(e) {
    let repeat = false
    console.log(consonantQuestions)
    if (
      e.target.innerText === vowelAnswer[vowelAnswerType] ||
      e.target.innerText === consonantAnswer[consonantAnswerType]
    ) {
      e.target.style.color = 'green'
      setShowAnswer(false)
      setRight(right + 1)
      setPossible(possible + 1)

      setTimeout(() => {
        e.target.style.color = '#141c3a'
        setShowAnswer(true)
        setTimeout(() => {
          questionCreator(repeat)
        }, 1)
      }, 1000)
    } else {
      repeat = true
      e.target.style.color = 'red'
      setShowAnswer(false)
      setPossible(possible + 1)

      setTimeout(() => {
        e.target.style.color = '#141c3a'
        setShowAnswer(true)
        setTimeout(() => {
          questionCreator(repeat)
        }, 1)
      }, 2000)
    }
  }

  function questionCreator(bool) {
    if (bool) {
      answerShuffle()
      return null
    }
    let testConsonants = consonants.slice()
    let testVowels = vowels.slice()
    let tempVowelArray = []
    let tempConsonantArray = []
    let rightAnswerVowel = Math.floor(Math.random() * vowels.length)
    let rightAnswerConsonant = Math.floor(Math.random() * consonants.length)
    tempVowelArray.push(testVowels[rightAnswerVowel])
    tempConsonantArray.push(testConsonants[rightAnswerConsonant])
    for (let i = 0; i < 3; i++) {
      let wrongAnswerVowel = Math.floor(Math.random() * vowels.length)
      let wrongAnswerConsonant = Math.floor(Math.random() * consonants.length)
      if (
        wrongAnswerVowel === rightAnswerVowel ||
        wrongAnswerConsonant === rightAnswerConsonant
      ) {
        i = i - 1
      } else {
        tempVowelArray.push(testVowels[wrongAnswerVowel])
        tempConsonantArray.push(testConsonants[wrongAnswerConsonant])
      }
    }
    tempVowelArray = shuffle(tempVowelArray)
    tempConsonantArray = shuffle(tempConsonantArray)
    setVowelQuestions([...tempVowelArray])
    setConsonantQuestions([...tempConsonantArray])
    setVowelAnswer(testVowels[rightAnswerVowel])
    setConsonantAnswer(testConsonants[rightAnswerConsonant])
  }

  function answerShuffle() {
    let tempConsonantArray1 = consonantQuestions.slice()
    let tempVowelArray1 = vowelQuestions.slice()
    tempConsonantArray1 = shuffle(tempConsonantArray1)
    tempVowelArray1 = shuffle(tempVowelArray1)
    setConsonantQuestions([...tempConsonantArray1])
    setVowelQuestions([...tempVowelArray1])
  }

  function questionFunc(e) {
    if (e.target.innerText === consonants[0].consonant) {
      setConsonantQDecider('Consonants')
      setConsonantQuestionType('consonant')
      setLargeQuestion(LargeText)
    }
    if (e.target.innerText === consonants[0].subscript) {
      setConsonantQDecider('Subconsonants')
      setConsonantQuestionType('subscript')
      setLargeQuestion(LargeTextSub)
    }
    if (e.target.innerText === consonants[0].fullValue) {
      setConsonantQDecider('Romanization')
      setConsonantQuestionType('fullValue')
      setLargeQuestion(LargeText1)
    }
    if (e.target.innerText === vowels[0].vowel) {
      setVowelQDecider('Vowels')
      setVowelQuestionType('vowel')
      setLargeQuestion(LargeTextSub)
    }
    if (e.target.innerText === vowels[0].aSeries) {
      setVowelQDecider('Romanization')
      setVowelQuestionType('aSeries')
      setLargeQuestion(LargeText1)
    }
  }

  function answerFunc(e) {
    if (e.target.innerText === consonants[0].consonant) {
      setConsonantADecider('Consonants')
      setConsonantAnswerType('consonant')
      setLargeAnswer(LargeText)
    }
    if (e.target.innerText === consonants[0].subscript) {
      setConsonantADecider('Subconsonants')
      setConsonantAnswerType('subscript')
      setLargeAnswer(LargeTextSub)
    }
    if (e.target.innerText === consonants[0].fullValue) {
      setConsonantADecider('Romanization')
      setConsonantAnswerType('fullValue')
      setLargeAnswer(LargeText1)
    }
    if (e.target.innerText === vowels[0].vowel) {
      setVowelADecider('Vowels')
      setVowelAnswerType('vowel')
      setLargeAnswer(LargeTextSub)
    }
    if (e.target.innerText === vowels[0].aSeries) {
      setVowelADecider('Romanization')
      setVowelAnswerType('aSeries')
      setLargeAnswer(LargeText1)
    }
  }

  function vowelOrConsonantSetter(num) {
    setConsonantADecider(null)
    setConsonantQDecider(null)
    setVowelADecider(null)
    setVowelQDecider(null)
    setVowelOrConsonant(num)
  }

  function starter() {
    setStart(true)
    questionCreator(false)
  }

  function reseter() {
    setStart(false)
    setConsonantADecider(null)
    setConsonantQDecider(null)
    setVowelADecider(null)
    setVowelQDecider(null)
    setVowelOrConsonant(0)
    setRight(0)
    setPossible(0)
  }

  return (
    <>
      {!start ? (
        <>
          <FlashCardArea>
            <FlashCardThirds>
              {vowelOrConsonant === 1 ? (
                <>
                  <HeadlineDiv>
                    <LargeText2>What should the questions be?</LargeText2>
                  </HeadlineDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Consonant</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => questionFunc(e)}>
                      <LargeText>{consonants[0].consonant}</LargeText>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Subconsonant</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => questionFunc(e)}>
                      <LargeTextSub1>{consonants[0].subscript}</LargeTextSub1>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Romanization</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => questionFunc(e)}>
                      <LargeText1>{consonants[0].fullValue}</LargeText1>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                </>
              ) : vowelOrConsonant === 2 ? (
                <>
                  <HeadlineDiv>
                    <LargeText2>What should the question be?</LargeText2>
                  </HeadlineDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Vowel</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => questionFunc(e)}>
                      <LargeText>{vowels[0].vowel}</LargeText>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Romanization</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => questionFunc(e)}>
                      <LargeText1>{vowels[0].aSeries}</LargeText1>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                </>
              ) : null}
            </FlashCardThirds>
            <FlashCardThirds>
              <FlashCardFullDiv>
                <FlashCardPartDiv>
                  <HoverGreen onClick={() => vowelOrConsonantSetter(2)}>
                    <HeadlineDiv>
                      <LargeText2>Vowels</LargeText2>
                    </HeadlineDiv>
                    <LargeText>ស្រ</LargeText>
                  </HoverGreen>
                </FlashCardPartDiv>
                <FlashCardPartDiv></FlashCardPartDiv>
                <FlashCardPartDiv>
                  <HoverGreen onClick={() => vowelOrConsonantSetter(1)}>
                    <HeadlineDiv>
                      <LargeText2>Consonats</LargeText2>
                    </HeadlineDiv>

                    <LargeText>ព្យញ្ជន</LargeText>
                  </HoverGreen>
                </FlashCardPartDiv>
              </FlashCardFullDiv>

              <HeadlineDiv>
                <LargeText2>
                  {vowelOrConsonant === 1
                    ? 'Consonants'
                    : vowelOrConsonant === 2
                    ? 'Vowels'
                    : null}
                </LargeText2>
              </HeadlineDiv>

              <HeadlineDiv>
                <LargeText2>
                  Questions:{' '}
                  {vowelOrConsonant === 1
                    ? consonantQDecider
                    : vowelOrConsonant === 2
                    ? vowelQDecider
                    : null}{' '}
                </LargeText2>
              </HeadlineDiv>
              <HeadlineDiv>
                <LargeText2>
                  Answers:{' '}
                  {vowelOrConsonant === 1
                    ? consonantADecider
                    : vowelOrConsonant === 2
                    ? vowelADecider
                    : null}{' '}
                </LargeText2>
              </HeadlineDiv>
              <NavigationImage2
                hidden={
                  (consonantQDecider === null || consonantADecider === null) &&
                  (vowelADecider === null || vowelQDecider === null)
                }
                src={play}
                onClick={() => starter()}
              />
            </FlashCardThirds>

            <FlashCardThirds>
              {vowelOrConsonant === 1 ? (
                <>
                  <HeadlineDiv>
                    <LargeText2>What should the answers be?</LargeText2>
                  </HeadlineDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Consonant</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => answerFunc(e)}>
                      <LargeText>{consonants[0].consonant}</LargeText>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Subconsonant</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => answerFunc(e)}>
                      <LargeTextSub1>{consonants[0].subscript}</LargeTextSub1>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Romanization</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => answerFunc(e)}>
                      <LargeText1>{consonants[0].fullValue}</LargeText1>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                </>
              ) : vowelOrConsonant === 2 ? (
                <>
                  <HeadlineDiv>
                    <LargeText2>What should the answer be?</LargeText2>
                  </HeadlineDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Vowel</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => answerFunc(e)}>
                      <LargeText>{vowels[0].vowel}</LargeText>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                  <FlashCardFifthDiv>
                    <HeadlineDiv>
                      <LargeText2>Romanization</LargeText2>
                    </HeadlineDiv>
                    <HoverGreen onClick={(e) => answerFunc(e)}>
                      <LargeText1>{vowels[0].aSeries}</LargeText1>
                    </HoverGreen>
                  </FlashCardFifthDiv>
                </>
              ) : null}
            </FlashCardThirds>
          </FlashCardArea>
        </>
      ) : vowelOrConsonant === 1 ? (
        <>
          <FlashCardArea>
            <RightReset src={reset} onClick={() => reseter()} />
            <FlashCardThirds>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {consonantQuestions[0][consonantAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {consonantQuestions[1][consonantAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
            </FlashCardThirds>
            <FlashCardThirds>
              <HeadlineDiv>
                <LargeTextAnswers>
                  {right}/{possible}
                </LargeTextAnswers>
              </HeadlineDiv>
              <FlashCardFullDiv>
                <FlashCardPartDiv>
                  <LargeAnswer hidden={showAnswer}>
                    {consonantAnswer[consonantAnswerType]}
                  </LargeAnswer>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeQuestion>
                    {consonantAnswer[consonantQuestionType]}
                  </LargeQuestion>
                </FlashCardPartDiv>
              </FlashCardFullDiv>
            </FlashCardThirds>
            <FlashCardThirds>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {consonantQuestions[2][consonantAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {consonantQuestions[3][consonantAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
            </FlashCardThirds>
          </FlashCardArea>
        </>
      ) : vowelOrConsonant === 2 ? (
        <>
          <FlashCardArea>
            <RightReset src={reset} onClick={() => reseter()} />
            <FlashCardThirds>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {vowelQuestions[0][vowelAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {vowelQuestions[1][vowelAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
            </FlashCardThirds>
            <FlashCardThirds>
              <HeadlineDiv>
                <LargeTextAnswers>
                  {right}/{possible}
                </LargeTextAnswers>
              </HeadlineDiv>
              <FlashCardFullDiv>
                <FlashCardPartDiv>
                  <LargeAnswer hidden={showAnswer}>
                    {vowelAnswer[vowelAnswerType]}
                  </LargeAnswer>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeQuestion>
                    {vowelAnswer[vowelQuestionType]}
                  </LargeQuestion>
                </FlashCardPartDiv>
              </FlashCardFullDiv>
            </FlashCardThirds>
            <FlashCardThirds>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {vowelQuestions[2][vowelAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
              <FlashCardFullDiv>
                <LargeAnswer onClick={(e) => checkAnswer(e)}>
                  {vowelQuestions[3][vowelAnswerType]}
                </LargeAnswer>
              </FlashCardFullDiv>
            </FlashCardThirds>
          </FlashCardArea>
        </>
      ) : null}
    </>
  )
}

export default FullFlashCards
