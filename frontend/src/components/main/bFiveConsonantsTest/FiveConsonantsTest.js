import React from 'react'
import {
  ConsonantArea,
  ConsonantFullDiv,
  ConsonantPartDiv,
  LargeText,
  LargeText1,
  LargeText2,
  HeadlineDiv,
  AnswerInput,
} from './FiveConsonantsTest.elements'

const FiveConsonantsTest = (props) => {
  return (
    <>
      <ConsonantArea>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Khmer Symbol</LargeText2>
          </HeadlineDiv>

          <LargeText>{props.consonant.consonant}</LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Romanization</LargeText2>
          </HeadlineDiv>
          <ConsonantPartDiv>
            <LargeText1>{props.consonant.fullValue}</LargeText1>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <LargeText1>{props.consonant.consonantValue}</LargeText1>
          </ConsonantPartDiv>
        </ConsonantFullDiv>

        <ConsonantFullDiv>
          <LargeText>
            {props.consonant.consonant}
            {props.testConsonant.consonant}
          </LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>Romanize the Letters</HeadlineDiv>
          <AnswerInput
            disabled={props.completed}
            placeholder={
              props.completed &&
              props.consonant.fullValue +
                ' ' +
                props.testConsonant.consonantValue
            }
            onChange={(e) => {
              e.target.value ===
                props.consonant.fullValue +
                  props.testConsonant.consonantValue &&
                props.changeComplete(props.test, props.num, true)
            }}
          />
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          {props.completed && (
            <LargeText1>
              {props.consonant.fullValue}
              {props.testConsonant.consonantValue}
            </LargeText1>
          )}
        </ConsonantFullDiv>
      </ConsonantArea>
    </>
  )
}

export default FiveConsonantsTest
