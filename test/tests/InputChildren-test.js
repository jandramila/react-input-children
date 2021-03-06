import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import InputChildren from '../../src';


describe('InputChildren', () => {

  it('should be displaying input and child', () => {
    const component = (
      <InputChildren className='input'>
        <a className='link'>Link</a>
      </InputChildren>
    );
    const InputChildrenWrapper = TestUtils.renderIntoDocument(component);

    const input = TestUtils.scryRenderedDOMComponentsWithClass(InputChildrenWrapper, 'input');
    expect(input.length).toBe(1, 'input is not displayed');

    const link = TestUtils.scryRenderedDOMComponentsWithClass(InputChildrenWrapper, 'link');
    expect(link.length).toBe(1, 'child link is not displayed');
  });

  // it('input should have correct right padding', function() {
  //   const component =
  //     <div>
  //       <InputChildren className='input'>
  //         <a className='link'>Link</a>
  //       </InputChildren>
  //     </div>;
  //   const InputChildrenWrapper = TestUtils.renderIntoDocument(component);
  //
  //   const input = TestUtils.findRenderedDOMComponentWithClass(
  //     InputChildrenWrapper,
  //     'input'
  //   ).getDOMNode();
  //   console.log(InputChildrenWrapper.getDOMNode().style.width);
  // });

});
