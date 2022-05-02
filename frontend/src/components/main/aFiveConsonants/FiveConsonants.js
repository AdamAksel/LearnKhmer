import React from 'react'
import {
  ConsonantArea,
  ConsonantFullDiv,
  ConsonantPartDiv,
  LargeText,
  LargeText1,
  LargeText2,
  LargeTextSub,
  HeadlineDiv,
} from './FiveConsonants.elements'

const FiveConsonants = (props) => {
  return (
    <>
      <ConsonantArea>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Consonant</LargeText2>
          </HeadlineDiv>

          <LargeText>{props.consonant.consonant}</LargeText>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Subscript Form</LargeText2>
          </HeadlineDiv>

          <LargeTextSub>{props.consonant.subscript}</LargeTextSub>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Romanization </LargeText2>
          </HeadlineDiv>

          <ConsonantPartDiv>
            <LargeText1>{props.consonant.fullValue}</LargeText1>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <LargeText1>{props.consonant.consonantValue}</LargeText1>
          </ConsonantPartDiv>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>Phonetic Pronounciation</LargeText2>
          </HeadlineDiv>

          <ConsonantPartDiv>
            <LargeText1>{props.consonant.fullValueIpa}</LargeText1>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <LargeText1>{props.consonant.consonantValueIpa}</LargeText1>
          </ConsonantPartDiv>
        </ConsonantFullDiv>
        <ConsonantFullDiv>
          {props.consonant.strong ? (
            <LargeText1>
              Series A <br /> Strong
            </LargeText1>
          ) : (
            <LargeText1>
              Series O <br /> Weak
            </LargeText1>
          )}
        </ConsonantFullDiv>
      </ConsonantArea>
    </>
  )
}

export default FiveConsonants
