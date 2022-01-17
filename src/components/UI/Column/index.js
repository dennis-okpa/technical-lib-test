import React, { useContext } from 'react'
import heartIcon from '../../../assets/like.png'
import { getDuration } from '../../../utils/translations/duration'
import { ViewerContext } from '../../Pages/Library/index'
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
  const { thumbnailUrl, likes, firstName, lastName, duration, imageUrl } = data

  const time = getDuration(duration)

  const setImage = useContext(ViewerContext)

  return (
    <Container
      onClick={() => {
        setImage(imageUrl)
      }}
    >
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
