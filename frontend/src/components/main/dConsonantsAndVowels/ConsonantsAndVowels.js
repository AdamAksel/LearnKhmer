import React from 'react'
import {
  ConsonantArea,
  ConsonantFullDiv,
  LargeText,
  LargeText1,
  LargeText2,
  HeadlineDiv,
  ConsonantFourthtDiv,
  ConsonantThirdDiv,
  AnswerInput,
} from './ConsonantsAndVowels.elements'

const ConsonantsAndVowels = (props) => {
  /*
  Also a mess, see subconsonant component for more details.
  */
  function workGodDammit(e) {
    if (
      e.target.value ===
        props.consonant.fullValue.slice(
          0,
          props.consonant.fullValue.length - 1
        ) +
          props.vowel.aSeries &&
      !props.consonant.strong &&
      props.vowel.aSeries !== props.vowel.oSeries
    ) {
      return null
    }
    if (
      e.target.value ===
        props.consonant.fullValue.slice(
          0,
          props.consonant.fullValue.length - 1
        ) +
          props.vowel.oSeries &&
      props.consonant.strong &&
      props.vowel.aSeries !== props.vowel.oSeries
    ) {
      return null
    }
    if (
      e.target.value ===
        props.consonant.fullValue.slice(
          0,
          props.consonant.fullValue.length - 1
        ) +
          props.vowel.aSeries &&
      props.consonant.strong
    ) {
      return props.changeComplete(props.test, props.num, true)
    }
    if (
      e.target.value ===
        props.consonant.fullValue.slice(
          0,
          props.consonant.fullValue.length - 1
        ) +
          props.vowel.oSeries &&
      !props.consonant.strong
    ) {
      return props.changeComplete(props.test, props.num, true)
    }
  }
  return (
    <>
      <ConsonantArea>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Sra {props.vowel.aSeries}</LargeText2>
          </HeadlineDiv>

          <LargeText>{props.vowel.vowel}</LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>
              Vowel Series a and Series o Romanization and IPA
            </LargeText2>
          </HeadlineDiv>
          <ConsonantFourthtDiv>
            <LargeText1>{props.vowel.aSeries}</LargeText1>
          </ConsonantFourthtDiv>
          <ConsonantFourthtDiv>
            <LargeText1>{props.vowel.oSeries}</LargeText1>
          </ConsonantFourthtDiv>
          <ConsonantFourthtDiv>
            <LargeText1>{props.vowel.aSeriesIpa}</LargeText1>
          </ConsonantFourthtDiv>
          <ConsonantFourthtDiv>
            <LargeText1>{props.vowel.oSeriesIpa}</LargeText1>
          </ConsonantFourthtDiv>
        </ConsonantFullDiv>
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
            <LargeText2>Vowel and Consonant Combined</LargeText2>
          </HeadlineDiv>
          <LargeText>{props.consonant.consonant + props.vowel.vowel}</LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Combined Pronounciation</LargeText2>
          </HeadlineDiv>

          <AnswerInput
            disabled={props.completed}
            placeholder={
              props.completed &&
              props.consonant.fullValue.slice(
                0,
                props.consonant.fullValue.length - 1
              ) +
                (props.consonant.strong
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

export default ConsonantsAndVowels
