import React from 'react'
import {
  ConsonantArea,
  ConsonantFullDiv,
  LargeText,
  LargeText1,
  LargeText2,
  HeadlineDiv,
} from './FiveConsonantsLink.elements'

const FiveConsonantsLink = (props) => {
  function answerFunction(event, item) {
    if (props.completed) {
      return null
    }
    if (item === props.consonant.consonant) {
      props.changeComplete(props.test, props.num, true)
    } else {
      event.target.style.color = 'red'
    }
  }

  return (
    <>
      <ConsonantArea>
        <ConsonantFullDiv>
          <HeadlineDiv>
            <LargeText2>What letter corresponds to</LargeText2>
          </HeadlineDiv>
          <LargeText1>{props.consonant.fullValue}</LargeText1>
        </ConsonantFullDiv>
        {props.linkArray.consonant ? (
          <>
            <ConsonantFullDiv>
              <LargeText>{props.consonant.consonant}</LargeText>
            </ConsonantFullDiv>
            <ConsonantFullDiv>
              <LargeText>{props.consonant.consonant}</LargeText>
            </ConsonantFullDiv>
            <ConsonantFullDiv>
              <LargeText>{props.consonant.consonant}</LargeText>
            </ConsonantFullDiv>
            <ConsonantFullDiv>
              <LargeText>{props.consonant.consonant}</LargeText>
            </ConsonantFullDiv>
          </>
        ) : (
          props.linkArray.map((item) => (
            <ConsonantFullDiv
              style={
                !props.completed
                  ? { color: 'none' }
                  : props.completed && item === props.consonant.consonant
                  ? { color: 'green' }
                  : props.completed
                  ? { color: 'red' }
                  : { color: 'none' }
              }
              id={item}
              key={item}
              onClick={(event) => answerFunction(event, item)}
            >
              <LargeText>{item}</LargeText>
            </ConsonantFullDiv>
          ))
        )}
      </ConsonantArea>
    </>
  )
}

export default FiveConsonantsLink
