import Avatar from '../../src/components/Avatar';
import { shallowComponent } from '../test_helper';

describe('(Component) <Avatar />', () => {
  let component;

  beforeEach(() => {
    component = shallowComponent(Avatar);
  });

  it('Should be present after shallow call', () => {
    expect(component).to.be.present();
  });
});
