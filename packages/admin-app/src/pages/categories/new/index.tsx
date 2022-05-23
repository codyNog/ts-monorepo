import { CategoryForm } from "~/components/organisms/Category/Form";
import { useCategoryNewPage } from "~/store/pages/categories/new";

const Component = () => {
  const { submit } = useCategoryNewPage();

  return <CategoryForm submit={submit} />;
};

export default Component;
