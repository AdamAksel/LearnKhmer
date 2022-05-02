import React from 'react'
import {
  AlphabetArea,
  LargeText1,
  LargeText1Sub,
  LargeText2,
  ConsonantFullDiv,
  ConsonantPartDiv,
  ConsonantPartPartDiv,
} from './FullKhmerAlphabet.elements'
import { consonants } from '../letters/consonants'
import { vowels } from '../letters/vowels'

const FullKhmerAlphabet = () => {
  return (
    <>
      <AlphabetArea>
        <ConsonantFullDiv>
          <ConsonantPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Consonant</LargeText2>
            </ConsonantPartPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>SubScript</LargeText2>
            </ConsonantPartPartDiv>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Romanization</LargeText2>
            </ConsonantPartPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Phonetic</LargeText2>
            </ConsonantPartPartDiv>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Consonant Sound</LargeText2>
            </ConsonantPartPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Phonetic</LargeText2>
            </ConsonantPartPartDiv>
          </ConsonantPartDiv>
        </ConsonantFullDiv>
        {consonants.map((item) => (
          <ConsonantFullDiv id={item.consonant} key={item.consonant}>
            <ConsonantPartDiv>
              <ConsonantPartPartDiv>
                <LargeText1>{item.consonant}</LargeText1>
              </ConsonantPartPartDiv>
              <ConsonantPartPartDiv>
                <LargeText1Sub>{item.subscript}</LargeText1Sub>
              </ConsonantPartPartDiv>
            </ConsonantPartDiv>
            <ConsonantPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.fullValue}</LargeText2>
              </ConsonantPartPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.fullValueIpa}</LargeText2>
              </ConsonantPartPartDiv>
            </ConsonantPartDiv>
            <ConsonantPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.consonantValue}</LargeText2>
              </ConsonantPartPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.consonantValueIpa}</LargeText2>
              </ConsonantPartPartDiv>
            </ConsonantPartDiv>
          </ConsonantFullDiv>
        ))}
        <ConsonantFullDiv>
          <ConsonantPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Vowel</LargeText2>
            </ConsonantPartPartDiv>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Series A</LargeText2>
            </ConsonantPartPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Phonetic</LargeText2>
            </ConsonantPartPartDiv>
          </ConsonantPartDiv>
          <ConsonantPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Series O</LargeText2>
            </ConsonantPartPartDiv>
            <ConsonantPartPartDiv>
              <LargeText2>Phonetic</LargeText2>
            </ConsonantPartPartDiv>
          </ConsonantPartDiv>
        </ConsonantFullDiv>
        {vowels.map((item) => (
          <ConsonantFullDiv id={item.vowel} key={item.vowel}>
            <ConsonantPartDiv>
              <ConsonantPartPartDiv>
                <LargeText1Sub>{item.vowel}</LargeText1Sub>
              </ConsonantPartPartDiv>
            </ConsonantPartDiv>
            <ConsonantPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.aSeries}</LargeText2>
              </ConsonantPartPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.aSeriesIpa}</LargeText2>
              </ConsonantPartPartDiv>
            </ConsonantPartDiv>
            <ConsonantPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.oSeries}</LargeText2>
              </ConsonantPartPartDiv>
              <ConsonantPartPartDiv>
                <LargeText2>{item.oSeriesIpa}</LargeText2>
              </ConsonantPartPartDiv>
            </ConsonantPartDiv>
          </ConsonantFullDiv>
        ))}
      </AlphabetArea>
    </>
  )
}

export default FullKhmerAlphabet
