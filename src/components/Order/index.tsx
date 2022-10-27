import {useState, FC, useEffect} from 'react';
import {nanoid} from 'nanoid';

import {lang} from 'lang/ru';
import {
  Back,
  BodyBack,
  Body,
  Container,
  Close,
  Title,
  Step,
  Content,
  Selector,
  Item,
  ItemTitle,
  Box,
  Icon,
  Buttons,
  Next,
  Cancel,
  Description,
  SuccContainer,
  Success,
  SuccIcon,
  SuccText,
  SuccOk
} from './layout';
import {OrderForm} from 'components/Forms/OrderForm';

interface OrderProps {
  onClose: () => void
}

export const Order: FC<OrderProps> = ({onClose}) => {
  const [step, setStep] = useState(1);
  const {order} = lang;
  const [projectType, setProjectType] = useState(0);
  const [help, setHelp] = useState(0);
  const [timing, setTiming] = useState(0);
  const [succ, setSucc] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isType = (idx: number) => projectType === idx;
  const isHelp = (idx: number) => help === idx;
  const isTiming = (idx: number) => timing === idx;

  const next = () => setStep(step + 1);

  if (succ) return (
    <Back>
      <BodyBack />
      <Body>
        <SuccContainer>
          <Success>
            <SuccIcon />
            <SuccText>{order.success}</SuccText>
            <SuccOk onClick={onClose}>{order.ok}</SuccOk>
          </Success>
          <Close onClick={onClose} />
        </SuccContainer>
      </Body>
    </Back>
  );

  return (
    <Back>
      <BodyBack />
      <Body>
        <Container>
          <Title>{order.title}</Title>
          <Step>{order.step[step - 1]}</Step>
          {step === 1 && (
            <Content>
              <Selector>
                {order.projectType.map((type: {icon: string, title: string}, idx: number) => (
                  <Item key={nanoid()} onClick={() => setProjectType(idx)}>
                    <Box active={isType(idx)}><Icon active={isType(idx)} icon={type.icon} /></Box>
                    <ItemTitle active={isType(idx)}>{type.title}</ItemTitle>
                  </Item>
                ))}
              </Selector>
              <Buttons>
                <Next onClick={next}>{order.next}</Next>
                <Cancel onClick={onClose}>{order.cancel}</Cancel>
              </Buttons>
            </Content>
          )}
          {step === 2 && (
            <Content>
              <Selector>
                {order.help.map((type: {icon: string, title: string}, idx: number) => (
                  <Item key={nanoid()} onClick={() => setHelp(idx)}>
                    <Box active={isHelp(idx)}><Icon active={isHelp(idx)} icon={type.icon} /></Box>
                    <ItemTitle active={isHelp(idx)}>{type.title}</ItemTitle>
                  </Item>
                ))}
              </Selector>
              <Buttons>
                <Next onClick={next}>{order.next}</Next>
                <Cancel onClick={onClose}>{order.cancel}</Cancel>
              </Buttons>
            </Content>
          )}
          {step === 3 && (
            <Content>
              <Description />
              <Buttons>
                <Next onClick={next}>{order.next}</Next>
                <Cancel onClick={onClose}>{order.cancel}</Cancel>
              </Buttons>
            </Content>
          )}
          {step === 4 && (
            <Content>
              <Selector>
                {order.timing.map((type: {icon: string, title: string}, idx: number) => (
                  <Item key={nanoid()} onClick={() => setTiming(idx)}>
                    <Box active={isTiming(idx)}><Icon active={isTiming(idx)} icon={type.icon} /></Box>
                    <ItemTitle active={isTiming(idx)}>{type.title}</ItemTitle>
                  </Item>
                ))}
              </Selector>
              <Buttons>
                <Next onClick={next}>{order.next}</Next>
                <Cancel onClick={onClose}>{order.cancel}</Cancel>
              </Buttons>
            </Content>
          )}
          {step === 5 && (
            <Content>
              <OrderForm />
              <Buttons>
                <Next onClick={() => setSucc(true)}>{order.send}</Next>
                <Cancel onClick={onClose}>{order.cancel}</Cancel>
              </Buttons>
            </Content>
          )}
          <Close onClick={onClose} />
        </Container>
      </Body>
    </Back>
  );
};
