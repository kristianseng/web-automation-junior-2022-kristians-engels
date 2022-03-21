import { NavigationTest } from "../testobjects/navigationTest";
import { InputTest } from "../testobjects/inputTest";

class Tests {
  constructor() {
    this.inputTest = new InputTest();
    this.navigationTest = new NavigationTest();
  }
}
export const tests = new Tests();
