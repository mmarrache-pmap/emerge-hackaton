import { shallowComponent } from '../test_helper';
import Footer from '../../src/components/Footer';

describe('(Component) <Footer />', () => {
  let component;

  beforeEach(() => {
    component = shallowComponent(Footer);
  });

  it('should be present after shallow call', () => {
    expect(component).to.be.present();
  });

  it('should render as a footer', () => {
    expect(component.type()).to.equal('footer');
  });

  it('should have a role of \'copyright\'', () => {
    expect(component).to.have.prop('role').to.equal('copyright');
  });
});
