import Menu from "./Menu";
import Forum from "./Forum";
import Categories from "./Categories";
import DiscussionForum from "./DiscussionForum";

export default function MainPage() {
  return (
    <div>
      <Menu />
      <Forum />
      <Menu />
      <Categories />
      <Menu />
      <DiscussionForum />
    </div>
  );
}
