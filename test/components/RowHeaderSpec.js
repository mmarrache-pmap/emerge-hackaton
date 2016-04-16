import { shallowComponentWithProps } from '../test_helper';
import RowHeader from '../../src/components/RowHeader';

describe('(Component) <RowHeaderSpec />', () => {
  let props = {
    rowData: [
      {label: 'TypeName', sm: 4, align: 'text-center'},
      {label: 'Internal Doc. ID', sm: 2, align: 'text-center'},
      {label: 'Version', sm: 1, align: 'text-center'},
      {label: 'Modified', sm: 2, align: 'text-center'},
      {label: 'Status', sm: 3, align: 'text-center'},
    ]
  };

  let component;

  beforeEach(() => {
    component = shallowComponentWithProps(RowHeader, props);
  });

  it('Should be present after shallow call', () => {
    expect(component).to.be.present();
  });

  it('Should have the correct amount of label columns', () => {
    expect(component.findWhere(e => e.hasClass('text-center'))).to.have.length(5);
  });

  it('Should render with correct column sizes', () => {
    // console.log(component.find('.text-center').filterWhere(e => e.props().sm === 2).debug());
    expect(component.find('.text-center').filterWhere(e => e.props().sm === 1)).to.have.length(1);
    expect(component.find('.text-center').filterWhere(e => e.props().sm === 2)).to.have.length(2);
    expect(component.find('.text-center').filterWhere(e => e.props().sm === 3)).to.have.length(1);
    expect(component.find('.text-center').filterWhere(e => e.props().sm === 4)).to.have.length(1);
  });

  it('Should have columns with the correct labels', () => {
    // console.log(component.find('b').findWhere(e => e.text() === 'Version').at(0).text());
    expect(component.find('b').findWhere(e => e.text() === 'TypeName').at(0).text()).to.match(/TypeName/);
    expect(component.find('b').findWhere(e => e.text() === 'Internal Doc. ID').at(0).text()).to.match(/Internal Doc\. ID/);
    expect(component.find('b').findWhere(e => e.text() === 'Version').at(0).text()).to.match(/Version/);
    expect(component.find('b').findWhere(e => e.text() === 'Modified').at(0).text()).to.match(/Modified/);
    expect(component.find('b').findWhere(e => e.text() === 'Status').at(0).text()).to.match(/Status/);
  });
});
