import { Category } from "@my/shared/entities/Category";
import { Accordion, Button, CenteredSpinner, Text } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { useCategoryList } from "~/store/components/organisms/Category/List";
import { CategoryListForm } from "~/components/organisms/Category/List/Form";
import { VStack, Scroll, Flex } from "@web/ui/components/layouts";
import { Link } from "~/components/atoms/Link";

type ItemProps = MarginProps & {
  href?: string;
  category: Category;
  onClickDeleteButton: (category: Category) => void;
};

const Item = ({
  href,
  category,
  onClickDeleteButton,
  ...marginProps
}: ItemProps): JSX.Element => (
  <Flex {...marginProps} alignItems={"center"}>
    <Link href={href}>
      <Text>{category.name}</Text>
    </Link>
    <Button
      color={"white"}
      bgColor={"red"}
      onClick={() => onClickDeleteButton(category)}
      ml={"auto"}
    >
      削除
    </Button>
  </Flex>
);

type Props = MarginProps & {
  href: (href: string) => string | undefined;
};

export const CategoryList = ({ href, ...marginProps }: Props): JSX.Element => {
  const { categories, onClickDeleteButton, ...rest } = useCategoryList();

  return (
    <VStack spacing={5} {...marginProps}>
      <Accordion title={"カテゴリー検索条件"}>
        <CategoryListForm {...rest} />
      </Accordion>
      <Scroll>
        {!categories && <CenteredSpinner />}
        {categories &&
          categories.map((elem) => (
            <Item
              key={elem.uid}
              href={href(elem.uid)}
              category={elem}
              onClickDeleteButton={onClickDeleteButton}
            />
          ))}
      </Scroll>
    </VStack>
  );
};
