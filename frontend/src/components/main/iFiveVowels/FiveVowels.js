import React from 'react'
import {
  VowelArea,
  VowelFullDiv,
  LargeText1,
  LargeTextSub,
  LargeText2,
  HeadlineDiv,
} from './FiveVowels.elements'

const FiveVowels = (props) => {
  return (
    <>
      <VowelArea>
        <VowelFullDiv>
          <HeadlineDiv>
            <LargeText2>Vowel</LargeText2>
          </HeadlineDiv>
          <LargeTextSub>{props.vowel.vowel}</LargeTextSub>
        </VowelFullDiv>
        <VowelFullDiv>
          <HeadlineDiv>
            <LargeText2>Vowel Sound Series A</LargeText2>
          </HeadlineDiv>
          <LargeText1>{props.vowel.aSeries}</LargeText1>
        </VowelFullDiv>
        <VowelFullDiv>
          <HeadlineDiv>
            <LargeText2>Phonetic Sound Series A</LargeText2>
          </HeadlineDiv>
          <LargeText1>{props.vowel.aSeriesIpa}</LargeText1>
        </VowelFullDiv>
        <VowelFullDiv>
          <HeadlineDiv>
            <LargeText2>Vowel Sound Series O</LargeText2>
          </HeadlineDiv>
          <LargeText1>{props.vowel.oSeries}</LargeText1>
        </VowelFullDiv>
        <VowelFullDiv>
          <HeadlineDiv>
            <LargeText2>Phonetic Sound Series O</LargeText2>
          </HeadlineDiv>
          <LargeText1>{props.vowel.oSeriesIpa}</LargeText1>
        </VowelFullDiv>
      </VowelArea>
    </>
  )
}

export default FiveVowels
