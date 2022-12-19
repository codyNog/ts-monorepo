import { Post } from "@my/shared/entities/Post";
import {
	AutoComplete,
	Button,
	Input,
	Label,
	Switch,
	Tag,
	Text,
	Textarea,
} from "@web/ui/components";
import { Box, Form, VStack } from "@web/ui/components/layouts";
import { MarginProps } from "@web/ui/components/style";
import { usePostForm } from "~/store/components/organisms/Post/Form";

type Props = MarginProps & { post?: Post; submit: (post: Post) => void };

export const PostForm = ({
	post: postProps,
	submit,
	...marginProps
}: Props): JSX.Element => {
	const {
		post,
		register,
		handleSubmit,
		addCategory,
		removeCategory,
		onChangeCategoryInput,
	} = usePostForm(postProps);

	return (
		<Form {...marginProps}>
			<VStack spacing={4}>
				<Text>記事作成</Text>
				<Label htmlFor={"title"} label={"タイトル"}>
					<Input data-testid={"title"} {...register("title")} />
				</Label>
				<Label htmlFor={"description"} label={"概要"}>
					<Input data-testid={"description"} {...register("description")} />
				</Label>
				<Label htmlFor={"published"} label={"公開"}>
					<Switch data-testid={"published"} {...register("published")} />
				</Label>
				<Label htmlFor={"body"} label={"本文"}>
					<Textarea data-testid={"body"} {...register("body")} />
				</Label>
				<Label htmlFor={"categories"} label={"カテゴリ"}>
					<AutoComplete
						id={"categories"}
						loadOptions={onChangeCategoryInput}
						onChange={addCategory}
					/>
				</Label>
				<Box>
					{post.categories.map((elem) => (
						<Tag key={elem.uid} onClose={() => removeCategory(elem)}>
							{elem.name}
						</Tag>
					))}
				</Box>
				<Button onClick={handleSubmit(submit)}>送信</Button>
			</VStack>
		</Form>
	);
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
	const { render } = await import("@testing-library/react");

	describe("PostForm", () => {
		it("初期状態", () => {
			const { getByTestId } = render(<PostForm submit={() => {}} />);

			expect(getByTestId("title").innerHTML).toEqual("");
			expect(getByTestId("description").innerHTML).toEqual("");
			expect(getByTestId("body").innerHTML).toEqual("");
		});
	});
}
