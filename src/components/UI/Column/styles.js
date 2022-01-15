import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  border-radius: 8px;
  margin-right: 16px;
  margin-bottom: 24px;
`

export const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`

export const Caption = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 8px;
`

export const Name = styled.span`
  display: inline-block;
`

export const Likes = styled.span`
  display: inline-flex;
  flex-flow: row wrap;
`

export const Heart = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 4px;
`

export const Duration = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  border-radius: 5px;
  background: #000;
  padding: 4px;
  opacity: 0.6;
  color: #fff;
  font-weight: bold;
`
