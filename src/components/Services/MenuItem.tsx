import {FC, ReactNode} from 'react';

import {
  MenuItem as Item,
  MenuItemTitle as Title,
  MenuItemContent as Content
} from './layout';

interface MenuItemProps {
  title: string,
  content: string,
  active: boolean,
  children: ReactNode,
  onClick: () => void
}

export const MenuItem: FC<MenuItemProps> = ({active, title, content, onClick}) => {
  return (
    <Item onClick={onClick}>
      <Title active={active}>{title}</Title>
      {active && <Content dangerouslySetInnerHTML={{__html: content}} />}
    </Item>
  );
};
