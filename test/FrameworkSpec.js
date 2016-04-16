import React from 'react';
// expect, should are globably defined, but imported for eslint complaint
import {
  mountComponent,
  shallowComponent,
  renderComponent,
  assert,
  expect,
  should } from './test_helper';

class Fixture extends React.Component {
  render() {
    return (
      <div>
        <input id="checked" defaultChecked />
        <input id="not" defaultChecked={false} />
      </div>
    );
  }
}

describe('(Framework) Test Plugins', () => {
  it('Should expose \'expect\' globally.', () => {
    assert.ok(expect);
  });

  it('Should expose \'should\' globally.', () => {
    assert.ok(should);
  });

  it('Should have chai-enzyme working', () => {
    // Shallow Render a Component
    let wrapper = shallowComponent(Fixture);
    expect(wrapper.find('#checked')).to.be.checked();
    expect(wrapper.find('#not')).to.not.be.checked();

    wrapper = mountComponent(Fixture);
    expect(wrapper.find('#checked')).to.be.checked();
    expect(wrapper.find('#not')).to.not.be.checked();

    wrapper = renderComponent(Fixture);
    expect(wrapper.find('#checked')).to.be.checked();
    expect(wrapper.find('#not')).to.not.be.checked();
  });
});
