import React from 'react';
import styled from 'styled-components'

export default function SingleTicketTask() {
    return (
        <Container>
            <Heading>Heading</Heading>
            <KeyValueContainer>
                <BoldText>Assigned By:</BoldText>
                <NormalText>Akshay</NormalText>
            </KeyValueContainer>
            <KeyValueContainer>
                <BoldText>Assigned To:</BoldText>
                <NormalText>Akshay</NormalText>
            </KeyValueContainer>
            <DescriptionContainer>
                <BoldText>Description:</BoldText>
                <NormalText>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum voluptatibus, odit laboriosam vitae et enim officiis optio unde error commodi,
                    fuga repudiandae praesentium reiciendis accusantium harum tempore eligendi nihil? Esse!
                </NormalText>
            </DescriptionContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 800px;
    margin: 0 auto;
    margin-top: 160px;
    padding: 24px 48px;
`

const Heading = styled.h1`
    border-bottom: 1px solid #e1e1e2;
    font-size: 48px;
    line-height: 66px;
    color: #130260;
    padding-bottom: 12px;
    margin-bottom: 20px;
`

const KeyValueContainer = styled.div`
    display: flex;
    margin-top: 12px;
`

const BoldText = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #090030;
    margin-right: 8px;
`

const NormalText = styled.p`
    font-size: 14px;
    color: #090030;
`

const DescriptionContainer = styled.div`
    margin-top: 12px;
`