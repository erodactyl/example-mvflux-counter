import { Store } from "mvflux";

class CustomStore extends Store {
  data = {
    counter: 0
  };
  increment = () => {
    this.setData(data => ({ counter: data.counter + 1 }));
  };
}

export default new CustomStore();
