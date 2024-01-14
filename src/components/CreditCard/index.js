import {useState} from 'react'

import {
  MainContainer,
  CreditCardDetailsContainer,
  CreditHeadingContainer,
  CreditCardHeading,
  Horizontal,
  CardContainer,
  Card,
  CardNumber,
  CardHolderText,
  CardHolderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const cardNameToUpperCase = cardName.toUpperCase()

  const onCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardDetailsContainer>
        <CreditHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <Horizontal />
        </CreditHeadingContainer>
        <CardContainer>
          <Card>
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderText>CARDHOLDER NAME</CardHolderText>
            <CardHolderName>{cardNameToUpperCase}</CardHolderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onCardName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
