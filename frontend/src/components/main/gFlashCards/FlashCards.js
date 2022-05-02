import React, { useState } from 'react'
import {
  FlashCardArea,
  FlashCardThirds,
  FlashCardFullDiv,
  FlashCardFifthDiv,
  FlashCardPartDiv,
  FlashCardPartDivScore,
  LargeText,
  LargeText1,
  LargeText2,
  LargeTextSub,
  LargeTextAnswers,
  HeadlineDiv,
  NavigationImage2,
} from './FlashCards.elements'
import play from '../../images/play.png'

const FlashCards = (props) => {
  const [start, setStart] = useState(false)
  const [testConsonants, setTestConsonants] = useState(props.testConsonant)
  const [testVowels, setTestVowels] = useState(props.testVowel)
  const [vowelOrConsonant, setVowelOrConsonant] = useState(false)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [showAnswer, setShowAnswer] = useState(true)
  const [right, setRight] = useState(0)
  const [possible, setPossible] = useState(0)
  const [lastTen, setLastTen] = useState(0)

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
    if (
      e.target.innerText === props.vowel[questionNumber].vowel ||
      e.target.innerText === props.consonant[questionNumber].consonant
    ) {
      e.target.style.color = 'green'
      setShowAnswer(false)
      setRight(right + 1)
      setPossible(possible + 1)
      setLastTen(lastTen + 1)
      setTimeout(() => {
        e.target.style.color = '#141c3a'
        setShowAnswer(true)
        setTimeout(() => {
          answerShuffle()
          if (lastTen === 9) {
            props.setScreen(1)
          }
        }, 1)
      }, 1000)
    } else {
      e.target.style.color = 'red'
      setShowAnswer(false)
      setPossible(possible + 1)
      setLastTen(0)
      setTimeout(() => {
        e.target.style.color = '#141c3a'
        setShowAnswer(true)
        setTimeout(() => {
          answerShuffle()
        }, 1)
      }, 2000)
    }
  }

  function answerShuffle() {
    setQuestionNumber(Math.floor(Math.random() * 5))
    console.log(questionNumber)
    let tempConsonantArray = testConsonants.slice()
    let tempVowelArray = testVowels.slice()
    tempConsonantArray[questionNumber] = shuffle(
      tempConsonantArray[questionNumber]
    )
    tempVowelArray[questionNumber] = shuffle(tempVowelArray[questionNumber])
    setTestConsonants([...tempConsonantArray])
    setTestVowels([...tempVowelArray])
    if (Math.random() > 0.5) {
      setVowelOrConsonant(true)
    } else {
      setVowelOrConsonant(false)
    }
  }

  function startTraining() {
    answerShuffle()
    setStart(true)
  }

  return (
    <>
      <FlashCardArea>
        {start ? (
          <>
            <FlashCardThirds>
              <FlashCardFullDiv>
                {vowelOrConsonant ? (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testVowels[questionNumber][0]}
                    </LargeText>
                  </>
                ) : (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testConsonants[questionNumber][0]}
                    </LargeText>
                  </>
                )}
              </FlashCardFullDiv>
              <FlashCardFullDiv>
                {vowelOrConsonant ? (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testVowels[questionNumber][1]}
                    </LargeText>
                  </>
                ) : (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testConsonants[questionNumber][1]}
                    </LargeText>
                  </>
                )}
              </FlashCardFullDiv>
            </FlashCardThirds>
            <FlashCardThirds>
              <FlashCardFullDiv>
                {vowelOrConsonant ? (
                  <>
                    <HeadlineDiv>
                      <LargeText2>What Vowel?</LargeText2>
                    </HeadlineDiv>
                    <FlashCardPartDiv>
                      <LargeText hidden={showAnswer}>
                        {props.vowel[questionNumber].vowel}
                      </LargeText>
                    </FlashCardPartDiv>
                    <FlashCardPartDiv>
                      <LargeText2>
                        Sra {props.vowel[questionNumber].aSeries}
                      </LargeText2>
                      <LargeText2>
                        Ipa {props.vowel[questionNumber].aSeriesIpa}
                      </LargeText2>
                    </FlashCardPartDiv>
                  </>
                ) : (
                  <>
                    <HeadlineDiv>
                      <LargeText2>What Consonant?</LargeText2>
                    </HeadlineDiv>
                    <FlashCardPartDiv>
                      <LargeText hidden={showAnswer}>
                        {props.consonant[questionNumber].consonant}
                      </LargeText>
                    </FlashCardPartDiv>
                    <FlashCardPartDiv>
                      <LargeText2>
                        {props.consonant[questionNumber].fullValue}
                      </LargeText2>
                      <HeadlineDiv></HeadlineDiv>
                      <LargeText2>
                        {props.consonant[questionNumber].fullValueIpa}
                      </LargeText2>
                    </FlashCardPartDiv>
                  </>
                )}
              </FlashCardFullDiv>
              <FlashCardPartDivScore>
                <LargeTextAnswers>{lastTen}/10</LargeTextAnswers>
                <LargeTextAnswers>
                  {right}/{possible}
                </LargeTextAnswers>
                <HeadlineDiv>
                  <LargeText2>Get ten in a row to move on</LargeText2>
                </HeadlineDiv>
              </FlashCardPartDivScore>
            </FlashCardThirds>
            <FlashCardThirds>
              <FlashCardFullDiv>
                {vowelOrConsonant ? (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testVowels[questionNumber][2]}
                    </LargeText>
                  </>
                ) : (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testConsonants[questionNumber][2]}
                    </LargeText>
                  </>
                )}
              </FlashCardFullDiv>
              <FlashCardFullDiv>
                {vowelOrConsonant ? (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testVowels[questionNumber][3]}
                    </LargeText>
                  </>
                ) : (
                  <>
                    <LargeText onClick={(e) => checkAnswer(e)}>
                      {testConsonants[questionNumber][3]}
                    </LargeText>
                  </>
                )}
              </FlashCardFullDiv>
            </FlashCardThirds>
          </>
        ) : (
          <>
            <FlashCardThirds>
              <HeadlineDiv>
                <LargeText2>Consonants</LargeText2>
              </HeadlineDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.consonant[0].consonant}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.consonant[0].fullValue}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.consonant[0].fullValueIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.consonant[1].consonant}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.consonant[1].fullValue}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.consonant[1].fullValueIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.consonant[2].consonant}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.consonant[2].fullValue}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.consonant[2].fullValueIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.consonant[3].consonant}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.consonant[3].fullValue}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.consonant[3].fullValueIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.consonant[4].consonant}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.consonant[4].fullValue}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.consonant[4].fullValueIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
            </FlashCardThirds>
            <FlashCardThirds>
              <FlashCardFullDiv>
                <HeadlineDiv>
                  <NavigationImage2
                    src={play}
                    onClick={() => startTraining()}
                  />
                </HeadlineDiv>
              </FlashCardFullDiv>
            </FlashCardThirds>
            <FlashCardThirds>
              <HeadlineDiv>
                <LargeText2>Vowels</LargeText2>
              </HeadlineDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.vowel[0].vowel}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.vowel[0].aSeries}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.vowel[0].aSeriesIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.vowel[1].vowel}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.vowel[1].aSeries}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.vowel[1].aSeriesIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.vowel[2].vowel}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.vowel[2].aSeries}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.vowel[2].aSeriesIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.vowel[3].vowel}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.vowel[3].aSeries}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.vowel[3].aSeriesIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
              <FlashCardFifthDiv>
                <FlashCardPartDiv>
                  <LargeTextSub>{props.vowel[4].vowel}</LargeTextSub>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1>{props.vowel[4].aSeries}</LargeText1>
                </FlashCardPartDiv>
                <FlashCardPartDiv>
                  <LargeText1> {props.vowel[4].aSeriesIpa}</LargeText1>
                </FlashCardPartDiv>
              </FlashCardFifthDiv>
            </FlashCardThirds>
          </>
        )}
      </FlashCardArea>
    </>
  )
}

export default FlashCards
