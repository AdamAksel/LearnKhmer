import React from 'react'
import {
  ConsonantArea,
  ConsonantFullDiv,
  ConsonantThirdDiv,
  LargeText,
  LargeText1,
  LargeTextSub,
  LargeText2,
  HeadlineDiv,
  AnswerInput,
} from './ConsonantsSubAndVowels.elements'

const ConsonantsSubAndVowels = (props) => {
  /*
    A much neater if than in the subscript component!
    */
  function workGodDammit(e) {
    if (
      e.target.value ===
      props.consonant.consonantValue +
        props.testConsonant.consonantValue +
        (props.consonant.strong || props.testConsonant.strong
          ? props.vowel.aSeries
          : props.vowel.oSeries)
    ) {
      return props.changeComplete(props.test, props.num, true)
    }
  }

  return (
    <>
      <ConsonantArea>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Consonant, Romanization and Series</LargeText2>
          </HeadlineDiv>
          <ConsonantThirdDiv>
            <LargeText>{props.consonant.consonant}</LargeText>
          </ConsonantThirdDiv>
          <ConsonantThirdDiv>
            <LargeText1>{props.consonant.fullValue}</LargeText1>
          </ConsonantThirdDiv>
          <ConsonantThirdDiv>
            <LargeText1>{props.consonant.strong ? 'A' : 'O'}</LargeText1>
          </ConsonantThirdDiv>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>SubConsonant, Romanization and Series</LargeText2>
          </HeadlineDiv>
          <ConsonantThirdDiv>
            <LargeTextSub>{props.testConsonant.subscript}</LargeTextSub>
          </ConsonantThirdDiv>
          <ConsonantThirdDiv>
            <LargeText1>{props.testConsonant.fullValue}</LargeText1>
          </ConsonantThirdDiv>
          <ConsonantThirdDiv>
            <LargeText1>{props.testConsonant.strong ? 'A' : 'O'}</LargeText1>
          </ConsonantThirdDiv>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Vowel and Series A and O Romanization</LargeText2>
          </HeadlineDiv>
          <ConsonantThirdDiv>
            <LargeTextSub>{props.vowel.vowel}</LargeTextSub>
          </ConsonantThirdDiv>
          <ConsonantThirdDiv>
            <LargeText1>{props.vowel.aSeries}</LargeText1>
          </ConsonantThirdDiv>
          <ConsonantThirdDiv>
            <LargeText1>{props.vowel.oSeries}</LargeText1>
          </ConsonantThirdDiv>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>All Merged</LargeText2>
          </HeadlineDiv>
          <LargeText>
            {props.consonant.consonant +
              props.testConsonant.subscript +
              props.vowel.vowel}
          </LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Romanize the Merged Letters</LargeText2>
          </HeadlineDiv>
          <AnswerInput
            disabled={props.completed}
            placeholder={
              props.completed &&
              props.consonant.consonantValue +
                props.testConsonant.consonantValue +
                (props.consonant.strong || props.testConsonant.strong
                  ? props.vowel.aSeries
                  : props.vowel.oSeries)
            }
            onChange={(e) => {
              workGodDammit(e)
            }}
          />
        </ConsonantFullDiv>
      </ConsonantArea>
    </>
  )
}

export default ConsonantsSubAndVowels
