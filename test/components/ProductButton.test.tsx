import React from 'react';
import render from 'react-test-renderer';
import { ProductButtons } from '../../src/components';

describe('ProductButtons', () => {
  test('debe mostrar el componente sin parametros adicionales', () => {
    const wrapper = render.create(<ProductButtons />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente correctamente con una clase custom', () => {
    const wrapper = render.create(<ProductButtons className="custom-class" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe mostrar el componente correctamente con una clase custom y un estilo custom', () => {
    const wrapper = render.create(
      <ProductButtons
        className="custom-class"
        style={{ backgroundColor: 'black' }}
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
