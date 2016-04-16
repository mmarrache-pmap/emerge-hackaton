import { shallowComponent } from '../test_helper';
import Card from '../../src/components/Card';

describe('(Component) <Card />', () => {
  let component;

  beforeEach(() => {
    component = shallowComponent(Card);
  });

  it('Should be present after shallow call', () => {
    expect(component).to.be.present();
  });

  it('Should render as a div', () => {
    expect(component.type()).to.equal('div');
  });

  it('Should render with \'list-card\' className', () => {
    expect(component.hasClass('list-card')).to.equal(true);
  });
});
