import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// console.log(new User());
// console.log(new Company());
console.log(google);
const user = new User();
const company = new Company();
const map = new CustomMap();
map.addMarker(user);
map.addMarker(company);
