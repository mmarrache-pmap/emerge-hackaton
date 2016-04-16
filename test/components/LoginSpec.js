import Login from '../../src/components/Login';
import { mountComponent } from '../test_helper';

describe('(Component) <Login />', () => {
  let component;

  beforeEach(() => {
    component = mountComponent(Login);
  });

  it('Should be present after shallow call', () => {
    expect(component).to.be.present();
  });
});
