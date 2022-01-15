import React from 'react'
import heartIcon from '../../../assets/like.png'
import { getDuration } from '../../../utils/translations/duration'
import {
  Container,
  Thumbnail,
  Caption,
  Duration,
  Name,
  Likes,
  Heart,
} from './styles'

function Column({ data }) {
  const { thumbnailUrl, likes, firstName, lastName, duration } = data

  const time = getDuration(duration)

  return (
    <Container>
      <Thumbnail src={thumbnailUrl} alt="thumbnail" />

      <Duration>{time}</Duration>

      <Caption>
        <Name>
          {firstName} {lastName}
        </Name>
        <Likes>
          {likes} <Heart src={heartIcon} />
        </Likes>
      </Caption>
    </Container>
  )
}
export default Column
