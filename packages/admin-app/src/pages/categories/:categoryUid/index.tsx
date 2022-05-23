import { CategoryForm } from "~/components/organisms/Category/Form";
import { useCategoryPage } from "~/store/pages/categories/:categoryUid";

const Component = () => {
  const { category, submit } = useCategoryPage();

  if (!category) return null;

  return <CategoryForm category={category} submit={submit} />;
};

export default Component;
