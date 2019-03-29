import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import Decimal from './decimal.component';
import Textbox from '../textbox/textbox.component';

function render(props, render = shallow) {
  const onChange = props.onChange ? props.onChange : (evt) => true;

  return shallow(
    <Decimal
      onChange={ onChange }
      value={ props.value }
      precision={ props.precision }
    />
  );
}

describe('Decimal', () => {
  describe('Input validation', () => {
    it('renders the correct value', () => {
      const input = render({ value: '9.87' });
      expect(input.find(Textbox).prop('value')).toEqual('9.87');
    });

    it('renders a value from props exactly even when invalid', () => {
      const input = render({ value: '12abc.85' });
      expect(input.find(Textbox).prop('value')).toEqual('12abc.85');
    });

    it('updates an external state onChange', () => {
      const onChange = jest.fn();
      const input = render({ onChange });
      input.instance().onChange({ target: { value: '14.79' } });
      expect(onChange).toHaveBeenCalledWith({ target: { value: '14.79' } });
    });

    it('does not allow the user to enter letters or special characters', () => {
      const input = render({ value: '12.34' });
      input.instance().onChange({ target: { value: '1hello$1.27' } });
      expect(input.find(Textbox).prop('value')).toEqual('12.34');
    });

    it('does not allow the user to enter commas after the decimal point', () => {
      const input = render({ value: '34.56' });
      input.instance().onChange({ target: { value: '34.5,,,,6' } });
      expect(input.find(Textbox).prop('value')).toEqual('34.56');
    });

    it('formats with delimiters with input is not active', () => {
      const instance = TestUtils.renderIntoDocument(
        <Decimal value='1234567.00' />
      );
      instance.document = {
        activeElement: null
      }

      const inputs = TestUtils.findAllInRenderedTree(instance, (node) => {
        return TestUtils.isDOMComponent(node) &&
          node.tagName.toLowerCase() === 'input';
      });
      expect(inputs[0].value).toEqual('1,234,567.00');
    });

    it('updates the value after increasing the precison', () => {
      const instance = TestUtils.renderIntoDocument(
        <Decimal value='99.99' precision={4} />
      );
      
      const inputs = TestUtils.findAllInRenderedTree(instance, (node) => {
        return TestUtils.isDOMComponent(node) &&
          node.tagName.toLowerCase() === 'input';
      });
      expect(inputs[0].value).toEqual('99.9900');
    });

    it('updates the value after decreasing the precison', () => {
      const instance = TestUtils.renderIntoDocument(
        <Decimal value='234.1234567' precision={4} />
      );
      
      const inputs = TestUtils.findAllInRenderedTree(instance, (node) => {
        return TestUtils.isDOMComponent(node) &&
          node.tagName.toLowerCase() === 'input';
      });
      expect(inputs[0].value).toEqual('234.1235');
    });

    it('does not allow the precison to be greater than 15', () => {
      const instance = TestUtils.renderIntoDocument(
        <Decimal value='4.1234' precision={20} />
      );
      
      const inputs = TestUtils.findAllInRenderedTree(instance, (node) => {
        return TestUtils.isDOMComponent(node) &&
          node.tagName.toLowerCase() === 'input';
      });
      expect(inputs[0].value).toEqual('4.123400000000000');
    });
  });
  describe('Input handling', () => {
    it('calls setSelection after updating input', async () => {
      const setSelectionMock = jest.fn();
      jest.useFakeTimers();
      const evt = {
        target: {
          value: '123456.78',
          setSelectionRange: setSelectionMock,
          selectionEnd: 3
        }
      };
      const input = render({ value: '1234567.00' });
      input.instance().onChange(evt);
      jest.runAllTimers();
      expect(setSelectionMock).toHaveBeenCalledWith(3, 3);
    });
  });
});
