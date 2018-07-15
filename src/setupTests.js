// Required to run the Snapshot tests using enzyme-to-json/serializer in React 16
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Mock querySelector
document.querySelector = () => document.createElement('div');
