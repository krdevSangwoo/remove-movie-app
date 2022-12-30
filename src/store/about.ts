import { Store } from "../core/core";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://heropy.blog/css/images/logo.png",
  name: "KrDevSang / Lee Sang Woo",
  email: "tkddn8998@gmail.com",
  blog: "https://krdevsang.tistory.com/",
  github: "https://github.com/krdevSangwoo",
  repository: "https://github.com/krdevSangwoo?tab=repositories",
});
