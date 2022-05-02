import React from 'react'
import {
  ConsonantArea,
  ConsonantFullDiv,
  LargeText,
  LargeTextSub,
  LargeText1,
  LargeText2,
  HeadlineDiv,
  ConsonantPartDiv,
  AnswerInput,
} from './ConsonantsAndSub.elements'
/*
 {props.completed && (
            <LargeText2>
              {props.consonant.strong && !props.testConsonant.strong
                ? props.consonant.consonantValue +
                  props.testConsonant.consonantValue +
                  props.consonant.fullValue.slice(
                    props.consonant.fullValue.length - 1
                  )
                : props.consonant.consonantValue +
                  props.testConsonant.fullValue}
            </LargeText2>
          )}
*/

const ConsonantsAndSub = (props) => {
  /*
  Here are some horrible if statements to check if the consonants follow the
  Series A and O rules. I could likley make these much more comprehendable but just
  thinking about going through them again makes my brain hurt so i wont.
  It was a learning experience of the importance of KISS!
  */
  function workGodDammit(e) {
    if (
      e.target.value ===
        props.consonant.consonantValue +
          props.testConsonant.consonantValue +
          props.consonant.fullValue.slice(
            props.consonant.fullValue.length - 1
          ) &&
      !props.consonant.strong &&
      props.testConsonant.strong &&
      props.consonant.consonant !== props.testConsonant.consonant
    ) {
      return null
    }
    if (
      e.target.value ===
        props.consonant.consonantValue + props.testConsonant.fullValue &&
      props.consonant.strong &&
      !props.testConsonant.strong &&
      props.consonant.consonant !== props.testConsonant.consonant
    ) {
      return null
    }
    if (
      e.target.value ===
        props.consonant.consonantValue +
          props.testConsonant.consonantValue +
          props.consonant.fullValue.slice(
            props.consonant.fullValue.length - 1
          ) &&
      props.consonant.strong &&
      !props.testConsonant.strong
    ) {
      props.changeComplete(props.test, props.num, true)
    }
    if (
      e.target.value ===
      props.consonant.consonantValue + props.testConsonant.fullValue
    ) {
      props.changeComplete(props.test, props.num, true)
    }
  }

  return (
    <>
      <ConsonantArea>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText1>Consonant</LargeText1>
          </HeadlineDiv>

          <LargeText>{props.consonant.consonant}</LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText1>SubConsonant</LargeText1>
          </HeadlineDiv>

          <LargeTextSub>{props.consonant.subscript}</LargeTextSub>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText1>Romanization and Series</LargeText1>
          </HeadlineDiv>
          <ConsonantPartDiv>
            <LargeText2>{props.consonant.fullValue}</LargeText2>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <LargeText2>{props.consonant.strong ? 'A' : 'O'}</LargeText2>
          </ConsonantPartDiv>
        </ConsonantFullDiv>

        <ConsonantFullDiv>
          <LargeText>
            {props.consonant.consonant + props.testConsonant.subscript}
          </LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>Romanize the Letters</HeadlineDiv>
          <AnswerInput
            disabled={props.completed}
            placeholder={
              props.completed &&
              props.consonant.strong &&
              !props.testConsonant.strong
                ? props.consonant.consonantValue +
                  props.testConsonant.consonantValue +
                  props.consonant.fullValue.slice(
                    props.consonant.fullValue.length - 1
                  )
                : props.completed
                ? props.consonant.consonantValue + props.testConsonant.fullValue
                : null
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

export default ConsonantsAndSub
