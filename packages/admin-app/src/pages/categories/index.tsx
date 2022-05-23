import { CategoryList } from "~/components/organisms/Category/List";
import { pagesPath } from "~/libs/$path";

const Component = () => {
  const href = (href: string) =>
    pagesPath.categories[":categoryUid"]
      .$url()
      .pathname.replace(":categoryUid", href);

  return <CategoryList href={href} />;
};

export default Component;
