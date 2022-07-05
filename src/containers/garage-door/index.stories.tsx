import { forwardRef } from 'react';

import { Meta, Story } from '@storybook/react';

import { styled } from '../../styles/stitches';

import { Component, Door, GarageDoor } from './index';

export default {
  title: 'containers/garage-door',
  component: GarageDoor,
} as Meta;

const Spacer = styled('div', {
  backgroundColor: '#333333',
  height: '100vh',
  border: '1px dashed red;',
});

const ComponentA = styled('div', {
  backgroundColor: '#666666',
  height: '100vh',
});

const ComponentBStyle = styled('div', {
  backgroundColor: '#999999',
  height: '100vh',
});

ComponentBStyle.displayName = 'ComponentBStyle';

const ComponentB = forwardRef((props, ref) => {
  console.log('component B percentage', props.percentage);
  return <ComponentBStyle ref={ref} {...props} />;
});

ComponentB.displayName = 'ComponentB';

/*
The Garage "Door" percentage needs to be passed on to the "Component" percentage
*/
export const Interactive: Story = (props) => {
  return (
    <>
      <Spacer />
      <GarageDoor {...props}>
        <Door>
          <ComponentA>
            <p>this is the garage door</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a sapien sed leo porttitor aliquet.
              Proin vel hendrerit mauris. Curabitur suscipit hendrerit sapien, ut convallis odio faucibus et. Integer
              finibus arcu iaculis, varius mauris eget, gravida lectus. Nulla mi sapien, egestas a commodo quis,
              sollicitudin nec est. Cras semper leo nisl, commodo suscipit velit condimentum efficitur. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Aenean euismod dictum elit, nec commodo mi consequat nec. Nullam eget bibendum lectus. Aliquam tempus
              felis sed lectus viverra, ac varius nibh posuere. Donec leo velit, faucibus et lectus nec, gravida
              fringilla ipsum. Donec id nulla vestibulum, placerat tellus sit amet, tincidunt augue. Maecenas malesuada
              vestibulum consectetur. Pellentesque pharetra tortor egestas semper tempor. Nulla pulvinar porta neque at
              tempor. Quisque vehicula arcu ac porta consequat. Aenean tempor tempus enim iaculis porta. Vestibulum et
              massa at tortor venenatis consequat. Sed a feugiat ipsum. In rutrum maximus ipsum et lobortis.
            </p>
          </ComponentA>
        </Door>
        <Component>
          <ComponentB>
            <p>this is the revealed component</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a sapien sed leo porttitor aliquet.
              Proin vel hendrerit mauris. Curabitur suscipit hendrerit sapien, ut convallis odio faucibus et. Integer
              finibus arcu iaculis, varius mauris eget, gravida lectus. Nulla mi sapien, egestas a commodo quis,
              sollicitudin nec est. Cras semper leo nisl, commodo suscipit velit condimentum efficitur. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Aenean euismod dictum elit, nec commodo mi consequat nec. Nullam eget bibendum lectus. Aliquam tempus
              felis sed lectus viverra, ac varius nibh posuere. Donec leo velit, faucibus et lectus nec, gravida
              fringilla ipsum. Donec id nulla vestibulum, placerat tellus sit amet, tincidunt augue. Maecenas malesuada
              vestibulum consectetur. Pellentesque pharetra tortor egestas semper tempor. Nulla pulvinar porta neque at
              tempor. Quisque vehicula arcu ac porta consequat. Aenean tempor tempus enim iaculis porta. Vestibulum et
              massa at tortor venenatis consequat. Sed a feugiat ipsum. In rutrum maximus ipsum et lobortis.
            </p>
          </ComponentB>
        </Component>
      </GarageDoor>
      <Spacer />
    </>
  );
};
