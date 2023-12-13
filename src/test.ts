export namespace shape {
  export class ClassB {
    constructor(public a: string) {
      console.log(this.a);
    }
    add() {
      console.log("classe B");
      console.log(this.a);
    }
    test() {
      console.log(this.a);
    }
  }
}
